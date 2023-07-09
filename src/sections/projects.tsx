import ProjectsList from '@/components/projectsList'

export default function ProjectsSection() {
  return (
    <div id='projects-section' className='max-w-5xl mx-auto bg-white dark:bg-black rounded-3xl shadow-lg  items-center border'>
      <div className='flex flex-col px-8 mb-8'>
        <div className='flex flex-row justify-between'>
          <p className='mt-6 mb-4 text-6xl font-oswald font-medium text-black dark:text-white'>My Endeavors</p>
        </div>
        <div className='space-y-1 mb-4'>
          <p className='text-gray-dark dark:text-gray-main font-roboto text-2xl'>In my work, I bring ideas to life through creativity, precision, and attention to detail. Each endeavor is a testament to my passion for problem-solving and my commitment to delivering exceptional results. From concept to execution, I approach projects with a meticulous mindset, crafting solutions that inspire and leave a lasting impact.</p>
        </div>
        <ProjectsList />
      </div>
    </div>
  )
}