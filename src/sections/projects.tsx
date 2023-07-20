import ProjectsList from '@/components/projectsList'

export default function ProjectsSection() {
  return (
    <div id='projects-section' className='mx-2 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl md:mx-auto bg-white dark:bg-black rounded-xl sm:rounded-3xl shadow-lg  items-center border'>
      <div className='flex flex-col mb-6 md:mb-12'>
        <div className='flex flex-row justify-between'>
          <p className='px-4 md:px-8 mt-4 mb-2 sm:mb-5 text-3xl sm:text-4xl md:text-6xl font-oswald font-medium text-black dark:text-white'>My Endeavors</p>
        </div>
        <div className='px-4 md:px-8 mb-2 md:mb-4'>
          <p className='text-gray-dark dark:text-gray-main font-roboto text-base sm:text-xl md:text-2xl'>In my work, I bring ideas to life through creativity, precision, and attention to detail. Each endeavor is a testament to my passion for problem-solving and my commitment to delivering exceptional results. From concept to execution, I approach projects with a meticulous mindset, crafting solutions that inspire and leave a lasting impact.</p>
        </div>
        <ProjectsList />
      </div>
    </div>
  )
}