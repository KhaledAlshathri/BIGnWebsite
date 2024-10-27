import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiMenu } from 'react-icons/fi' // Removed FiArrowRight
import { Link } from 'react-router-dom'

const FlipNavWrapper = () => {
  return (
    <div className="bg-gray-50">
      <FlipNav />
    </div>
  )
}

const FlipNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav
      dir="ltr"
      className="relative flex items-center justify-between border-b border-gray-200 bg-white p-4 px-10"
    >
      <NavLeft setIsOpen={setIsOpen} />
      <NavRight />
      <NavMenu isOpen={isOpen} />
    </nav>
  )
}

const Logo = () => {
  return (
    <img
      src="./images/BIGn logo.png"
      alt="Big n logo"
      style={{ height: '35px' }}
    />
  )
}

const NavLeft = ({ setIsOpen }) => {
  return (
    <div className="flex w-full items-center">
      <Logo />
      <div className="flex-grow" />
      {/* Navigation links, hidden on small screens */}
      <div className="hidden lg:flex items-center gap-8">
        <MenuLink text="الهيكلة" href="/members" />
        <MenuLink text="المنشورات التقنية" href="/content" />
        <MenuLink text="الأنشطة" href="/activities" />
        <MenuLink text="من نحن" href="/about" />
        <MenuLink text="الرئيسية" href="/" />
      </div>
      {/* Hamburger menu button, visible on small screens */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block text-2xl text-gray-950 lg:hidden"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle Menu"
      >
        <FiMenu />
      </motion.button>
    </div>
  )
}

const NavLink = ({ text, href }) => {
  return (
    <a
      href={href}
      rel="nofollow"
      className="hidden h-[30px] overflow-hidden font-medium lg:block"
    >
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex h-[30px] items-center text-gray-500">
          {text}
        </span>
        <span className="flex h-[30px] items-center text-indigo-600">
          {text}
        </span>
      </motion.div>
    </a>
  )
}

const NavRight = () => {
  return <div className="flex items-center gap-4"></div>
}

const NavMenu = ({ isOpen }) => {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      className="absolute left-0 right-0 top-full origin-top flex flex-col gap-4 bg-white p-4 shadow-lg"
    >
      <MenuLink text="الهيكلة" href="/members" />
      <MenuLink text="المنشورات التقنية" href="/content" />
      <MenuLink text="الأنشطة" href="/activities" />
      <MenuLink text="من نحن" href="/about" />
      <MenuLink text="الرئيسية" href="/" />
    </motion.div>
  )
}

const MenuLink = ({ text, href }) => {
  return (
    <motion.a
      variants={menuLinkVariants}
      rel="nofollow"
      href={href}
      className="flex h-[30px] items-start gap-2 overflow-hidden font-medium text-lg"
    >
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex h-[30px] items-center text-gray-500">
          {text}
        </span>
        <span className="flex h-[30px] items-center text-indigo-600">
          {text}
        </span>
      </motion.div>
    </motion.a>
  )
}

export default FlipNavWrapper

const menuVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.1,
    },
  },
}

const menuLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: -10,
    opacity: 0,
  },
}
