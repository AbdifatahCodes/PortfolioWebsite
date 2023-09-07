import Layout from '@/components/layout'
import BlogExplorer from '@/sections/blogExplorer'
import BlogHeroSection from '@/sections/blogHero'

export default function Blog() {
  return (
    <Layout title='Blog'>
      <div id='blog' className='space-y-6 lg:space-y-12'>
        <BlogHeroSection />
        <div id='Watermark'>
          <p className='fixed bottom-10 left-0 -z-10 font-quicksand font-extrabold text-9xl dark:text-watermark-dark text-watermark-light'
          >Abdifatah's Blog.</p>
        </div>
        <div id='divider' className='p-1 lg:p-4'></div>
        <BlogExplorer />
        <div id='divider' className='p-1'></div>
      </div>
    </Layout>

  )
}
