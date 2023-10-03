import React from 'react';
import { MdDateRange } from 'react-icons/md';
import { myReads } from './myReadsObj'; // Adjust the import to your file structure

interface MyRead {
  id: number;
  name: string;
  date: string;
  description: string;
}

export default function MyReadsList() {
  const renderReadItem = (myRead: MyRead) => (
    <div role='myReadsListItem' key={myRead.id} className='bg-white dark:bg-black rounded-2xl shadow-lg items-center border'>
      <div className='p-2 md:p-4 px-4 md:px-6 mb-1 md:mb-3 space-y-1 md:space-y-3 text-gray-dark dark:text-gray-main'>
        <div className='flex flex-row justify-between align-middle'>
          <p className='font-quicksand text-lg md:text-2xl'>{myRead.name}</p>
          <p className='font-dmsans text-sm md:text-xl flex flex-row space-x-1 underline underline-offset-4'>
            <span>{myRead.date}</span>
            <span><MdDateRange /></span>
          </p>
        </div>
        <div className='font-dmsans text-sm md:text-base'>
          <p>{myRead.description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {myReads.map(renderReadItem)}
    </>
  );
}
