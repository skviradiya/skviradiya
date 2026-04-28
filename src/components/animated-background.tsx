"use client";

import { useEffect, useRef } from "react";

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    // Set canvas size
    const resizeCanvas = () => {
      if (
        canvas.width !== window.innerWidth ||
        canvas.height !== window.innerHeight
      ) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const gridSize = 25;
    const colors = ["rgba(6, 182, 212,", "rgba(139, 92, 246,"]; // Cyan & Purple base

    interface Pixel {
      x: number;
      y: number;
      size: number;
      life: number;
      maxLife: number;
      color: string;
    }

    const pixels: Pixel[] = [];
    // Responsive amount based on screen size
    const numPixels = Math.floor(
      (window.innerWidth * window.innerHeight) / 12000,
    );

    const createPixel = (): Pixel => {
      return {
        x: Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize,
        y: Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize,
        size: Math.random() > 0.5 ? 2 : 3,
        life: 0,
        maxLife: Math.random() * 200 + 100, // Frames
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    };

    // Initialize pixels
    for (let i = 0; i < numPixels; i++) {
      pixels.push({
        ...createPixel(),
        life: Math.random() * 200, // stagger starts so they don't fade together
      });
    }

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      pixels.forEach((p, index) => {
        p.life++;

        if (p.life > p.maxLife) {
          // Respawn pixel when its life ends
          pixels[index] = createPixel();
        } else {
          // Smooth fade in and out using Sine wave
          const opacity = Math.sin((p.life / p.maxLife) * Math.PI) * 0.8;

          ctx.fillStyle = `${p.color} ${opacity})`;
          ctx.shadowBlur = 15;
          ctx.shadowColor = `${p.color} ${opacity})`;

          ctx.fillRect(p.x, p.y, p.size, p.size);
        }
      });

      // Continue the animation loop
      animationFrameId = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Cleanup function to remove the event listener and cancel animation frame
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 mix-blend-screen h-screen w-screen"
    />
  );
}
