import { motion } from "framer-motion";
import { useTheme } from "next-themes";

interface NameJiggleProps {
  prefix: string;
  textValue: string;
}

const NameJiggle: React.FC<NameJiggleProps> = ({ prefix, textValue }) => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const getContrastColorForAnimation = (): string => currentTheme === "dark" ? "#ffffff" : "#000000";

  const transitionConfig = (delay: number) => ({
    y: { duration: 1, ease: "easeIn", delay, repeat: Infinity, repeatDelay: 10 },
    color: { duration: 3, ease: "easeIn", delay, repeat: Infinity },
  });

  const yoyoYPoints = ["0rem", "-1rem", "-2rem", "-1rem", "0rem"];
  const yoyoColorGradient = [getContrastColorForAnimation(), "#ff0000", "#ff00fb", "#0003ff", "#00fffa", "#21ff00", "#fbff00", getContrastColorForAnimation()];

  const letterAnimate = {
    y: [...yoyoYPoints, ...yoyoYPoints],
    color: [...yoyoColorGradient, ...yoyoColorGradient],
  };

  let delayIncrement = 0.8;

  const AnimatedLetters = Array.from(textValue).map((letter, index) => {
    if (letter === " ") {
      return <p key={index}>&nbsp;</p>;
    } else {
      delayIncrement += 0.2;
      return (
        <motion.p
          key={index}
          transition={transitionConfig(delayIncrement)}
          animate={letterAnimate}
        >
          {letter}
        </motion.p>
      );
    }
  });

  return (
    <motion.div role="nameJiggle" className='flex flex-row px-4 md:px-8 mt-4 mb-2 sm:mb-5 text-3xl sm:text-4xl md:text-6xl font-oswald font-medium text-black dark:text-white'>
      <p>{prefix}</p>
      {AnimatedLetters}
    </motion.div>
  );
};

export default NameJiggle;
