import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { FiTerminal } from 'react-icons/fi'
import { MdMenu, MdCancelPresentation, } from 'react-icons/md'
import ThemeToggle from '@/components/themeToggle'
import Link from 'next/link'
import { Link as LinkScroll, } from 'react-scroll'
import ScrollToTop from "@/components/scrollToTop";

export default function Navbar(props: any) {
	const router = useRouter();
	const [navUlIsOpen, setNavUlIsOpen] = useState(true);

	return (
		<>
			<Head>
					<title>{props.title}</title>
					<meta name='description' content={'Portfolio website made by ' + props.title} />
					<meta name='viewport' content='width=device-width, initial-scale=1' />
					<link rel='icon' href='/favicon.png' />
			</Head>
			<main>
				<nav id='header' className='flex bg-white dark:bg-black-main border p-4 sm:p-8 sm:px-14 xl:px-28 justify-between items-center space-x-4'>
					<Link href={`${router.pathname === "/blog" ? "/blog" : "/"}`}>
						<div className='flex items-center space-x-3'>
							<div className='shrink-0 text-gray-dark dark:text-gray-main'>
								<FiTerminal
										size={38}
								/>
							</div>
							<div className='text-black dark:text-white font-oswald font-normal text-2xl md:text-3xl'>
								{
									new RegExp(/^\/blog/).test(router.pathname)
									?
									<div>
										<p className='w-max block sm:hidden'>ABDI CODES <span className='font-courgette'>BLOG</span></p>
										<p className='w-max hidden sm:block'>ABDIFATAH CODES <span className='font-courgette'>BLOG</span></p>
									</div>
									:
									<div>
										<p className='w-max block sm:hidden'>ABDI CODES</p>
										<p className='w-max hidden sm:block'>ABDIFATAH CODES</p>
									</div>
								}
							</div>
						</div>
					</Link>
					<div className='flex space-x-6'>
						<div className='hidden lg:block'>
							<ul className={`w-full flex-grow lg:flex lg:items-center lg:w-auto`}>
								<li className={`text-black dark:text-white font-robotocon text-xl mt-1 space-x-6 underline-offset-4`}>
									<Link 
										href="/"
										target="_blank" rel="noopener noreferrer"
										className={`cursor-pointer ${router.pathname === "/" ? "hidden" : ""} hover:underline hover:text-neutral-400  dark:hover:text-neutral-300`}
									>Home</Link>
									<LinkScroll
										to="about-section"
										spy={true}
										smooth={true}
										offset={-20}
										duration={1000}
										className='cursor-pointer hover:underline hover:text-neutral-400  dark:hover:text-neutral-300'
									>About</LinkScroll>
									<LinkScroll
										to="projects-section"
										spy={true}
										smooth={true}
										offset={-20}
										duration={1000}
										className={`cursor-pointer ${new RegExp('^\/blog').test(router.pathname) ? "hidden" : ""} hover:underline hover:text-neutral-400  dark:hover:text-neutral-300`}
									>Projects</LinkScroll>
									<Link 
										href="/blog"
										target="_blank" rel="noopener noreferrer"
										className={`cursor-pointer ${new RegExp('^\/blog').test(router.pathname) ? "hidden" : ""} hover:underline hover:text-neutral-400  dark:hover:text-neutral-300`}
									>Blog</Link>
									<Link 
										href="/resume"
										target="_blank" rel="noopener noreferrer"
										className={`cursor-pointer ${router.pathname === "/resume" ? "hidden" : ""} hover:underline hover:text-neutral-400  dark:hover:text-neutral-300`}
									>Resume</Link>
									<LinkScroll
										to="contact-section"
										spy={true}
										smooth={true}
										offset={-20}
										duration={1000}
										className='cursor-pointer hover:underline hover:text-neutral-400  dark:hover:text-neutral-300'
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
							<LinkScroll
								to="about-section"
								spy={true}
								smooth={true}
								offset={-20}
								duration={1000}
								className='bg-gray dark:bg-black-bg px-2 sm:px-4 cursor-pointer hover:underline hover:text-neutral-400  dark:hover:text-neutral-300'
							>About</LinkScroll>
							<LinkScroll
								to="projects-section"
								spy={true}
								smooth={true}
								offset={-20}
								duration={1000}
								className='px-2 sm:px-4 cursor-pointer hover:underline hover:text-neutral-400  dark:hover:text-neutral-300'
							>Projects</LinkScroll>
							<Link 
								href="/blog"
								target="_blank" rel="noopener noreferrer"
								className='bg-gray dark:bg-black-bg px-2 sm:px-4 cursor-pointer hover:underline hover:text-neutral-400  dark:hover:text-neutral-300'
							>Blog</Link>
							<Link 
								href="/resume"
								target="_blank" rel="noopener noreferrer"
								className='px-2 sm:px-4 cursor-pointer hover:underline hover:text-neutral-400  dark:hover:text-neutral-300'
							>Resume</Link>
							<LinkScroll
								to="contact-section"
								spy={true}
								smooth={true}
								offset={-20}
								duration={1000}
								className='bg-gray dark:bg-black-bg px-2 sm:px-4 cursor-pointer hover:underline hover:text-neutral-400  dark:hover:text-neutral-300'
							>Contact</LinkScroll>
						</li>
					</ul>
				</div>

				{/* Leave the scrollToTop function Here! */}
				<ScrollToTop />
			</main>
		</>
	)
}