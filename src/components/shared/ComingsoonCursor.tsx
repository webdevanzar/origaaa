import React, { useEffect, useState } from "react";

type CursorProps = {
  show: boolean;
  parentRef: React.RefObject<HTMLElement | null>;
  isCompleted: boolean;
};

export const ComingsoonCursor: React.FC<CursorProps> = ({
  show,
  parentRef,
  isCompleted,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!show || !parentRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.body.style.cursor = "none";
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [show, parentRef]);

  return isCompleted ? (
    <div
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
      className={`fixed z-50 pointer-events-none w-32 h-32 ${
        show ? "scale-100 opacity-100" : "scale-0 opacity-0"
      } transition-transform duration-300 bg-black/20 border  backdrop-blur-sm shadow-2xl rounded-full flex items-center justify-center`}
    >
      <p className="text-white font-medium">View Project</p>
    </div>
  ) : (
    <div
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
      className={`fixed z-50 pointer-events-none ${
        show ? "scale-100 opacity-100" : "scale-0 opacity-0"
      } transition-transform duration-300  bg-black/10 rounded-full`}
    >
      <svg
        className="w-32 h-32 animate-spin-slow"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path
            id="circlePath"
            d="
              M 100, 100
              m -75, 0
              a 75,75 0 1,1 150,0
              a 75,75 0 1,1 -150,0
            "
          />
        </defs>
        <text fill="#00ff99" fontSize="19" letterSpacing="6px">
          <textPath href="#circlePath" startOffset="0%">
            • COMING SOON • COMING SOON •
          </textPath>
        </text>
      </svg>
    </div>
  );
};
