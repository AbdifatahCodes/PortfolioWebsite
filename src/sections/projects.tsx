export default function ProjectsSection() {
  return (
    <div id='projects-section' className='max-w-5xl mx-auto bg-white dark:bg-black rounded-3xl shadow-lg  items-center border'>
      <div className='flex flex-col px-8 mb-8'>
        <div className='flex flex-row justify-between'>
          <p className='mt-6 mb-4 text-6xl font-oswald font-medium text-black dark:text-white'>My Endeavors</p>
        </div>
        <div className='space-y-1 mb-4'>
          <p className='text-gray-dark dark:text-gray-main font-roboto text-2xl'>In my work, I bring ideas to life through creativity, precision, and attention to detail. Each endeavor is a testament to my passion for problem-solving and my commitment to delivering exceptional results. From concept to execution, I approach projects with a meticulous mindset, crafting solutions that inspire and leave a lasting impact.</p>
        </div>
        <div className='p-4 grid grid-cols-2 gap-4'>
          <div className='flex flex-col space-y-2 mr-20'>
            <div className='bg-black dark:bg-white w-96 h-52 rounded-md'></div>
            <p className='text-gray-dark dark:text-gray-main font-oswald font-medium text-5xl'>Open Cloud Revised</p>
            <div>
              <p className='italic text-gray-dark dark:text-gray-main font-roboto font-medium'>Live!</p>
            </div>
            <p className='text-gray-dark dark:text-gray-main font-roboto'>A remarkable, cost-free open-source cloud backup tool crafted exclusively for Linux. Empowered by the cutting-edge Storj Decentralized Cloud Network, it delivers unmatched security, scalability, and reliability. Safeguard your valuable data with this exceptional solution designed to meet your diverse storage needs.</p>
            <div className='flex flex-row justify-between text-gray-dark dark:text-gray-main font-roboto font-bold italic uppercase text-1xl'>
              <a href="#">Read More</a>
              <a href="#">View Project</a>
            </div>
          </div>
          
          <div className='flex flex-col space-y-2 mr-20'>
            <div className='bg-black dark:bg-white w-96 h-52 rounded-md'></div>
            <p className='text-gray-dark dark:text-gray-main font-oswald font-medium text-5xl'>Firepass</p>
            <div>
              <p className='italic text-gray-dark dark:text-gray-main font-roboto font-medium'>Live!</p>
            </div>
            <p className='text-gray-dark dark:text-gray-main font-roboto'>A self-hostable password manager built with Firebase and Next.js. Safely store and manage your passwords, ensuring convenience and security. Take control of your digital credentials with ease, empowering you to protect your online accounts effectively and effortlessly.</p>
            <div className='flex flex-row justify-between text-gray-dark dark:text-gray-main font-roboto font-bold italic uppercase text-1xl'>
              <a href="#">Read More</a>
              <a href="#">View Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}