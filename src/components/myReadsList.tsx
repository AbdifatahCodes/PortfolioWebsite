import { MdDateRange } from 'react-icons/md'
import { myReads } from './Objects/myReadsObj.js'

export default function MyReadsList() {
  const readsItems = myReads.map(myRead => (
    <div key={myRead.id} className='bg-white dark:bg-black rounded-2xl shadow-lg  items-center border'>
      <div className='p-2 md:p-4 px-4 md:px-6 mb-1 md:mb-3 space-y-1 md:space-y-3 text-gray-dark dark:text-gray-main'>
        <div className='flex flex-row justify-between align-middle'>
          <p className='font-quicksand text-lg md:text-2xl'>{myRead.name}</p>
          <a href="#"><p className='font-dmsans text-sm md:text-xl flex flex-row space-x-1 underline underline-offset-4'><span>{myRead.date}</span><span><MdDateRange /></span></p></a>
        </div>
        <div className='font-dmsans text-sm md:text-base'>
          <p>{myRead.description}</p>
        </div>
      </div>
    </div>
  ))

  return (
    <>{ readsItems }</>
  );
}