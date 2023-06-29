import Head from 'next/head'
import { FiTerminal } from 'react-icons/fi'
import ThemeToggle from '@/components/themeToggle'

export default function Navbar(props : any) {
    return (
        <>
        <Head>
            <title>{props.title}</title>
            <meta name='description' content='Generated by create next app' />
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <link rel='icon' href='/favicon.png' />
        </Head>
        <main>
            <div id='header' className='bg-white dark:bg-black-main border p-8 px-28 flex justify-between items-center space-x-4'>
                <a href="/">
                <div className='flex items-center space-x-3'>
                    <div className='shrink-0 text-gray-dark dark:text-gray-main'>
                        <FiTerminal
                            size={38}
                        />
                    </div>
                    <div>
                        <p className='text-black dark:text-white font-oswald font-normal text-3xl'>ABDIFATAH CODES</p>
                    </div>
                </div>
                </a>
                <div className='flex space-x-6'>
                <ul>
                    <li className='text-black dark:text-white font-robotocon text-xl space-x-6'>
                    <a href="/about">About</a>
                    <a href="#">Projects</a>
                    <a href="#">Blog</a>
                    <a href="#">Resume</a>
                    <a href="#">Contact</a>
                    </li>
                </ul>
                    <ThemeToggle/>
                </div>
            </div>
        </main>
        </>
    )
}