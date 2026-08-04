"use client";

import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
      cursor.style.transform = "translate(-50%, -50%)";
    };

    document.addEventListener("mousemove", moveCursor);

    const hoverElements = document.querySelectorAll(
      ".cursor-hover, a, button, input, textarea"
    );

    const onEnter = () => {
      cursor.style.width = "60px";
      cursor.style.height = "60px";
      cursor.style.backgroundColor = "#FBFF48";
      cursor.style.mixBlendMode = "normal";
      cursor.style.border = "2px solid black";
    };

    const onLeave = () => {
      cursor.style.width = "24px";
      cursor.style.height = "24px";
      cursor.style.backgroundColor = "#fff";
      cursor.style.mixBlendMode = "difference";
      cursor.style.border = "none";
    };

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <div
      id="cursor"
      className="w-6 h-6 bg-white rounded-full border-2 border-black hidden lg:block"
    />
  );
}
