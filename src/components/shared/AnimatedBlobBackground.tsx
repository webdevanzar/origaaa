"use client";
import React, { useEffect, useRef, useCallback } from "react";

interface BlobConfig {
  id: number;
  x: number;
  y: number;
  color: string;
}

interface BlobPosition {
  x: number;
  y: number;
}

interface AnimatedBlobBackgroundProps {
  className?: string;
  blobCount?: number;
  blobPositions?: BlobPosition[];
  colors?: string[];
  animationDuration?: number;
  blurAmount?: number;
  minScale?: number;
  maxScale?: number;
  minOpacity?: number;
  maxOpacity?: number;
  backgroundGradient?: string;
  children?: React.ReactNode;
  uniqueId: string;
}

const AnimatedBlobBackground: React.FC<AnimatedBlobBackgroundProps> = ({
  className = "",
  blobCount = 25,
  blobPositions,
  colors = [" #453115", "#0C3535","#00FFA0","#0C3535" ],
  animationDuration = 2000,
  blurAmount = 20,
  minScale = 1.25,
  maxScale = 2,
  minOpacity = 0.4,
  maxOpacity = 1,
  backgroundGradient = "radial-gradient(50% 104.51% at 50% 50%, #0C3535 0%, #453115 100%)",
  children,
  uniqueId,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRefs = useRef<Record<number, NodeJS.Timeout>>({});

  const rnd = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const rndBorderRadius = useCallback(
    (): string =>
      [...Array(4).keys()].map(() => rnd(30, 85) + "%").join(" ") +
      " / " +
      [...Array(4).keys()].map(() => rnd(30, 85) + "%").join(" "),
    []
  );

  const animateBlob = useCallback(
    (id: number): void => {
      const blob = document.getElementById(
        `blob-${uniqueId}-${id}`
      ) as HTMLDivElement;
      if (!blob) return;

      const animate = (): void => {
        // Clear any existing animation
        if (animationRefs.current[id]) {
          clearTimeout(animationRefs.current[id]);
        }

        // Simple CSS transitions for smooth animation
        blob.style.transition = `all ${animationDuration}ms linear`;
        blob.style.transform = `translate(${rnd(-25, 25)}px, ${rnd(
          -25,
          25
        )}px) rotate(${rnd(-25, 25)}deg) scale(${
          rnd(minScale * 100, maxScale * 100) / 100
        })`;
        blob.style.borderRadius = rndBorderRadius();
        blob.style.opacity = (
          rnd(minOpacity * 100, maxOpacity * 100) / 100
        ).toString();

        // Schedule next animation
        animationRefs.current[id] = setTimeout(() => {
          animate();
        }, animationDuration + rnd(0, 1000));
      };

      animate();
    },
    [
      uniqueId,
      animationDuration,
      minScale,
      maxScale,
      minOpacity,
      maxOpacity,
      rndBorderRadius,
    ]
  );

  const createBlob = useCallback(
    ({ id, x, y, color }: BlobConfig): HTMLDivElement => {
      const blob = document.createElement("div");
      blob.id = `blob-${uniqueId}-${id}`;
      blob.className = `absolute rounded-full`;
      blob.style.cssText = `
      top: ${y}%;
      left: ${x}%;
      background-color: ${color};
      height: 25%;
      width: 12.5%;
      mix-blend-mode: screen;
      transform: scale(${rnd(minScale * 100, maxScale * 100) / 100});
      border-radius: ${rndBorderRadius()};
      opacity: ${rnd(minOpacity * 100, maxOpacity * 100) / 100};
      filter: blur(${blurAmount}px);
    `;

      return blob;
    },
    [
      uniqueId,
      blurAmount,
      minScale,
      maxScale,
      minOpacity,
      maxOpacity,
      rndBorderRadius,
    ]
  );

  const genBlobs = useCallback((): void => {
    const container = containerRef.current;
    if (!container) return;

    // Clear existing blobs
    container.innerHTML = "";

    // Clear existing animations
    Object.values(animationRefs.current).forEach((timeout: NodeJS.Timeout) => {
      clearTimeout(timeout);
    });
    animationRefs.current = {};

    const count = blobPositions ? blobPositions.length : blobCount;

    // Create new blobs
    [...Array(count).keys()].forEach((id: number) => {
      const x = blobPositions ? blobPositions[id].x : rnd(15, 75);
      const y = blobPositions ? blobPositions[id].y : rnd(0, 40);
      const color = colors[rnd(0, colors.length - 1)];
      const blob = createBlob({ x, y, color, id });
      container.appendChild(blob);
      animateBlob(id);
    });
  }, [blobCount, blobPositions, colors, createBlob, animateBlob]);

  useEffect(() => {
    genBlobs();

    // Cleanup function
    return () => {
      Object.values(animationRefs.current).forEach(
        (timeout: NodeJS.Timeout) => {
          clearTimeout(timeout);
        }
      );
    };
  }, [genBlobs]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div
        ref={containerRef}
        className="absolute inset-0 w-full h-full"
        style={{
          background: backgroundGradient,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AnimatedBlobBackground;
