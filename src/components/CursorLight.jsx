import { useEffect, useRef, useState } from "react";

export default function CursorLight() {
  const ref = useRef(null);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    // désactive si l'écran est trop petit (mobile)
    if (window.innerWidth < 768) {
      setEnabled(false);
      return;
    }

    const move = (e) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX - 175}px, ${e.clientY - 175}px)`;
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!enabled) return null; // ❌ NE MONTE PAS SUR MOBILE

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed w-[350px] h-[350px] rounded-full bg-primary-500/20 blur-3xl -z-10 mix-blend-screen"
    />
  );
}
