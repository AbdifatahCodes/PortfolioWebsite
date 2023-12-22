import React from 'react';
import Layout from '@/layouts/layout';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator/scrollProgressIndicator';
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import MDXComponents from '@/components/MDX/mdxComponents';
import { serialize } from 'next-mdx-remote/serialize';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';

// This function runs at build time and specifies which paths to pre-render.
export const getStaticPaths: GetStaticPaths = async () => {
  const postsDirectory = path.join(process.cwd(), 'src/pages/blog/posts/MDX');
  const filenames = fs.readdirSync(postsDirectory);
  const slugs = filenames.map(filename => filename.replace(/\.mdx$/, ''));
  const paths = slugs.map(slug => ({ params: { post_route: slug } }));

  return {
    paths,
    fallback: false,
  };
};

// This function runs for each path returned by getStaticPaths, at build time.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.post_route || typeof params.post_route !== 'string') {
    return { notFound: true };
  }

  const slug = params.post_route;
  const filePath = path.join(process.cwd(), 'src/pages/blog/posts/MDX', `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return { notFound: true };
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContents); // Extract frontmatter
  const mdxSource = await serialize(content);

  return {
    props: { mdxSource, slug, frontmatter: data },
    revalidate: 1,
  };
};

interface PostProps {
  mdxSource: MDXRemoteSerializeResult;
  slug: string;
  frontmatter: { [key: string]: any }; // Type for frontmatter
}

const Post: React.FC<PostProps> = ({ mdxSource, slug, frontmatter }) => (
  <Layout title={slug}>
    <Head>
      <meta property="og:image" content={frontmatter.ogImage} />
      {/* Other OG tags can be added here */}
    </Head>
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
