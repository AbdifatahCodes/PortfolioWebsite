import { motion } from "framer-motion";

export default function The3Balls() {
  const colorTransition = {
    backgroundColor: {
      duration: 1,
      repeat: Infinity,
      ease: "easeIn",
      repeatDelay: 0,
    },
  };

  const commonClasses =
    "absolute inset-0 flex justify-center h-10 sm:h-14 md:h-16 w-10 sm:w-14 md:w-16 rounded-full border items-center z-1";

  const ballSequences = [
    { colors: ["#0915F8", "#00FF0F", "#E40E0E"], positions: "my-5 sm:my-6 md:my-7 mx-3 sm:mx-4 md:mx-5", },
    { colors: ["#00FF0F", "#E40E0E", "#0915F8"], positions: "mx-5 sm:mx-8 md:mx-10", },
    { colors: ["#E40E0E", "#0915F8", "#00FF0F"], positions: "", },
  ];

  return (
    <div role="the3Balls" className="flex relative mr-20 sm:mr-24 md:mr-32 mt-2 sm:mt-0 md:mt-2 p-0 z-0">
      {ballSequences.map((balls, index) => (
				<motion.div
					role="motion.div"
          key={index}
          className={commonClasses + balls.positions}
          animate={{ backgroundColor: balls.colors }}
          transition={colorTransition}
        ></motion.div>
      ))}
    </div>
  );
}
