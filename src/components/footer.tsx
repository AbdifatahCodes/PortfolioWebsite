import { FaInstagram, FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
    return (
      <footer id='footer'>
        <div className='mt-10 bg-white dark:bg-black-main text-gray-dark dark:text-gray-main border border-black dark:border-white'>
          <div id='contact-section' className='bg-white dark:bg-black'>
            <div className='max-w-5xl mx-auto flex flex-col'>
              <div className='flex flex-row justify-between'>
                <p className='px-8 mt-6 mb-4 text-2xl font-quicksand font-bold text-black dark:text-white'>Feel free to reach out or send me an email directly at sample@gmail.com.</p>
              </div>
              <div className='px-8 space-y-1 mb-12'>
                <input
                  name='email'
                  type='string'
                  placeholder='Email'
                />
                <p className='text-gray-dark dark:text-gray-main font-roboto text-2xl'>Thank you for visiting my portfolio, where I have showcased my creative projects and technical skills. I hope you enjoyed exploring my work and witnessing my passion for crafting innovative solutions. If you are interested in collaborating or have any questions, I would love to hear from you. Feel free to reach out below, and let's connect to discuss how we can work together to achieve your goals.</p>
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