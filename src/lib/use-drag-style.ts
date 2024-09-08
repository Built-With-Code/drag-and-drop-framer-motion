import { animate, MotionValue, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export function useDragStyle<T>(
  value: MotionValue<number>,
  inactiveValue: T,
  activeValue: T
) {
  const styling = useMotionValue(inactiveValue);

  useEffect(() => {
    let isActive = false;
    value.on("change", (latest) => {
      const wasActive = isActive;
      if (latest !== 0) {
        isActive = true;
        if (isActive !== wasActive) {
          animate(styling, activeValue);
        }
      } else {
        isActive = false;
        if (isActive !== wasActive) {
          animate(styling, inactiveValue);
        }
      }
    });
  }, [value, styling]);

  return styling;
}
