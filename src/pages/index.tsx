import Layout from '@/components/layout'
import The3Balls from '@/components/the3Balls'
import { MdDateRange } from 'react-icons/md'

export default function Home() {
  return (
    <Layout title='Abdifatah Osman'>
        <div id='home' className='space-y-14'>
          <div id='hero-section' className='p-0 max-w-5xl mx-auto bg-white dark:bg-black rounded-3xl shadow-lg  items-center border'>
            <div className='flex flex-col'>
              <div className='flex flex-row justify-between'>
                <p className='px-8 mt-4 mb-4 text-6xl font-oswald font-medium text-black dark:text-white'>I'm Abdifatah Osman</p>
                <The3Balls/>
              </div>
              <div className='px-8 space-y-1 mb-8'>
                <p className='text-gray-dark dark:text-gray-main font-roboto text-2xl'>Greetings! I'm a passionate Full-Stack Web Developer skilled in crafting elegant, powerful applications. With expertise in both Front-End and Back-End, I find joy in the magic of Back-End development. As an architect, I explore the endless possibilities of the Cloud. Linux enthusiast, privacy advocate, and desktop minimalist.</p>
                <p className='text-gray-dark dark:text-gray-main font-roboto text-2xl'>But it's not all work and no play for me! When I'm not busy building awesome applications, I find solace in immersing myself in philosophical masterpieces like Plato's Republic. Additionally, I stay engaged with the latest social dramas that shape our zeitgeist. And of course, no day is complete without a healthy dose of hip hop music. On my blog, I delve into these passions and more, sharing my insights and experiences.</p>
              </div>
            </div>
          </div>

          <div id='divider' className='p-8'></div>
        
          <div id='skills-section' className='max-w-5xl mx-auto bg-white dark:bg-black rounded-3xl shadow-lg  items-center border'>
            <div className='flex flex-col mb-12'>
              <div className='flex flex-row justify-between'>
                <p className='px-8 mt-6 mb-4 text-6xl font-oswald font-medium text-black dark:text-white'>My Skills</p>
              </div>
              <div className='px-8 space-y-1'>
                <p className='text-gray-dark dark:text-gray-main font-roboto text-2xl'>In my pursuit of mastery, I have cultivated a versatile set of skills that empower me to tackle diverse challenges with confidence. With a passion for continuous learning, I am always ready to embrace new opportunities and expand my skill set further.</p>
              </div>
              <div>
                {/* A CSS GRID WILL WORK WONDERS ON THIS SECTION */}
                <ol>
                  <li>Javascript</li>
                  <li>Javascript</li>
                  <li>Javascript</li>
                  <li>Javascript</li>
                </ol>
              </div>
            </div>
          </div>
          
          <div id='divider' className='p-1'></div>
          
          <div id='projects-section' className='max-w-5xl mx-auto bg-white dark:bg-black rounded-3xl shadow-lg  items-center border'>
            <div className='flex flex-col'>
              <div className='flex flex-row justify-between'>
                <p className='px-8 mt-6 mb-4 text-6xl font-oswald font-medium text-black dark:text-white'>My Endeavors</p>
              </div>
              <div className='px-8 space-y-1 mb-12'>
                <p className='text-gray-dark dark:text-gray-main font-roboto text-2xl'>In my work, I bring ideas to life through creativity, precision, and attention to detail. Each endeavor is a testament to my passion for problem-solving and my commitment to delivering exceptional results. From concept to execution, I approach projects with a meticulous mindset, crafting solutions that inspire and leave a lasting impact.</p>
              </div>
            </div>
          </div>
          
          <div id='divider' className='p-1'></div>
          
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
          
          <div id='divider' className='p-1'></div>
          
          <div id='backgroud-section' className='max-w-5xl mx-auto'>
            <div className='flex flex-col mx-7 space-y-4'>
              <div className='flex flex-row justify-between'>
                <p className='text-5xl font-oswald font-normal text-gray-dark dark:text-gray-main'>My Foundational Texts</p>
              </div>
              <div className='flex flex-col space-y-8'>
                <div className='bg-white dark:bg-black rounded-2xl shadow-lg  items-center border'>
                  <div className='p-4 px-6 mb-3 space-y-3 text-gray-dark dark:text-gray-main'>
                    <div className='flex flex-row justify-between align-middle'>
                      <p className='font-quicksand text-2xl'>"The Imposters Handbook" by Rob Conery.</p>
                      <a href="#"><p className='font-dmsans text-xl flex flex-row space-x-1 underline underline-offset-4'><span>2020-2021</span><span><MdDateRange /></span></p></a>
                    </div>
                    <div className='font-dmsans'>
                      <p>This is a remarkable book that has significantly contributed to my growth as a programmer. It offers a comprehensive guide to various programming concepts, covering everything from basic algorithms to advanced topics like databases, networking, and software architecture. With its practical insights and clear explanations, this book has helped me develop a deeper understanding of programming principles and become a more proficient and confident developer.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div id='divider' className='p-1'></div>
          
          <div id='summary-section' className='max-w-5xl mx-auto bg-white dark:bg-black rounded-3xl shadow-lg  items-center border'>
            <div className='flex flex-col'>
              <div className='flex flex-row justify-between'>
                <p className='px-8 mt-6 mb-4 text-6xl font-oswald font-medium text-black dark:text-white'>Wrapping Up!</p>
              </div>
              <div className='px-8 space-y-1 mb-12'>
                <p className='text-gray-dark dark:text-gray-main font-roboto text-2xl'>Thank you for visiting my portfolio, where I have showcased my creative projects and technical skills. I hope you enjoyed exploring my work and witnessing my passion for crafting innovative solutions. If you are interested in collaborating or have any questions, I would love to hear from you. Feel free to reach out below, and let's connect to discuss how we can work together to achieve your goals.</p>
              </div>
            </div>
          </div>
          
        </div>
    </Layout>

  )
}
