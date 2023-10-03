import Layout from '@/layouts/layout';
import BlogExplorer from '@/sections/BlogExplorer/blogExplorer';
import BlogHeroSection from '@/sections/BlogHero/blogHero';
import BlogSummary from '@/sections/BlogSummary/blogSummary';

export default function Blog() {
  return (
    <Layout title='Blog'>
      {/* Main Blog Container */}
      <div id='blog' className='space-y-6 lg:space-y-12'>
        
        {/* Blog Hero Section */}
        <BlogHeroSection />
        
        {/* Watermark */}
        <div id='Watermark'>
          <p className='fixed bottom-10 left-0 -z-10 font-quicksand font-extrabold text-9xl dark:text-watermark-dark text-watermark-light'>
            Abdifatah's Blog.
          </p>
        </div>
        
        {/* Divider */}
        <div className='p-1 lg:p-4'></div>
        
        {/* Blog Explorer Section */}
        <BlogExplorer />
        
        {/* Divider */}
        <div className='p-1'></div>
        
        {/* Blog Summary Section */}
        <BlogSummary />
        
      </div>
    </Layout>
  );
}
