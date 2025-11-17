'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiSparkles } from 'react-icons/hi'
import Image from 'next/image'
import Button from './Button'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Features', path: '/features' },
    { name: 'Contact', path: '/contact' }
  ]
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const isActive = (path: string) => pathname === path
  
  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 navbar ${
        scrolled
          ? 'bg-gradient-to-r from-purple-100/95 via-blue-100/95 to-pink-100/95 backdrop-blur-xl shadow-lg shadow-purple-500/20 border-b-2 border-purple-300/40'
          : 'bg-gradient-to-r from-purple-100/90 via-blue-100/90 to-pink-100/90 backdrop-blur-md shadow-md shadow-blue-500/10'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="container-max">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Smart Learners.ai Logo"
                width={48}
                height={48}
                className="object-contain"
                style={{ width: 'auto', height: 'auto' }}
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-bold text-xl gradient-text text-rendering-fix leading-tight">
                Smart Learners.ai
              </span>
              <span className="text-xs text-gray-500 text-rendering-fix">AI-Powered Learning</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  href={link.path}
                  className={`relative font-medium transition-colors duration-300 nav-link text-rendering-fix ${
                    isActive(link.path)
                      ? 'text-sky-600'
                      : 'text-gray-700 hover:text-sky-600'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full"
                      layoutId="activeLink"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Button size="sm" icon={<HiSparkles />} href="/get-started">
                Get Subscription
              </Button>
            </motion.div>
          </div>
          
          <motion.button
            className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </motion.div>
          </motion.button>
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:hidden bg-gradient-to-r from-purple-100/95 via-blue-100/95 to-pink-100/95 backdrop-blur-xl border-t-2 border-purple-300/40"
          >
            <div className="container-max py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    href={link.path}
                    className={`block font-medium py-3 px-4 rounded-lg transition-all duration-300 text-rendering-fix ${
                      isActive(link.path)
                        ? 'text-sky-600 bg-sky-50'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.3 }}
                className="pt-4"
              >
                <Button className="w-full" size="md" icon={<HiSparkles />} href="/get-started">
                  Get Started
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar