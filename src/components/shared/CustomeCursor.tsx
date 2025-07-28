import React, { useEffect, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { TfiHandDrag } from "react-icons/tfi";

type CursorProps = {
  show: boolean;
  parentRef: React.RefObject<HTMLElement | null>;
};

export const CustomCursor: React.FC<CursorProps> = ({ show, parentRef }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isLeft, setIsLeft] = useState(false); // <== this is new

  useEffect(() => {
    if (!show || !parentRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = parentRef.current!.getBoundingClientRect();
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if mouse is on the left or right side of the container
      const mouseXRelative = e.clientX - rect.left;
      setIsLeft(mouseXRelative < rect.width / 2);
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    document.body.style.cursor = "none";
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [show, parentRef]);

  return (
    <div
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
      className={`fixed z-50 hidden md:flex p-4 lg:p-7 border-[1px] justify-center items-center rounded-full backdrop-blur-lg shadow-lg pointer-events-none transition-transform duration-500 ease-in-out ${
        show ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
    >
      {isMouseDown ? (
        <TfiHandDrag
          size={48}
          className={`text-white ${isLeft ? "-rotate-90" : " rotate-90"}`}
        />
      ) : (
        <GoArrowRight
          size={48}
          className={`text-white transition-transform duration-300 ${
            isLeft ? "rotate-180" : ""
          }`}
        />
      )}
    </div>
  );
};
