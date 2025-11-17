'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight
} from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Team', path: '/about' }
    ],
    courses: [
      { name: 'NCERT 6–12', path: '/courses' },
      { name: 'IIT Foundation 6–12', path: '/courses' },
      { name: 'JEE Main & Advanced', path: '/courses' }
    ],
    support: [
      // { name: 'Help Center', path: '/help' },
      { name: 'Contact Us', path: '/contact' },
      // { name: 'FAQs', path: '/faqs' },
      { name: 'Terms & Conditions', path: '/terms' }
    ],
    resources: [
      { name: 'Blog', path: '/blog' },
      { name: 'Study Materials', path: '/resources' },
      { name: 'Sample Papers', path: '/resources' },
      { name: 'NCERT Solutions', path: '/resources' }
    ]
  }
  
  const socialLinks = [
    { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/smartlearners.ai?igsh=N3l6aWhrbnhqN2E0&utm_source=ig_contact_invite', label: 'Instagram' },
    { icon: <FaWhatsapp />, href: 'https://wa.me/916303974827', label: 'WhatsApp' }
  ]
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <motion.div 
                className="relative w-16 h-16"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/logo.png"
                  alt="Smart Learners.ai Logo"
                  width={55}
                  height={55}
                  className="object-contain"
                />
              </motion.div>
              <div>
                <span className="font-bold text-xl text-white">Smart Learners.ai</span>
                <p className="text-xs text-gray-400">AI-Powered Learning</p>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Revolutionizing education with AI-powered personalized learning for CBSE NCERT students. 
              Join thousands of students achieving academic excellence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-600 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <FaArrowRight className="mr-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Courses</h3>
            <ul className="space-y-3">
              {footerLinks.courses.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <FaArrowRight className="mr-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <FaArrowRight className="mr-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-sky-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  4th Floor, Veer Chambers, Prakash Nagar, Hyderabad-500016, India
                </span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-sky-500 flex-shrink-0" />
                <a href="mailto:hello@smartlearners.ai" className="text-gray-400 hover:text-white transition-colors text-sm">
                  hello@smartlearners.ai
                </a>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-sky-500 flex-shrink-0" />
                <a href="tel:+916303974827" className="text-gray-400 hover:text-white transition-colors text-sm">
                  +91 6303974827
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Smart Learners.ai. All rights reserved. Managed by OrcaLex Technologies LLP
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/refund" className="text-gray-400 hover:text-white transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
