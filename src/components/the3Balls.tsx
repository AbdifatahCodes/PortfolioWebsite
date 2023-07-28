import { motion, } from "framer-motion";

export default function The3Balls() {
	let colorTransition = {
		backgroundColor: {
			duration: 1,
			repeat: Infinity,
			ease: "easeIn",
			repeatDelay: 0,
		}
	};

	return (
		<div className="flex relative mr-20 sm:mr-24 md:mr-32 mt-2 sm:mt-0 md:mt-2 p-0 z-0">
			<motion.div
				className="absolute inset-0 flex bg-dk-blue justify-center h-10 sm:h-14 md:h-16 w-10 sm:w-14 md:w-16 my-5 sm:my-6 md:my-7 mx-3 sm:mx-4 md:mx-5 rounded-full border items-center z-1"
				animate={{ backgroundColor: ["#0915F8", "#00FF0F", "#E40E0E"] }}
				transition={colorTransition}
			>
			</motion.div>
			<motion.div 
				className="absolute inset-0 flex bg-dk-green justify-center h-10 sm:h-14 md:h-16 w-10 sm:w-14 md:w-16 mx-5 sm:mx-8 md:mx-10 rounded-full border items-center z-1"
				animate={{ backgroundColor: ["#00FF0F", "#E40E0E", "#0915F8",] }}
				transition={colorTransition}
			>
			</motion.div>
			<motion.div 
				className="absolute inset-0 flex bg-red justify-center h-10 sm:h-14 md:h-16 w-10 sm:w-14 md:w-16 rounded-full border items-center z-1"
				animate={{ backgroundColor: ["#E40E0E", "#0915F8", "#00FF0F"] }}
				transition={colorTransition}
			>
			</motion.div>
		</div>
	)
}