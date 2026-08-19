import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  decay: number;
  color: string;
  size: number;
};

const COLORS = ['#00b9f1', '#00e0ff', '#002e6e', '#ec184a', '#ffd166', '#ffffff'];

export default function Fireworks({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = () => canvas.width / dpr;
    const h = () => canvas.height / dpr;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      canvas.width = (rect?.width ?? window.innerWidth) * dpr;
      canvas.height = (rect?.height ?? window.innerHeight) * dpr;
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const burst = (cx: number, cy: number, count = 70) => {
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + Math.random() * 0.25;
        const speed = 2 + Math.random() * 5;
        particlesRef.current.push({
          x: cx,
          y: cy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          decay: 0.008 + Math.random() * 0.012,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          size: 1.5 + Math.random() * 2.5,
        });
      }
    };

    let raf = 0;
    let start = 0;
    let launched = 0;
    const total = 4;

    const frame = (t: number) => {
      if (!start) start = t;
      if (launched < total && t - start > launched * 420) {
        burst(w() * (0.25 + Math.random() * 0.5), h() * (0.28 + Math.random() * 0.32), 60 + Math.floor(Math.random() * 30));
        launched++;
      }
      ctx.clearRect(0, 0, w(), h());
      const parts = particlesRef.current;
      for (let i = parts.length - 1; i >= 0; i--) {
        const p = parts[i];
        p.vy += 0.045;
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;
        if (p.life <= 0) {
          parts.splice(i, 1);
          continue;
        }
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      if (parts.length > 0 || launched < total) {
        raf = requestAnimationFrame(frame);
      } else {
        ctx.clearRect(0, 0, w(), h());
      }
    };

    raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      particlesRef.current = [];
      ctx.clearRect(0, 0, w(), h());
    };
  }, [active]);

  if (!active) return null;
  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-10"
      aria-hidden="true"
    />
  );
}