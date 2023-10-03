export default function AboutSection() {
  const aboutText = [
    "In 2019, during my high school years, I embarked on my programming journey, discovering the world of possibilities it held. Python became my first language of choice. After spending a few months tinkering, hacking, and exploring its capabilities, I craved a challenge that would both enhance my skills and solve a personal problem.",
    "Motivated by a desire to tackle quadratic equations without relying on the Quadratic Formula, I delved into the realm of trial and error. Determined to find the best factors for these equations, I resorted to nested if loops and conditioning. While my early attempt resulted in a program entangled with nested loops, it represented a significant achievement. I had successfully solved a real problem independently, without any external guidance or tutorials.",
    "This initial breakthrough ignited a passion within me—a passion for continuous learning and pushing boundaries. Since then, I have devoted myself to honing my skills as an open-minded and forward-looking engineer. Each day has been dedicated to refining my craft, exploring new technologies, and embracing the ever-evolving landscape of programming.",
    "Today, I stand as a relentless learner, continuously sharpening my skills and eagerly embracing new challenges. I am driven by the joy of discovery and the desire to make a meaningful impact through my work. With every project and endeavor, I strive to bring creativity, innovation, and problem-solving prowess to the forefront. Let's join forces and create a brighter future together."
  ];

  return (
    <section id='about-section' className='mx-2 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl md:mx-auto bg-white dark:bg-black rounded-xl sm:rounded-3xl shadow-lg items-center border'>
      <div className='flex flex-col mb-6 md:mb-12'>
        <header className='flex flex-row justify-between'>
          <h1 className='px-4 md:px-8 mt-4 mb-2 sm:mb-5 text-3xl sm:text-4xl md:text-6xl font-oswald font-medium text-black dark:text-white'>About Me</h1>
        </header>
        <article className='px-4 md:px-8 space-y-1 md:space-y-3 lg:space-y-4 text-gray-dark dark:text-gray-main font-roboto text-base sm:text-xl md:text-2xl'>
          {aboutText.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </article>
      </div>
    </section>
  );
}
