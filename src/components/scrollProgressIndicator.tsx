import { motion, useScroll } from "framer-motion";

export default function ScrollProgressIndicator() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 right-0 left-0 h-2 md:h-3 bg-rose-500 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  )
}