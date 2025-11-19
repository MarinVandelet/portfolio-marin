import { useEffect, useRef } from "react";

export default function CursorLight() {
  const ref = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX - 175}px, ${e.clientY - 175}px)`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed w-[350px] h-[350px] rounded-full bg-primary-500/20 blur-3xl -z-10 mix-blend-screen"
    />
  );
}
