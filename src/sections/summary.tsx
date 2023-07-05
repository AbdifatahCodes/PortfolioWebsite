export default function SummarySection() {
  return (
    <div id='summary-section' className='max-w-5xl mx-auto bg-white dark:bg-black rounded-3xl shadow-lg  items-center border'>
      <div className='flex flex-col'>
        <div className='flex flex-row justify-between'>
          <p className='px-8 mt-6 mb-4 text-6xl font-oswald font-medium text-black dark:text-white'>Wrapping Up!</p>
        </div>
        <div className='px-8 space-y-1 mb-12'>
          <p className='text-gray-dark dark:text-gray-main font-roboto text-2xl'>Thank you for visiting my portfolio, where I have showcased my creative projects and technical skills. I hope you enjoyed exploring my work and witnessing my passion for crafting innovative solutions. If you are interested in collaborating or have any questions, I would love to hear from you. Feel free to reach out below, and let's connect to discuss how we can work together to achieve your goals.</p>
        </div>
      </div>
    </div>
  )
}