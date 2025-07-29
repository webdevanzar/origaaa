"use client";
import { useEffect, useRef, ReactNode, CSSProperties } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  sensitivity?: number;
}

export const TiltCard = ({ 
  children,
  className = "",
  sensitivity = 15
}: TiltCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const easingActiveRef = useRef<boolean>(false);

  useEffect(() => {
    const ct = containerRef.current;
    const inner = innerRef.current;
    if (!ct || !inner) return;

    const easeOutQuad = (t: number): number => t * (2 - t);

    const animateEasing = (
      startX: number,
      startY: number,
      endX: number,
      endY: number,
      duration: number
    ): void => {
      const startTime = performance.now();

      const animate = (time: number): void => {
        const progress = Math.min((time - startTime) / duration, 1);
        const easedProgress = easeOutQuad(progress);
        const currentX = startX + (endX - startX) * easedProgress;
        const currentY = startY + (endY - startY) * easedProgress;

        inner.style.setProperty("--rotate-x", `${currentX}deg`);
        inner.style.setProperty("--rotate-y", `${currentY}deg`);

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          easingActiveRef.current = false;
        }
      };

      easingActiveRef.current = true;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent): void => {
      if (easingActiveRef.current) return;

      const rect = ct.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = (y / rect.height - 0.5) * sensitivity;
      const rotateY = (x / rect.width - 0.5) * -sensitivity;

      const currentX = parseFloat(inner.style.getPropertyValue("--rotate-x")) || 0;
      const currentY = parseFloat(inner.style.getPropertyValue("--rotate-y")) || 0;

      animateEasing(currentX, currentY, rotateX, rotateY, 100);
    };

    const handleMouseLeave = (): void => {
      const currentX = parseFloat(inner.style.getPropertyValue("--rotate-x")) || 0;
      const currentY = parseFloat(inner.style.getPropertyValue("--rotate-y")) || 0;
      animateEasing(currentX, currentY, 0, 0, 200);
    };

    ct.addEventListener("mousemove", handleMouseMove);
    ct.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      ct.removeEventListener("mousemove", handleMouseMove);
      ct.removeEventListener("mouseleave", handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [sensitivity]);

  return (
    <div 
      ref={containerRef}
      className={`relative ${className}`}
    >
      <div
        ref={innerRef}
        className="w-full h-full transition-transform duration-400 ease-out"
        style={{
          transform: "rotateX(var(--rotate-x, 0)) rotateY(var(--rotate-y, 0))",
          transformStyle: "preserve-3d",
        } as CSSProperties}
      >
        {children}
      </div>
    </div>
  );
};