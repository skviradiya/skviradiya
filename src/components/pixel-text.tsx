"use client";

import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";

interface PixelTextProps {
  text: string;
  className?: string;
}

export function PixelText({ text, className = "" }: PixelTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end start"], // Starts scattering when scrolling down
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Array<{
      x: number;
      y: number;
      dx: number;
      dy: number;
      size: number;
    }> = [];
    let animationFrameId: number;
    let resizeObserver: ResizeObserver;

    const initParticles = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      if (width === 0 || height === 0) return;

      canvas.width = width;
      canvas.height = height;

      const offCanvas = document.createElement("canvas");
      offCanvas.width = width;
      offCanvas.height = height;
      const offCtx = offCanvas.getContext("2d", { willReadFrequently: true });
      if (!offCtx) return;

      const fontSize = Math.min(
        (width / Math.max(text.length, 1)) * 1.8,
        height * 0.8,
      );
      offCtx.font = `bold ${fontSize}px "Fira Code", monospace`;
      offCtx.fillStyle = "white";
      offCtx.textAlign = "center";
      offCtx.textBaseline = "middle";
      offCtx.fillText(text, width / 2, height / 2);

      const imageData = offCtx.getImageData(0, 0, width, height);
      const data = imageData.data;
      particles = [];

      const step = 4; // Distance between dots

      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const index = (y * width + x) * 4;
          const alpha = data[index + 3];

          if (alpha > 128) {
            particles.push({
              x,
              y,
              dx: (Math.random() - 0.5) * 800,
              dy: (Math.random() - 0.5) * 800,
              size: 2 + Math.random() * 1.5, // Slight randomized dot sizes
            });
          }
        }
      }
    };

    initParticles();

    // Re-run init when fonts finish loading to ensure text is rendered correctly
    if (document.fonts) {
      document.fonts.ready.then(initParticles);
    }

    resizeObserver = new ResizeObserver(() => initParticles());
    resizeObserver.observe(container);

    const render = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const progress = scrollYProgress.get() || 0;
      const scatter = Math.pow(progress, 1.2);
      const alpha = Math.max(0, 1 - progress * 1.5);

      if (alpha > 0) {
        ctx.fillStyle = `rgba(6, 182, 212, ${alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `rgba(6, 182, 212, ${alpha * 0.8})`;

        particles.forEach((p) => {
          const cx = p.x + p.dx * scatter;
          const cy = p.y + p.dy * scatter;
          ctx.fillRect(cx, cy, p.size, p.size);
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [text, scrollYProgress]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden flex items-center justify-center pointer-events-none ${className}`}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
