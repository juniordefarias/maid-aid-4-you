import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function Reveal({ children, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width: "100%", overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: Number(delay) }}
      >
        {children}
      </motion.div>
    </div>
  );
}

Reveal.defaultProps = {
  delay: 0.25,
};