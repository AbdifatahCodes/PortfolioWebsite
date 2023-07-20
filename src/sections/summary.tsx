export default function SummarySection() {
  return (
    <div id='summary-section' className='mx-2 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl md:mx-auto bg-white dark:bg-black rounded-xl sm:rounded-3xl shadow-lg  items-center border'>
      <div className='flex flex-col mb-6 md:mb-12'>
        <div className='flex flex-row justify-between'>
          <p className='px-4 md:px-8 mt-4 mb-2 sm:mb-5 text-3xl sm:text-4xl md:text-6xl font-oswald font-medium text-black dark:text-white'>Wrapping Up!</p>
        </div>
        <div className='px-4 md:px-8'>
          <p className='text-gray-dark dark:text-gray-main font-roboto text-base sm:text-xl md:text-2xl'>Thank you for visiting my portfolio, where I have showcased my creative projects and technical skills. I hope you enjoyed exploring my work and witnessing my passion for crafting innovative solutions. If you are interested in collaborating or have any questions, I would love to hear from you. Feel free to reach out below, and let's connect to discuss how we can work together to achieve your goals.</p>
        </div>
      </div>
    </div>
  )
}