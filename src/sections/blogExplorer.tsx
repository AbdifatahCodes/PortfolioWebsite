import Link from "next/link";
import { BsArrowRight, BsFillEyeFill } from "react-icons/bs";
import { BiLike, BiDislike, } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";

const posts = [
  {
    id: 0,
    title: 'Welcome to My Blog: An Introduction.',
    bait: "Greetings and a warm welcome to my digital sanctuary, where the boundaries of technology, philosophy, and culture converge. I'm delighted that you've taken a moment to step into my world. Just as my portfolio website showcases my prowess as a Full-Stack Web Developer, this blog offers a broader canvas upon which I paint my passions, insights, and experiences for your enjoyment.",
    views: 23455,
    likes: 24343,
    dislikes: 3422,
    dateOfMaking: '20-09-2023',
  },
  {
    id: 1,
    title: 'Welcome to My Blog: An Introduction 2.',
    bait: "Greetings and a warm welcome to my digital sanctuary, where the boundaries of technology, philosophy, and culture converge. I'm delighted that you've taken a moment to step into my world. Just as my portfolio website showcases my prowess as a Full-Stack Web Developer, this blog offers a broader canvas upon which I paint my passions, insights, and experiences for your enjoyment.",
    views: 23455,
    likes: 24343,
    dislikes: 3422,
    dateOfMaking: '20-09-2023',
  },
  {
    id: 2,
    title: 'Welcome to My Blog: An Introduction 3.',
    bait: "Greetings and a warm welcome to my digital sanctuary, where the boundaries of technology, philosophy, and culture converge. I'm delighted that you've taken a moment to step into my world. Just as my portfolio website showcases my prowess as a Full-Stack Web Developer, this blog offers a broader canvas upon which I paint my passions, insights, and experiences for your enjoyment.",
    views: 23455,
    likes: 24343,
    dislikes: 3422,
    dateOfMaking: '20-09-2023',
  },
  {
    id: 3,
    title: 'Welcome to My Blog: An Introduction 4.',
    bait: "Greetings and a warm welcome to my digital sanctuary, where the boundaries of technology, philosophy, and culture converge. I'm delighted that you've taken a moment to step into my world. Just as my portfolio website showcases my prowess as a Full-Stack Web Developer, this blog offers a broader canvas upon which I paint my passions, insights, and experiences for your enjoyment.",
    views: 23455,
    likes: 24343,
    dislikes: 3422,
    dateOfMaking: '20-09-2023',
  },
]

export default function BlogExplorer() {
  const postsItems = posts.map(post => (
    <div key={post.id} className="group bg-indigo-200 dark:bg-blog-dark hover:dark:bg-slate-800 hover:bg-gray-light px-5 py-4 rounded-xl space-y-2">
      <div className="space-y-2">
        <Link href="" className="space-y-1" target="_blank" rel="noopener noreferrer">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row align-baseline space-x-2 font-quicksand text-lg md:text-2xl group-hover:text-indigo-500">
              <p className="font-quicksand text-lg md:text-2xl group-hover:text-indigo-500">{post.title}</p>
              <BsArrowRight className="mt-1 hidden group-hover:block" />
            </div>
            <p className='font-dmsans text-sm md:text-xl flex flex-row space-x-1 underline underline-offset-4'><span>{post.dateOfMaking}</span><span><MdDateRange /></span></p>
          </div>
          <div className=" font-roboto text-sm md:text-base">
            <p>{post.bait}</p>
          </div>
        </Link>
        <div className="flex flex-row justify-between">
          <div className="px-2 py-3 rounded-full">
            <div className="flex flex-row space-x-2">
              <BsFillEyeFill size={25} />
              <p className="font-mono self-center">{post.views}</p>
            </div>
          </div>
          <div className="px-5 py-3 rounded-full">
            <div className="flex flex-row space-x-4">
              <div className="flex flex-row space-x-2">
                <BiLike size={25} />
                <p className="font-mono self-center">{post.likes}</p>
              </div>
              <p className="">|</p>
              <div className="flex flex-row space-x-2">
                <p className="font-mono self-center">{post.dislikes}</p>
                <BiDislike size={25} className="rotate-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div id='explorer-section' className='mx-2 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl md:mx-auto bg-white dark:bg-black rounded-xl sm:rounded-3xl shadow-lg items-center border'>
        <div className="p-6 md:px-8 mb-6 space-y-4">
          <div className="flex flex-row justify-between text-3xl font-bold font-dmsans text-gray-dark dark:text-gray-main">
            <p>Latest Posts</p>
            <p>Filter By: </p>
          </div>
          <div className="">
            <ul className="space-y-3">{ postsItems }</ul>
          </div>
        </div>
      </div>
    </div>
  )
}