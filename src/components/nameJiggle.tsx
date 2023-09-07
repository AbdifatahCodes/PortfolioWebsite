import { motion, } from "framer-motion";
import WhichTheme from "@/components/whichTheme"

export default function NameJiggle( props : any) {

  function transitionValues(delayValue: any) {
    let transitionReturn = {
      y: {
        duration: 1,
        ease: "easeIn",
        delay: delayValue,
        repeat: Infinity,
        repeatDelay: 10,
      },
      color: {
        duration: 3,
        ease: "easeIn",
        delay: delayValue,
        repeat: Infinity,
      },

    }
    return (transitionReturn);
  };

  function letterTransition(delayValue: any) {
    return (
      {
        y: transitionValues(delayValue).y,
        color: transitionValues(delayValue).color,
      }
    )
  };

  const yoyoYPoints = ["0rem", "-1rem", "-2rem", "-1rem", "0rem"];
  let yoyoColorGradient = [(WhichTheme() === "light") ? "#ffffff" : "#000000", "#ff0000", "#ff00fb", "#0003ff", "#00fffa", "#21ff00", "#fbff00", (WhichTheme() === "light") ? "#ffffff" : "#000000"];

  let letterAnimate = {
    y: [...yoyoYPoints, ...yoyoYPoints],
    color: [...yoyoColorGradient, ...yoyoColorGradient],
  };
  
  function makeArrrayFromString(string: any) {
    return Array.from(
      String(string)
    )
  }

  const nameList = makeArrrayFromString(props.textValue);
  let delayDifVal = 0.8

  const AnimatedLetters = nameList.map((letter, index) => {
    if (letter == " ") {
      return (
        <p key={index}>&nbsp;</p>
      )
    } else {
      delayDifVal = delayDifVal + 0.2;
      return (
        <motion.p
          key={index}
          transition={letterTransition(delayDifVal)}
          animate={letterAnimate}
        >{letter}</motion.p>
      )
    }
  })

  return (
    <motion.div className='flex flex-row px-4 md:px-8 mt-4 mb-2 sm:mb-5 text-3xl sm:text-4xl md:text-6xl font-oswald font-medium text-black dark:text-white'>
      <p>{props.prefix}</p>
      {AnimatedLetters}
    </motion.div>
  )
}
