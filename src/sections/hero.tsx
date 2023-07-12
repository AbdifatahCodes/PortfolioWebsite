import The3Balls from "@/components/the3Balls";

export default function HeroSection() {
    return (
      <div id='hero-section' className='mx-2 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl md:mx-auto bg-white dark:bg-black rounded-xl sm:rounded-3xl shadow-lg  items-center border'>
        <div className='flex flex-col'>
          <div className='flex flex-row justify-between'>
            <p className='px-4 md:px-8 mt-4 mb-2 sm:mb-5 text-3xl sm:text-4xl md:text-6xl font-oswald font-medium text-black dark:text-white'>I'm Abdifatah Osman</p>
            <The3Balls/>
          </div>
          <div className='px-4 md:px-8 space-y-1 mb-5 md:mb-8'>
            <p className='text-gray-dark dark:text-gray-main font-roboto text-base sm:text-xl md:text-2xl'>Greetings! I'm a passionate Full-Stack Web Developer skilled in crafting elegant, powerful applications. With expertise in both Front-End and Back-End, I find joy in the magic of Back-End development. As an architect, I explore the endless possibilities of the Cloud with code. Linux enthusiast, Open-source contributor, Privacy advocate, and Desktop minimalist.</p>
            <p className='text-gray-dark dark:text-gray-main font-roboto text-base sm:text-xl md:text-2xl'>But it's not all work and no play for me! When I'm not busy building awesome applications, I find solace in immersing myself in philosophical masterpieces like Plato's Republic. Additionally, I stay engaged with the latest social dramas that shape our zeitgeist. And of course, no day is complete without a healthy dose of hip hop music. On my blog, I delve into these passions and more, sharing my insights and experiences.</p>
          </div>
        </div>
      </div>
    )
}