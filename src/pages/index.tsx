import Layout from '@/components/layout'
import AboutSection from '@/sections/about'
import HeroSection from '@/sections/hero'
import MyBackgroundSection from '@/sections/myBackground'
import ProjectsSection from '@/sections/projects'
import SkillsSection from '@/sections/skills'
import SummarySection from '@/sections/summary'

export default function Home() {
  return (
    <Layout title='Abdifatah Osman'>
        <div id='home' className='space-y-6 lg:space-y-12'>
          <HeroSection />
          <div id='divider' className='p-1 lg:p-4'></div>
          <SkillsSection />
          <div id='divider' className='p-1'></div>
          <ProjectsSection />
          <div id='divider' className='p-1'></div>
          <AboutSection />
          <div id='divider' className='p-1'></div>
          <MyBackgroundSection />
          <div id='divider' className='p-1'></div>
          <SummarySection />
        </div>
    </Layout>

  )
}
