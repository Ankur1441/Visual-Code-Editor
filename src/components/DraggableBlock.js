import React from "react";
import { useDrag } from "react-dnd";

export default function DraggableBlock({ type, children, className }) {
  const [{ isDragging }, dragRef] = useDrag({
    type: "BLOCK",
    item: { type }, 
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={dragRef}
      className={`${className} ${isDragging ? "opacity-50" : ""}`}
    >
      {children}
    </div>
  );
}
