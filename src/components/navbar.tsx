import Head from 'next/head'
import { useState } from 'react'
import { FiTerminal } from 'react-icons/fi'
import { MdMenu, MdCancelPresentation, } from 'react-icons/md'
import ThemeToggle from '@/components/themeToggle'
import Link from 'next/link'
import {Link as LinkScroll,} from 'react-scroll'

export default function Navbar(props: any) {
	const [navUlIsOpen, setNavUlIsOpen] = useState(true);

	return (
		<>
			<Head>
					<title>{props.title}</title>
					<meta name='description' content='Generated by create next app' />
					<meta name='viewport' content='width=device-width, initial-scale=1' />
					<link rel='icon' href='/favicon.png' />
			</Head>
			<main>
				<nav id='header' className='flex bg-white dark:bg-black-main border p-4 sm:p-8 sm:px-14 xl:px-28 justify-between items-center space-x-4'>
					<Link href="/">
						<div className='flex items-center space-x-3'>
							<div className='shrink-0 text-gray-dark dark:text-gray-main'>
								<FiTerminal
										size={38}
								/>
							</div>
							<div className='text-black dark:text-white font-oswald font-normal text-2xl md:text-3xl'>
								<p className='w-max block sm:hidden'>ABDI CODES</p>
								<p className='w-max hidden sm:block'>ABDIFATAH CODES</p>
							</div>
						</div>
					</Link>
					<div className='flex space-x-6'>
						<div className='hidden lg:block'>
							<ul className={`w-full flex-grow lg:flex lg:items-center lg:w-auto`}>
								<li className={`text-black dark:text-white font-robotocon text-xl mt-1 space-x-6`}>
									<LinkScroll
										to="about-section"
										spy={true}
										smooth={true}
										offset={-20}
										duration={1000}
										className='cursor-pointer'
									>About</LinkScroll>
									<LinkScroll
										to="projects-section"
										spy={true}
										smooth={true}
										offset={-20}
										duration={1000}
										className='cursor-pointer'
									>Projects</LinkScroll>
									<Link href="#">Blog</Link>
									<Link href="#">Resume</Link>
									<LinkScroll
										to="contact-section"
										spy={true}
										smooth={true}
										offset={-20}
										duration={1000}
										className='cursor-pointer'
									>Contact</LinkScroll>
								</li>
							</ul>
						</div>
						<div className='block self-center'>
							<ThemeToggle />
						</div>
						<button
							className={`block lg:hidden`}
							onClick={() => setNavUlIsOpen(!navUlIsOpen)}
						>
							{
								(navUlIsOpen)
									? 
									<MdMenu
										size={38}
									/>
									:
									<MdCancelPresentation
										size={38}
										color='red'
									/>
							}
						</button>
					</div>
				</nav>
				<div>
					<ul className={`flex-grow lg:items-center lg:w-auto lg:hidden border rounded-lg mx-2 my-2 py-2 bg-white dark:bg-black-main ${navUlIsOpen ? "hidden" : "block"}`}>
						<li className={`text-black dark:text-white font-robotocon px-1 sm:px-2 text-xl space-y-1 flex flex-col`}>
							<Link href="#about-section" className='bg-gray dark:bg-black-bg px-2 sm:px-4'>About</Link>
							<Link href="#projects-section" className='px-2 sm:px-4'>Projects</Link>
							<Link href="#" className='bg-gray dark:bg-black-bg px-2 sm:px-4'>Blog</Link>
							<Link href="#" className='px-2 sm:px-4'>Resume</Link>
							<Link href="#contact-section" className='bg-gray dark:bg-black-bg px-2 sm:px-4'>Contact</Link>
						</li>
					</ul>
				</div>
			</main>
		</>
	)
}