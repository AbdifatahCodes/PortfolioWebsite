import Image from 'next/image'
import { projects } from './Objects/projectsObj.js'
import { BsFillCircleFill, BsFillClockFill, } from 'react-icons/bs'

export default function ProjectsList() {
  const projectsItems = projects.map(project => (
    <div key={project.id} className='flex flex-col space-y-2 mr-20'>
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
      <p className='text-gray-dark dark:text-gray-main font-oswald font-medium text-5xl'>{ project.name }</p>
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
      <p className='text-gray-dark dark:text-gray-main font-roboto'>{ project.description }</p>
      <div className='flex flex-row justify-between text-gray-dark dark:text-gray-main font-roboto font-bold italic uppercase text-1xl'>
        <a href={project.blogUrl}>Read More</a>
        <a href={project.liveUrl}>View Project</a>
      </div>
    </div>
  ));
  
  return (
    <div className='p-4 grid grid-cols-2 gap-4'>
      {projectsItems}
    </div>
  )
}