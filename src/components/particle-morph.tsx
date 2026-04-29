"use client";

import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";

type ShapeDef = { type: "avatar" } | { type: "text"; text: string };

const shapeDefinitions: ShapeDef[] = [
  { type: "avatar" },
  { type: "text", text: "</>" },
  { type: "text", text: "DEV" },
];

interface PixelPoint {
  x: number;
  y: number;
}

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  color: string;
  size: number;
  speed: number;
  wanderAngle: number;
  wanderRadius: number;
  scatterAngle: number;
  scatterSpeed: number;
}

const getShapePixels = (shape: ShapeDef, maxSize: number) => {
  const offscreen = document.createElement("canvas");
  // Use a fixed high resolution for text shapes to ensure clarity,
  // and a dynamic size for avatar to adjust to screen space.
  const size = shape.type === "text" ? 600 : Math.min(maxSize, 420);
  offscreen.width = size;
  offscreen.height = size;
  const ctx = offscreen.getContext("2d");
  if (!ctx) return [];

  ctx.clearRect(0, 0, size, size);
  ctx.fillStyle = "white";

  if (shape.type === "text") {
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = `bold ${size * 0.4}px "Fira Code", monospace`; // Scale font with offscreen canvas size
    ctx.fillText(shape.text, size / 2, size / 2);
  } else if (shape.type === "avatar") {
    // Draw custom person + laptop shape
    const scale = size / 400;
    ctx.scale(scale, scale);

    // Person Head
    ctx.beginPath();
    ctx.arc(130, 150, 40, 0, Math.PI * 2);
    ctx.fill();

    // Person Shoulders/Body
    ctx.beginPath();
    ctx.arc(130, 240, 60, Math.PI, 0);
    ctx.fill();
    ctx.fillRect(70, 240, 120, 80);

    // Laptop Screen
    ctx.fillRect(190, 140, 150, 110);
    ctx.clearRect(200, 150, 130, 90);

    // Code lines on screen
    ctx.fillStyle = "white";
    ctx.fillRect(210, 165, 50, 10);
    ctx.fillRect(210, 185, 90, 10);
    ctx.fillRect(210, 205, 70, 10);

    // Laptop Base
    ctx.fillRect(140, 260, 250, 25);

    // Reset transform for pixel extraction
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  }

  const imageData = ctx.getImageData(0, 0, size, size);
  const data = imageData.data;
  const points: PixelPoint[] = [];
  const step = shape.type === "text" ? 8 : 5; // Smaller step for avatar (more detail), larger for text (more distinct pixels)

  for (let y = 0; y < size; y += step) {
    for (let x = 0; x < size; x += step) {
      const idx = (y * size + x) * 4;
      if (data[idx + 3] > 128) {
        points.push({ x: x - size / 2, y: y - size / 2 });
      }
    }
  }

  return points;
};

export function ParticleMorph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollY } = useScroll();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const particles: Particle[] = [];
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const buildShapes = () =>
      shapeDefinitions.map(
        (shape) => getShapePixels(shape, Math.min(width * 0.8, height * 0.8)), // Max size relative to viewport
      );

    const shapes = buildShapes();
    const maxParticles = Math.max(...shapes.map((shape) => shape.length));

    for (let i = 0; i < maxParticles; i += 1) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        baseX: Math.random() * width,
        baseY: Math.random() * height,
        color: `rgba(6, 182, 212, ${Math.random() * 0.4 + 0.6})`, // Even brighter/more opaque cyan
        size: Math.random() * 1.5 + 1.5, // Larger base size for particles
        speed: Math.random() * 0.06 + 0.05, // Faster shape morphing
        wanderAngle: Math.random() * Math.PI * 2,
        wanderRadius: Math.random() * 1.5 + 0.3, // Even tinier wander radius = more fixed, crisp shape
        scatterAngle: Math.random() * Math.PI * 2,
        scatterSpeed: Math.random() * 2 + 0.5,
      });
    }

    let currentShape = 0;
    const updateTargets = () => {
      const shape = shapes[currentShape];
      const centerX = width < 768 ? width * 0.5 : width * 0.7;
      const centerY = height * 0.48;
      const scale = width < 768 ? 0.6 : 1.0; // Adjusted overall shape scale

      particles.sort(() => Math.random() - 0.5);

      particles.forEach((particle, index) => {
        if (index < shape.length) {
          particle.baseX = centerX + shape[index].x * scale;
          particle.baseY = centerY + shape[index].y * scale;
        } else {
          const fallbackIdx = index % shape.length;
          particle.baseX = centerX + shape[fallbackIdx].x * scale;
          particle.baseY = centerY + shape[fallbackIdx].y * scale;
        }
      });

      currentShape = (currentShape + 1) % shapes.length;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    updateTargets();
    const shapeInterval = window.setInterval(updateTargets, 3800);

    let currentScroll = 0;
    const unsubscribe = scrollY.on("change", (value) => {
      currentScroll = value;
    });

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const timestamp = Date.now() * 0.001;

      particles.forEach((particle) => {
        const wanderX =
          Math.cos(timestamp + particle.wanderAngle) * particle.wanderRadius;
        const wanderY =
          Math.sin(timestamp + particle.wanderAngle) * particle.wanderRadius;

        let scatterX = 0;

        let scatterY = 0;

        // Only scatter when scrolled down to keep it perfectly formed at the top
        if (currentScroll > 20) {
          const scatterAmount =
            (currentScroll - 20) * particle.scatterSpeed * 0.8;
          scatterX = Math.cos(particle.scatterAngle) * scatterAmount;
          scatterY =
            Math.sin(particle.scatterAngle) * scatterAmount -
            currentScroll * 0.2;
        }

        const targetX = particle.baseX + wanderX + scatterX;
        const targetY = particle.baseY + wanderY + scatterY;

        particle.x += (targetX - particle.x) * particle.speed;
        particle.y += (targetY - particle.y) * particle.speed;

        if (
          particle.x > -20 &&
          particle.x < width + 20 &&
          particle.y > -20 &&
          particle.y < height + 20
        ) {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      clearInterval(shapeInterval);
      cancelAnimationFrame(animationFrameId);
      unsubscribe();
    };
  }, [scrollY]);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
