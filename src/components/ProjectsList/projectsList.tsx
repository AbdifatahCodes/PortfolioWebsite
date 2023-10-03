import Image from 'next/image';
import { projects } from './projectsObj.js';
import { BsFillCircleFill, BsFillClockFill } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';
import KeyWord from '@/components/KeyWord/keyWord';

type ProjectType = {
  id: number;
  imgUrl: string;
  imgWidth: number;
  imgHeight: number;
  imgAlt: string;
  imgBlurDataUrl: string;
  name: string;
  statusCode: string;
  status: string;
  description: string;
  blogUrl: string;
  liveUrl: string;
};

const ProjectItem = ({ project }: { project: ProjectType}) => {
  const { id, imgUrl, imgWidth, imgHeight, imgAlt, imgBlurDataUrl, name, statusCode, status, description, blogUrl, liveUrl } = project;

  return (
    <div key={id} className='flex flex-col space-y-2 mr-0'>
      <div className='bg-black dark:bg-white rounded-md'>
        <Image
          src={imgUrl}
          width={imgWidth}
          height={imgHeight}
          alt={imgAlt}
          placeholder='blur'
          blurDataURL={imgBlurDataUrl}
        />
      </div>
      <p className='text-gray-dark dark:text-gray-main font-oswald font-medium text-2xl sm:text-3xl md:text-5xl'>
        <KeyWord link={true} no_bg={true} url="/blog">{name}</KeyWord>
      </p>
      <div className='flex flex-row space-x-2'>
        {statusCode === "live" ? <BsFillCircleFill color='#00FF0F' className='mt-1' /> : <BsFillClockFill color='#5AC8FA' className='mt-1' />}
        <p className='italic text-gray-dark dark:text-gray-main font-roboto font-medium'>{status}</p>
      </div>
      <p className='text-gray-dark dark:text-gray-main font-roboto text-sm sm:text-base'>{description}</p>
      <div className='flex flex-row justify-between text-gray-dark dark:text-gray-main font-roboto font-bold italic text-xs sm:text-sm md:text-base'>
        <a href={blogUrl} className='flex flex-row space-x-1 hover:underline underline-offset-4' target="_blank" rel="noopener noreferrer">
          <span>Read More</span>
          <FiExternalLink />
        </a>
        <a href={liveUrl} className='flex flex-row space-x-1 hover:underline underline-offset-4' target="_blank" rel="noopener noreferrer">
          <span>View Live</span>
          <FiExternalLink />
        </a>
      </div>
      <hr className='text-gray md:hidden' />
    </div>
  );
};

export default function ProjectsList() {
  return (
    <div className='px-5 md:px-10 lg:mr-5 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5'>
      {projects.map(project => <ProjectItem key={project.id} project={project} />)}
    </div>
  );
}
