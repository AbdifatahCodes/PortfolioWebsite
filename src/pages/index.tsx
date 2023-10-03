import Layout from '@/layouts/layout';
import AboutSection from '@/sections/About/about';
import HeroSection from '@/sections/Hero/hero';
import MyBackgroundSection from '@/sections/MyBackground/myBackground';
import ProjectsSection from '@/sections/Projects/projects';
import SkillsSection from '@/sections/Skills/skills';
import SummarySection from '@/sections/Summary/summary';

export default function Home() {
  return (
    <Layout title='Abdifatah Codes'>
      {/* Main Home Container */}
      <div id='home' className='space-y-6 lg:space-y-12'>
        
        {/* Hero Section */}
        <HeroSection />
        
        {/* Watermark */}
        <div id='Watermark'>
          <p className='fixed bottom-10 left-0 -z-10 font-quicksand font-extrabold text-9xl dark:text-watermark-dark text-watermark-light'>
            Abdifatah Codes.
          </p>
        </div>
        
        {/* Divider */}
        <div className='p-1 lg:p-4'></div>
        
        {/* Skills Section */}
        <SkillsSection />
        
        {/* Divider */}
        <div className='p-1'></div>
        
        {/* Projects Section */}
        <ProjectsSection />
        
        {/* Divider */}
        <div className='p-1'></div>
        
        {/* About Section */}
        <AboutSection />
        
        {/* Divider */}
        <div className='p-1'></div>
        
        {/* My Background Section */}
        <MyBackgroundSection />
        
        {/* Divider */}
        <div className='p-1'></div>
        
        {/* Summary Section */}
        <SummarySection />
        
      </div>
    </Layout>
  );
}
