import { FaInstagram, FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { BsQuestionCircle } from 'react-icons/bs'

export default function Footer() {
    return (
      <footer id='footer'>
        <div className='mt-10 bg-white dark:bg-black-main text-gray-dark dark:text-gray-main border border-black dark:border-white'>
          <div id='contact-section' className=''>
            <div className='max-w-5xl mx-auto flex flex-col'>
              <div className='flex flex-row justify-between'>
                <p className='px-8 mt-6 mb-4 text-2xl font-quicksand font-bold ttext-gray-dark dark:text-gray-main'>Feel free to reach out or send me an email directly at sample@gmail.com.</p>
              </div>
              <div className='px-8 mb-8'>
                <form action="/" className='space-y-3'>
                  <div className='flex flex-row'>
                    <input
                      name='fullName'
                      type='string'
                      placeholder='Name'
                      className='bg-white dark:bg-black text-gray-dark dark:text-gray-main font-dmsans text-2xl p-3 w-3/6 rounded-md border border-gray-dark dark:border-gray-main'
                    />
                    <input
                      name='email'
                      type='string'
                      placeholder='Email'
                      className='bg-white dark:bg-black text-gray-dark dark:text-gray-main font-dmsans text-2xl p-3 w-3/6 ml-5 rounded-md border border-gray-dark dark:border-gray-main'
                    />
                  </div>
                  <textarea
                      name='message'
                      placeholder='Message'
                      className='bg-white dark:bg-black text-gray-dark dark:text-gray-main font-dmsans text-2xl p-3 w-full rounded-md border border-gray-dark dark:border-gray-main'
                  />
                  <div className='flex flex-row justify-between text-gray-dark dark:text-gray-main'>
                    <button
                      className='text-3xl font-dmsans font-bold bg-black dark:bg-white p-2 px-6 text-gray-main dark:text-gray-dark rounded-md'
                    >Submit</button>
                    <a href='#'>
                      <BsQuestionCircle
                        className='align-text-middle mt-3 mr-3'
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
              <a href="#">
                  <FaGithub
                    size={27}
                  />
              </a>
            </div>
            <div className='shrink-0'>
              <a href="#">
                  <FaTwitter
                    size={27}
                  />
              </a>
            </div>
            <div className='shrink-0'>
              <a href="#">
                  <FaLinkedinIn
                    size={27}
                  />
              </a>
            </div>
            <div className='shrink-0'>
              <a href="#">
                  <FaInstagram
                    size={27}
                  />
              </a>
            </div>
          </div>
          <hr className='text-gray' />
          <div className='flex flex-row justify-center space-x-2 p-1'>
            <div className='font-robotocon text-lg'>
              <p>Made by <span className='font-oswald font-bold'>Abdifatah Osman</span> &copy; 2023</p>
            </div>
          </div>
        </div>
      </footer>
    )
}