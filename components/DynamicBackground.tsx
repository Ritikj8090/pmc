"use client";
import { useEffect, useRef } from "react";

export default function DynamicGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const CELL = 60;
    let t = 0, animId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      const driftX = (t * 0.4) % CELL;
      const driftY = (t * 0.25) % CELL;
      const cols = Math.ceil(W / CELL) + 2;
      const rows = Math.ceil(H / CELL) + 2;

      for (let i = 0; i < cols; i++) {
        const x = i * CELL - driftX;
        const pulse = Math.sin(t * 0.03 + i * 0.5) * 0.5 + 0.5;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.strokeStyle = `rgba(34,197,94,${0.04 + pulse * 0.06})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      for (let j = 0; j < rows; j++) {
        const y = j * CELL - driftY;
        const pulse = Math.sin(t * 0.025 + j * 0.6) * 0.5 + 0.5;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.strokeStyle = `rgba(34,197,94,${0.04 + pulse * 0.06})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      t++;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}