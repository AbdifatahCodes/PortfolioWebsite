import Link from "next/link";
import { BsArrowRight, BsFillEyeFill } from "react-icons/bs";
import { BiLike, BiDislike } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
import { posts } from "./blogPostsObj";

export default function BlogExplorer() {
  const postsItems = posts.map(post => (
    <div key={post.id} className="group bg-indigo-200 dark:bg-blog-dark hover:dark:bg-slate-800 hover:bg-gray-light px-5 py-4 rounded-xl space-y-2">
      {/* Post Header and Date */}
      <div className="space-y-2">
        <Link href={{ pathname: "/blog/posts/[post_route]", query: { post_route: post.slugID } }} as={"/blog/posts/" + post.slugID} className="space-y-1" target="_blank" rel="noopener noreferrer">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row align-baseline space-x-2 font-quicksand text-lg md:text-2xl group-hover:text-indigo-500">
              <p>{post.title}</p>
              <BsArrowRight className="mt-1 hidden group-hover:block" />
            </div>
            <p className='font-dmsans text-sm md:text-xl flex flex-row space-x-1 underline underline-offset-4'>
              <span>{post.dateOfMaking}</span>
              <MdDateRange />
            </p>
          </div>
          {/* Post Description */}
          <div className="font-roboto text-sm md:text-base">
            <p>{post.bait}</p>
          </div>
        </Link>
        {/* Post Stats */}
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
              <p>|</p>
              <div className="flex flex-row space-x-2">
                <p className="font-mono self-center">{post.dislikes}</p>
                <BiDislike size={25} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div id='explorer-section' className='mx-2 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl md:mx-auto bg-white dark:bg-black rounded-xl sm:rounded-3xl shadow-lg items-center border'>
      <div className="p-6 md:px-8 mb-6 space-y-4">
        <div className="flex flex-row justify-between text-3xl font-bold font-dmsans text-gray-dark dark:text-gray-main">
          <p>Latest Posts</p>
          <p>Filter By: </p>
        </div>
        <div className="">
          <ul className="space-y-3">{postsItems}</ul>
        </div>
      </div>
    </div>
  );
}
