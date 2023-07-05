import { MdDateRange } from "react-icons/md";

export default function MyBackgroundSection() {
  return (
    <div id='backgroud-section' className='max-w-5xl mx-auto'>
      <div className='flex flex-col mx-7 space-y-4'>
        <div className='flex flex-row justify-between'>
          <p className='text-5xl font-oswald font-normal text-gray-dark dark:text-gray-main'>My Foundational Texts</p>
        </div>
        <div className='flex flex-col space-y-8'>
          <div className='bg-white dark:bg-black rounded-2xl shadow-lg  items-center border'>
            <div className='p-4 px-6 mb-3 space-y-3 text-gray-dark dark:text-gray-main'>
              <div className='flex flex-row justify-between align-middle'>
                <p className='font-quicksand text-2xl'>"The Imposters Handbook" by Rob Conery.</p>
                <a href="#"><p className='font-dmsans text-xl flex flex-row space-x-1 underline underline-offset-4'><span>2020-2021</span><span><MdDateRange /></span></p></a>
              </div>
              <div className='font-dmsans'>
                <p>This is a remarkable book that has significantly contributed to my growth as a programmer. It offers a comprehensive guide to various programming concepts, covering everything from basic algorithms to advanced topics like databases, networking, and software architecture. With its practical insights and clear explanations, this book has helped me develop a deeper understanding of programming principles and become a more proficient and confident developer.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}