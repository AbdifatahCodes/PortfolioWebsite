import Layout from '@/components/layout'
import The3Balls from '@/components/the3Balls'
import { FaGithub, FaDribbble, } from 'react-icons/fa'
import { MdPublic } from 'react-icons/md'

export default function About() {
  return (
    <Layout title='About Me'>
      <div id='About'>
        <div className='mt-10 flex flex-col max-w-5xl mx-auto space-y-8'>
          <div className='mb-5 flex flex-row justify-between'>
            <p className='px-6 mt-6 mb-2 text-6xl font-oswald font-medium text-gray-dark dark:text-gray-main'>About Me</p>
            <The3Balls/>
          </div>
          <div className='bg-white dark:bg-black rounded-2xl shadow-lg  items-center border'>
            <div className='p-4 px-6 mb-3 space-y-3 text-gray-dark dark:text-gray-main'>
              <div className='flex flex-row justify-between'>
                <p className='font-quicksand text-2xl'>Programming -</p>
                <a href="#"><p className='font-dmsans text-2xl flex flex-row space-x-1'><span>View Github</span><span><FaGithub /></span></p></a>
              </div>
              <div className='font-dmsans'>
                <p>As a developer, I am passionate about using technology to solve problems and create innovative solutions. I believe that programming is more than just writing code; it is about understanding the needs of users and using that understanding to create software that is intuitive, efficient, and effective. I am committed to continuous learning and staying up-to-date with the latest trends and technologies in the industry, and I believe that collaboration and communication are essential to creating successful software projects. Whether I am working on a small website or a large-scale application, I approach each project with enthusiasm and a desire to create something that will make a positive impact on the world.</p>
              </div>
            </div>
          </div>
          <div className='bg-white dark:bg-black rounded-2xl shadow-lg  items-center border'>
            <div className='p-4 px-6 mb-3 space-y-3 text-gray-dark dark:text-gray-main'>
              <div className='flex flex-row justify-between'>
                <p className='font-quicksand text-2xl'>Projects -</p>
                <a href="#"><p className='font-dmsans text-2xl flex flex-row space-x-1'><span>View Projects</span><span><MdPublic /></span></p></a>
              </div>
              <div className='font-dmsans'>
                <p>In addition to developing software, I have also worked on creating and maintaining several projects. I enjoy the challenge of taking an idea from concept to market, and I am passionate about creating projects that make a positive impact on people's lives. From ideation to launch, I have experience in all aspects of project development.</p>
              </div>
            </div>
          </div>
          <div className='bg-white dark:bg-black rounded-2xl shadow-lg  items-center border'>
            <div className='p-4 px-6 mb-3 space-y-3 text-gray-dark dark:text-gray-main'>
              <div className='flex flex-row justify-between'>
                <p className='font-quicksand text-2xl'>Design -</p>
                <a href="#"><p className='font-dmsans text-2xl flex flex-row space-x-1'><span>View Dribbble</span><span><FaDribbble /></span></p></a>
              </div>
              <div className='font-dmsans'>
                <p>As a designer myself, I believe that design is an integral part of creating successful software and products. I am committed to creating user-centered designs that are visually appealing and intuitive to use. From wireframes to high-fidelity mockups, I have experience in all aspects of the design process, and I am always looking for ways to improve my skills and create better user experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>

  )
}
