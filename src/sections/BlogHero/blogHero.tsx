import NameJiggle from "@/components/NameJiggle/nameJiggle";
import The3Balls from "@/components/The3Balls/the3Balls";
import { Link as LinkScroll } from 'react-scroll';
import { VscDebugContinueSmall } from 'react-icons/vsc';

export default function BlogHeroSection() {
  const commonTextClasses = 'text-gray-dark dark:text-gray-main font-roboto text-base sm:text-xl md:text-2xl';
  const commonButtonClasses = 'cursor-pointer w-auto mx-auto mt-2 p-1 px-2 hover:px-4 font-oswald text-dark-main-bg dark:text-light-main-bg hover:text-light-main-bg dark:hover:text-dark-main-bg bg-light-main-bg dark:bg-dark-main-bg hover:bg-dark-main-bg dark:hover:bg-light-main-bg border-4 border-dark-main-bg dark:border-light-main-bg hover:border-light-main-bg dark:hover:border-dark-main-bg rounded-lg';

  return (
    <div id='hero-section' data-testid='hero-section' className='mx-2 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl md:mx-auto bg-white dark:bg-black rounded-xl sm:rounded-3xl shadow-lg items-center border'>
      <div className='flex flex-col mb-3 md:mb-4'>
        <div className='flex flex-row justify-between'>
          <NameJiggle prefix="Hi!&nbsp;" textValue="Welcome To My Blog." />
          <The3Balls />
        </div>
        <div className='px-4 md:px-8 space-y-1'>
          <p className={commonTextClasses}>
            In my blog, I connect the world of Full-Stack development with broader cultural and philosophical perspectives. As a Full-Stack Web Developer, I'm deeply immersed in the art of coding, creating elegant applications, and exploring the intricacies of Back-End development. Yet, beyond the code, I'm intrigued by the intersection of technology, philosophy, and social cultures.
          </p>
          <p className={commonTextClasses}>
            Join me as we navigate the ever-evolving tech landscape while pondering the profound questions and cultural dynamics that shape our digital world. Together, we'll unravel the mysteries of code, dive into philosophical musings, and dissect the fascinating nuances of modern society's digital transformations.
          </p>
        </div>
        <div className={commonButtonClasses}>
          <LinkScroll
            to="explorer-section"
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
  );
}
