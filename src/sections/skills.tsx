export default function SkillsSection() {
  return (
    <div id='skills-section' className='max-w-5xl mx-auto bg-white dark:bg-black rounded-3xl shadow-lg  items-center border'>
      <div className='flex flex-col mb-12'>
        <div className='flex flex-row justify-between'>
          <p className='px-8 mt-6 mb-4 text-6xl font-oswald font-medium text-black dark:text-white'>My Skills</p>
        </div>
        <div className='px-8 space-y-1'>
          <p className='text-gray-dark dark:text-gray-main font-roboto text-2xl'>In my pursuit of mastery, I have cultivated a versatile set of skills that empower me to tackle diverse challenges with confidence. With a passion for continuous learning, I am always ready to embrace new opportunities and expand my skill set further.</p>
        </div>
        <div className='px-16 pt-3'>
          <ol className='grid grid-cols-4 gap-5 list-disc text-2xl font-extrabold font-quicksand text-gray-dark dark:text-gray-main'>
            <li>HTML5</li>
            <li>TailwindCSS</li>
            <li>Javascript ES6</li>
            <li>ReactJS</li>
            <li>Typescript</li>
            <li>NextJS</li>
            <li>NodeJS</li>
            <li>Golang</li>
            <li>NoSql & Git</li>
          </ol>
        </div>
      </div>
    </div>
  )
}