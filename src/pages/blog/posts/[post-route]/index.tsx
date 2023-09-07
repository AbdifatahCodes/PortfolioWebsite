import Layout from '@/components/layout';
import { useRouter } from 'next/router';
import { posts } from "@/components/Objects/blogPostsObj";
import The3Balls from '@/components/the3Balls';

export default function Post() {
  const router = useRouter();
  const splitUrl = router.asPath.split('/');
  const lastSlug = splitUrl[splitUrl.length - 1];
  console.log(lastSlug);

  const activePost = posts.filter(post => post.slugID == lastSlug).map(filteredPost => (
    <div key={filteredPost.id} className='mx-2 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl md:mx-auto bg-white dark:bg-black rounded-xl sm:rounded-3xl shadow-lg items-center border'>
      <div className="mb-10 space-y-6">
        <div className="flex flex-row justify-between">
          <p className="p-6 md:px-8 font-extrabold font-oswald text-5xl mb-3">{filteredPost.title}</p>
          <The3Balls />
        </div>
        <div className="px-4 mb-4 md:px-8 space-y-3">
          {filteredPost.content?.map((paragraph, index) => (
            <p key={index} className="font-extrabold font-quicksand text-lg text-gray-light">{paragraph}</p>
            ))}
        </div>
      </div>
    </div>
  ));

  return (
    <Layout title={lastSlug}>
      <div id='post' className='space-y-6 lg:space-y-12'>
        <div>{activePost}</div>
        <div id='divider' className='p-1'></div>
      </div>
    </Layout>

  )
}
