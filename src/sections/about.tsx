export default function AboutSection() {
  return (
    <div id='about-section' className='max-w-5xl mx-auto bg-white dark:bg-black rounded-3xl shadow-lg  items-center border'>
      <div className='flex flex-col'>
        <div className='flex flex-row justify-between'>
          <p className='px-8 mt-6 mb-4 text-6xl font-oswald font-medium text-black dark:text-white'>About Me</p>
        </div>
        <div className='px-8 space-y-4 mb-12'>
        <p className='text-gray-dark dark:text-gray-main font-roboto text-2xl'>In 2019, during my high school years, I embarked on my programming journey, discovering the world of possibilities it held. Python became my first language of choice. After spending a few months tinkering, hacking, and exploring its capabilities, I craved a challenge that would both enhance my skills and solve a personal problem.</p>
        <p className='text-gray-dark dark:text-gray-main font-roboto text-2xl'>Motivated by a desire to tackle quadratic equations without relying on the Quadratic Formula, I delved into the realm of trial and error. Determined to find the best factors for these equations, I resorted to nested if loops and conditioning. While my early attempt resulted in a program entangled with nested loops, it represented a significant achievement. I had successfully solved a real problem independently, without any external guidance or tutorials.</p>
        <p className='text-gray-dark dark:text-gray-main font-roboto text-2xl'>This initial breakthrough ignited a passion within me—a passion for continuous learning and pushing boundaries. Since then, I have devoted myself to honing my skills as an open-minded and forward-looking engineer. Each day has been dedicated to refining my craft, exploring new technologies, and embracing the ever-evolving landscape of programming.</p>
        <p className='text-gray-dark dark:text-gray-main font-roboto text-2xl'>Today, I stand as a relentless learner, continuously sharpening my skills and eagerly embracing new challenges. I am driven by the joy of discovery and the desire to make a meaningful impact through my work. With every project and endeavor, I strive to bring creativity, innovation, and problem-solving prowess to the forefront. Let's join forces and create a brighter future together.</p>
        </div>
      </div>
    </div>
  )
}