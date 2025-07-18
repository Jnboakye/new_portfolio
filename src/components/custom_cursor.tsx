// components/CustomCursor.jsx (or .tsx)
"use client"; // This directive is crucial for client-side interactivity in Next.js 13+ App Router

import React, { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-50 w-40 h-40 rounded-full bg-white/10 blur-2xl transition-transform duration-75"
      style={{
        transform: `translate(${pos.x - 80}px, ${pos.y - 80}px)`,
      }}
    />
  );
};

export default CustomCursor;
