import NameJiggle from "@/components/nameJiggle"
import The3Balls from "@/components/the3Balls"
import { Link as LinkScroll } from 'react-scroll'
import { VscDebugContinueSmall } from 'react-icons/vsc'
import KeyWord from "@/components/keyWord"

export default function HeroSection() {
  return (
    <div id='hero-section' className='mx-2 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl md:mx-auto bg-white dark:bg-black rounded-xl sm:rounded-3xl shadow-lg  items-center border'>
      <div className='flex flex-col mb-5 md:mb-8'>
        <div className='flex flex-row justify-between'>
          <NameJiggle prefix="I'm&nbsp;" textValue={process.env.NEXT_PUBLIC_ANIMATED_NAME} />
          <The3Balls />
        </div>
        <div className='px-4 md:px-8 space-y-1'>
          <p className='text-gray-dark dark:text-gray-main font-roboto text-base sm:text-xl md:text-2xl'>Greetings! I'm a passionate <KeyWord link="true" url="https://www.w3schools.com/whatis/whatis_fullstack.asp">Full-Stack Web Developer</KeyWord> skilled in crafting elegant, powerful applications. With expertise in both Front-End and Back-End, I find joy in the magic of Back-End development. As an architect, I explore the endless possibilities of the Cloud with code. <KeyWord link="true" url="https://en.wikipedia.org/wiki/Linux">Linux</KeyWord> enthusiast, <KeyWord link="true" url="https://github.com/">Open-source contributor</KeyWord>, Privacy advocate, and Desktop minimalist.</p>
          <p className='text-gray-dark dark:text-gray-main font-roboto text-base sm:text-xl md:text-2xl'>
            <span>But it's not all work and no play for me! When I'm not busy building awesome applications, I find solace in immersing myself in philosophical masterpieces like Plato's Republic. Additionally, I stay engaged with the latest social dramas that shape our zeitgeist. And of course, no day is complete without a healthy dose of hip hop music. On my <KeyWord link="true" url="/blog">blog</KeyWord>, I delve into these passions and more, sharing my insights and experiences.</span>
          </p>
        </div>
        <div className="cursor-pointer w-auto mx-auto p-1 px-2 hover:px-4 font-oswald text-dark-main-bg dark:text-light-main-bg hover:text-light-main-bg dark:hover:text-dark-main-bg bg-light-main-bg dark:bg-dark-main-bg hover:bg-dark-main-bg dark:hover:bg-light-main-bg border-4 border-dark-main-bg dark:border-light-main-bg hover:border-light-main-bg dark:hover:border-dark-main-bg rounded-lg">
          <LinkScroll
            to="skills-section"
            spy={true}
            smooth={true}
            offset={-20}
            duration={1000}
            className="flex space-x-1"
          >
            <p>Continue</p>
            <div className="mt-1">
              <VscDebugContinueSmall />
            </div>
          </LinkScroll>
        </div>
      </div>
    </div>
  )
}