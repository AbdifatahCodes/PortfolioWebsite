import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { BsQuestionCircle } from 'react-icons/bs'
import KeyWord from '@/components/keyWord';

export default function Footer() {
    return (
      <footer id='footer'>
        <div className='mt-10 bg-white dark:bg-black-main text-gray-dark dark:text-gray-main border border-black dark:border-white'>
          <div id='contact-section' className='mx-2 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl md:mx-auto'>
            <div className='flex flex-col mb-6 md:mb-10'>
              <div className='flex flex-row justify-between'>
                <p className='px-4 md:px-8 mt-6 mb-2 md:mb-4 text-base sm:text-xl md:text-2xl font-quicksand font-bold text-gray-dark dark:text-gray-main'>Feel free to reach out or send me an email directly at <KeyWord simple="true">sample@gmail.com</KeyWord>.</p>
              </div>
              <div className='px-4 md:px-8'>
                <form action="/" className='space-y-3'>
                  <div className='flex flex-col space-y-2 md:flex-row md:space-y-0'>
                    <input
                      name='fullName'
                      type='string'
                      placeholder='Name'
                      className='bg-white dark:bg-black text-gray-dark dark:text-gray-main font-dmsans text-lg sm:text-xl md:text-2xl p-3 w-full md:w-3/6 rounded-md border border-gray-dark dark:border-gray-main'
                    />
                    <input
                      name='email'
                      type='string'
                      placeholder='Email'
                      className='bg-white dark:bg-black text-gray-dark dark:text-gray-main font-dmsans text-lg sm:text-xl md:text-2xl p-3 w-full md:w-3/6 md:ml-5 rounded-md border border-gray-dark dark:border-gray-main'
                    />
                  </div>
                  <textarea
                      name='message'
                      placeholder='Message'
                      className='bg-white dark:bg-black text-gray-dark dark:text-gray-main font-dmsans text-lg sm:text-xl md:text-2xl p-3 w-full rounded-md border border-gray-dark dark:border-gray-main'
                  />
                  <div className='flex flex-row justify-between text-gray-dark dark:text-gray-main'>
                    <button
                      className='text-xl sm:text-2xl md:text-3xl font-dmsans font-bold bg-black dark:bg-white p-1 px-3 md:p-2 md:px-6 text-gray-main dark:text-gray-dark rounded-md'
                    >Submit</button>
                    <a href='#'>
                      <BsQuestionCircle
                        className='align-text-middle mt-1 md:mt-3 mr-3'
                        size={25}
                      />
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <hr className='text-black dark:text-white' />
          <hr className='text-black dark:text-white' />
          <div className='flex flex-row justify-center space-x-4 p-3'>
            <div className='shrink-0'>
              <a href="https://github.com/AbdifatahCodes" target="_blank" rel="noopener noreferrer">
                  <FaGithub
                    size={27}
                  />
              </a>
            </div>
            <div className='shrink-0'>
              <a href="https://twitter.com/@AbdifatahCodes" target="_blank" rel="noopener noreferrer">
                  <FaXTwitter
                    size={26}
                  />
              </a>
            </div>
            <div className='shrink-0'>
              <a href="https://www.linkedin.com/in/abdifatah-codes" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn
                    size={27}
                  />
              </a>
            </div>
          </div>
          <hr className='text-gray' />
          <div className='flex flex-row justify-center space-x-2 p-1'>
            <div className='font-robotocon text-base md:text-lg'>
              <p>Made by <span className='font-oswald font-bold'>Abdifatah Osman</span> &copy; { new Date().getFullYear() }</p>
            </div>
          </div>
        </div>
      </footer>
    )
}