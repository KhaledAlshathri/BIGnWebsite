import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiMenu, FiArrowRight } from 'react-icons/fi'

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
      <div className="flex items-center gap-6">
        <NavLink text="الرئيسية" />
        <NavLink text="فعالياتنا" />
        <NavLink text="المنشورات التقنية" />
        <NavLink text="الهيكلة" />
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
    </div>
  )
}

const NavLink = ({ text }) => {
  return (
    <a
      href="#"
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
      <MenuLink text="الرئيسية" />
      <MenuLink text="فعالياتنا" />
      <MenuLink text="المنشورات التقنية" />
      <MenuLink text="الهيكلة" />
    </motion.div>
  )
}

const MenuLink = ({ text }) => {
  return (
    <motion.a
      variants={menuLinkVariants}
      rel="nofollow"
      href="#"
      className="flex h-[30px] items-start gap-2 overflow-hidden font-medium text-lg"
    >
      <motion.span variants={menuLinkArrowVariants}>
        <FiArrowRight className="h-[30px] text-gray-950" aria-hidden="true" />
      </motion.span>
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

const menuLinkArrowVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: -4,
  },
}
