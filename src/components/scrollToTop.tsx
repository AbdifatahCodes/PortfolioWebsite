import { useEffect, useState } from 'react'
import { Link as LinkScroll, } from 'react-scroll'
import { HiOutlineBarsArrowUp } from 'react-icons/hi2'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <LinkScroll
      to="header"
      spy={true}
      smooth={true}
      offset={0}
      duration={1000}
      className={`cursor-pointer ${isVisible ? "block" : "hidden"} fixed bottom-5 right-10 z-10 flex py-2 md:py-4 px-2 md:px-4 border-2 mx-auto space-x-1 rounded-full text-dark-main-bg dark:text-light-main-bg hover:text-light-main-bg dark:hover:text-dark-main-bg bg-light-main-bg dark:bg-dark-main-bg hover:bg-dark-main-bg dark:hover:bg-light-main-bg border-dark-main-bg dark:border-light-main-bg hover:border-light-main-bg dark:hover:border-dark-main-bg`}
    >
      <HiOutlineBarsArrowUp
        size={36}
      />
    </LinkScroll>
  )
}