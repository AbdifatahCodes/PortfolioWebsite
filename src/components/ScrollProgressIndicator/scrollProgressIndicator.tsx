import { motion, useScroll } from "framer-motion";

export default function ScrollProgressIndicator() {
  // Get the scroll progress from Framer Motion's useScroll hook
  const { scrollYProgress } = useScroll();

  // Common styles for the progress indicator
  const commonStyles = "fixed top-0 right-0 left-0 h-2 md:h-3 bg-rose-500 origin-left";

  return (
    <motion.div
      role='scroll-progress-indicator'
      className={commonStyles}
      // scaleX will vary from 0 to 1 based on scroll progress
      style={{ scaleX: scrollYProgress }}
    />
  );
}
