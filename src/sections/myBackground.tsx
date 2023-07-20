import MyReadsList from "@/components/myReadsList";

export default function MyBackgroundSection() {
  return (
    <div id='backgroud-section' className='max-w-5xl mx-auto'>
      <div className='flex flex-col mx-7 space-y-1 sm:space-y-2 md:space-y-4'>
        <div className='flex flex-row justify-between'>
          <p className='text-2xl sm:text-3xl md:text-5xl font-oswald font-normal text-gray-dark dark:text-gray-main'>My Foundational Texts</p>
        </div>
        <div className='flex flex-col space-y-4 sm:space-y-6 md:space-y-8'>
          <MyReadsList />
        </div>
      </div>
    </div>
  )
}