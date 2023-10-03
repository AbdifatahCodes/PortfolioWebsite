import ProjectsList from '@/components/ProjectsList/projectsList'

export default function ProjectsSection() {
  const commonClasses = 'text-gray-dark dark:text-gray-main font-roboto';
  const titleClasses = 'px-4 md:px-8 mt-4 mb-2 sm:mb-5 text-3xl sm:text-4xl md:text-6xl font-oswald font-medium text-black dark:text-white';
  const descriptionClasses = `${commonClasses} text-base sm:text-xl md:text-2xl px-4 md:px-8 mb-2 md:mb-4`;

  return (
    <section role='projectsSection' id='projects-section' className='mx-2 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl md:mx-auto bg-white dark:bg-black rounded-xl sm:rounded-3xl shadow-lg items-center border'>
      <div className='flex flex-col mb-6 md:mb-12'>
        <header className='flex flex-row justify-between'>
          <h2 className={titleClasses}>My Endeavors</h2>
        </header>
        <article className={descriptionClasses}>
          <p>In my work, I bring ideas to life through creativity, precision, and attention to detail. Each endeavor is a testament to my passion for problem-solving and my commitment to delivering exceptional results. From concept to execution, I approach projects with a meticulous mindset, crafting solutions that inspire and leave a lasting impact.</p>
        </article>
        <ProjectsList />
      </div>
    </section>
  );
}
