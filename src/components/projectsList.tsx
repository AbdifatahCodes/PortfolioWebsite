import Image from 'next/image'
import { projects } from './Objects/projectsObj.js'
import { BsFillCircleFill, BsFillClockFill, } from 'react-icons/bs'
import { FiExternalLink } from 'react-icons/fi'

export default function ProjectsList() {
  const projectsItems = projects.map(project => (
    <div key={project.id} className='flex flex-col space-y-2 mr-0'>
      <div className='bg-black dark:bg-white rounded-md'>
        <Image
          src={project.imgUrl}
          width={project.imgWidth}
          height={project.imgHeight}
          alt={project.imgAlt}
          placeholder='blur'
          blurDataURL={project.imgBlurDataUrl}
        />
      </div>
      <p className='text-gray-dark dark:text-gray-main font-oswald font-medium text-2xl sm:text-3xl md:text-5xl'>{ project.name }</p>
      <div className='flex flex-row space-x-2'>
        {
          project.statusCode === "live" ?
            <BsFillCircleFill
              color='#00FF0F'
              className='mt-1'
            />
          :
            <BsFillClockFill
              color='#5AC8FA'
              className='mt-1'
            />
        }
        <p className='italic text-gray-dark dark:text-gray-main font-roboto font-medium'>{ project.status }</p>
      </div>
      <p className='text-gray-dark dark:text-gray-main font-roboto text-sm sm:text-base'>{ project.description }</p>
      <div className='flex flex-row justify-between text-gray-dark dark:text-gray-main font-roboto font-bold italic text-xs sm:text-sm md:text-base'>
        <a href={project.blogUrl} className='flex flex-row space-x-1'>
          <span>Read More</span>
          <FiExternalLink />
        </a>
        <a href={project.liveUrl} className='flex flex-row space-x-1'>
          <span>View Live</span>
          <FiExternalLink />
        </a>
      </div>
      <hr className='text-gray md:hidden' />
    </div>
  ));
  
  return (
    <div className='px-5 md:px-10 lg:mr-5 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5'>
      {projectsItems}
    </div>
  )
}