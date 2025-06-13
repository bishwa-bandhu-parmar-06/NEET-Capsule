import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

const Counter = ({ target, duration = 2.5 }) => {
  const ref = useRef(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (val) => Math.round(val));
  const formatted = useTransform(rounded, (num) =>
    num.toLocaleString("en-IN") // Format with Indian-style commas
  );

  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, {
        duration,
        ease: [0.25, 1, 0.5, 1], // Smooth cubic-bezier
      });

      return () => controls.stop();
    }
  }, [isInView, target, duration]);

  return (
    <motion.span ref={ref} className="inline-block">
      {formatted}
    </motion.span>
  );
};

export default Counter;
