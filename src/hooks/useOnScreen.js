import { useState, useEffect } from "react";

export default function useOnScreen(ref, threshold = 0.3) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);

  return visible;
}
