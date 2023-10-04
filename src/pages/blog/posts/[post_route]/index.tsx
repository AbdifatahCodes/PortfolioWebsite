import Layout from '@/layouts/layout';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator/scrollProgressIndicator';
import { GetServerSideProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import MDXComponents from '@/components/MDX/mdxComponents';
import { serialize } from 'next-mdx-remote/serialize';
import fs from 'fs';
import path from 'path';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params?.post_route || typeof params.post_route !== 'string') {
    return { notFound: true };
  }

  const slug = params.post_route;
  const filePath = path.join(process.cwd(), 'src/pages/blog/posts/MDX', `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return { notFound: true };
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const mdxSource = await serialize(fileContents);

  return { props: { mdxSource, slug } };
};

interface PostProps {
  mdxSource: MDXRemoteSerializeResult;
  slug: string;
}

const Post: React.FC<PostProps> = ({ mdxSource, slug }) => (
  <Layout title={slug}>
    <div className="mx-2 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl md:mx-auto p-8 bg-white dark:bg-black rounded-xl sm:rounded-3xl shadow-lg items-center border">
      <ScrollProgressIndicator />
      <div id="Watermark">
        <p className="fixed bottom-10 left-0 -z-10 font-quicksand font-extrabold text-9xl dark:text-watermark-dark text-watermark-light">
          Abdifatah's Blog.
        </p>
      </div>
      <MDXRemote {...mdxSource} components={MDXComponents} />
      <div className="p-1" />
    </div>
  </Layout>
);

export default Post;
