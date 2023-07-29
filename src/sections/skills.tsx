import SkillsList from "@/components/skillsList";
import ScrollToTop from "@/components/scrollToTop";

export default function SkillsSection() {
  return (
    <div id='skills-section' className='mx-2 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl md:mx-auto bg-white dark:bg-black rounded-xl sm:rounded-3xl shadow-lg  items-center border'>
      <div className='flex flex-col mb-6 md:mb-12'>
        <div className='flex flex-row justify-between'>
          <p className='px-4 md:px-8 mt-4 mb-2 sm:mb-5 text-3xl sm:text-4xl md:text-6xl font-oswald font-medium text-black dark:text-white'>My Skills</p>
        </div>
        <div className='px-4 md:px-8'>
          <p className='text-gray-dark dark:text-gray-main font-roboto text-base sm:text-xl md:text-2xl'>In my pursuit of mastery, I have cultivated a versatile set of skills that empower me to tackle diverse challenges with confidence. With a passion for continuous learning, I am always ready to embrace new opportunities and expand my skill set further.</p>
        </div>
        <div className='px-8 md:px-16 pt-1 md:pt-3'>
          <SkillsList />
        </div>
        <ScrollToTop />
      </div>
    </div>
  )
}