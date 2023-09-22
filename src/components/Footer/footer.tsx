import { IconType } from 'react-icons';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { BsQuestionCircle } from 'react-icons/bs';
import KeyWord from '@/components/KeyWord/keyWord';

const commonInputStyles = 'bg-white dark:bg-black text-gray-dark dark:text-gray-main font-dmsans text-lg sm:text-xl md:text-2xl p-3 w-full rounded-md border border-gray-dark dark:border-gray-main';

export default function Footer() {
  return (
    <footer role='footer' id='footer' className='mt-10 bg-white dark:bg-black-main text-gray-dark dark:text-gray-main border border-black dark:border-white'>
      <div id='contact-section' className='mx-2 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl md:mx-auto flex flex-col mb-6 md:mb-10'>
        <p className='px-4 md:px-8 mt-6 mb-2 md:mb-4 text-base sm:text-xl md:text-2xl font-quicksand font-bold'>
          Feel free to reach out or send me an email directly at <KeyWord simple={true}>sample@gmail.com</KeyWord>.
        </p>
        <div className='px-4 md:px-8'>
          <form action="/" className='space-y-3'>
            <div className='flex flex-col space-y-2 md:flex-row md:space-y-0'>
              <input name='fullName' type='string' placeholder='Name' className={`${commonInputStyles} md:w-3/6`} />
              <input name='email' type='string' placeholder='Email' className={`${commonInputStyles} md:w-3/6 md:ml-5`} />
            </div>
            <textarea name='message' placeholder='Message' className={commonInputStyles} />
            <div className='flex flex-row justify-between text-gray-dark dark:text-gray-main'>
              <button className='text-xl sm:text-2xl md:text-3xl font-dmsans font-bold bg-black dark:bg-white p-1 px-3 md:p-2 md:px-6 text-gray-main dark:text-gray-dark rounded-md'>Submit</button>
              <a href='#'>
                <BsQuestionCircle className='align-text-middle mt-1 md:mt-3 mr-3' size={25} />
              </a>
            </div>
          </form>
        </div>
      </div>
      <hr className='text-black dark:text-white' />
      <div className='flex flex-row justify-center space-x-4 p-3'>
        <SocialIcon href="https://github.com/AbdifatahCodes" role='FaGithub-icon' size={27} Icon={FaGithub} />
        <SocialIcon href="https://twitter.com/@AbdifatahCodes" role='FaXTwitter-icon' size={26} Icon={FaXTwitter} />
        <SocialIcon href="https://www.linkedin.com/in/abdifatah-codes" role='FaLinkedinIn-icon' size={27} Icon={FaLinkedinIn} />
      </div>
      <hr className='text-gray' />
      <div className='flex flex-row justify-center space-x-2 p-1'>
        <p className='font-robotocon text-base md:text-lg'> <span>Made by</span> <span className='font-oswald font-bold'>Abdifatah Osman</span> <span>&copy; {new Date().getFullYear()} </span></p>
      </div>
    </footer>
  );
}

const SocialIcon = ({ href, role, Icon, size }: { href: string, role: string, Icon: IconType, size: number, }) => (
  <div className='shrink-0'>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon role={role} size={size} />
    </a>
  </div>
);
