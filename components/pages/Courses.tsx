'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { FaFlask, FaCalculator, FaGlobe, FaLanguage, FaDesktop, FaRocket, FaGraduationCap, FaClock, FaBell } from 'react-icons/fa'

const Courses = () => {
  
  const courses = [
    {
      id: 1,
      title: 'NCERT (Classes 6–12)',
      type: 'ncert',
      icon: <FaGraduationCap className="text-3xl" />,
      description: 'Full NCERT syllabus for Classes 6–12',
      focus: 'Step-by-step problem solving, concept clarity and AI-powered support for every learner',
      keyFeatures: ['Classwork', 'Homework', 'Performance analysis', 'Instant feedback', 'Chatbot assistance'],
      color: 'from-blue-600 to-cyan-700',
      price: '₹300',
      originalPrice: '₹500',
      available: true
    },
    {
      id: 2,
      title: 'IIT Foundation (Classes 6–12)',
      type: 'iit-foundation',
      icon: <FaRocket className="text-3xl" />,
      description: 'Strong conceptual foundation for IIT from middle school',
      focus: 'Higher-order problem solving with advanced practice sets from basics to advanced level challenges',
      keyFeatures: ['Chapter-wise assignments', 'Difficulty-based tests (Easy/Medium/Hard)'],
      color: 'from-green-600 to-emerald-700',
      price: '₹500',
      originalPrice: '₹700',
      available: true
    },
    {
      id: 3,
      title: 'JEE Mains ',
      type: 'jee-mains',
      icon: <FaCalculator className="text-3xl" />,
      description: 'Full JEE Main syllabus with NCERT + advanced problem solving',
      focus: 'Practice with real exam patterns,focused practice to balance speed, accuracy, and strategy',
      keyFeatures: ['Topic-wise tests', 'AI-based instant feedback', 'Similar Questions','Time Management'],
      color: 'from-orange-600 to-red-700',
      price: '₹600',
      originalPrice: '₹800',
      available: true
    },
    {
      id: 4,
      title: 'JEE Advanced ',
      type: 'jee-advanced',
      icon: <FaFlask className="text-3xl" />,
      description: 'Advanced problem solving aligned to JEE Advanced pattern',
      focus: 'Multi-concept problems to Crack the toughest exam with critical thinking and application skills',
      keyFeatures: ['Level-based Tests', 'Topic-wise Analysis', 'Similar Question Practice','Time Management'],
      color: 'from-indigo-600 to-purple-700',
      price: '₹800',
      originalPrice: '₹1,000',
      available: true
    }
  ]
  
  
  return (
    <div className="min-h-screen pt-20">
      <section className="py-10 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Courses</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive curriculum coverage with AI-powered learning 
              for Classes 6-12, IIT Foundation plus specialized JEE Mains and JEE Advanced preparation.
            </p>
            
          </motion.div>
        </div>
      </section>
      
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card hover className="h-full flex flex-col relative">
                  <div className={`bg-gradient-to-r ${course.color} text-white p-4 rounded-t-lg -m-6 mb-4`}>
                    <div className="flex items-center justify-center">
                      {course.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-center text-gray-900">
                    {course.title}
                  </h3>
                  <p className="mb-3 font-medium text-gray-700">
                    {course.description}
                  </p>
                  <p className="mb-4 text-sm text-gray-600">
                    <strong>Focus:</strong> {course.focus}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-gray-900">
                      Key Features:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {course.keyFeatures.map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-700"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4 border-t pt-4">
                    <div className="flex items-center justify-center">
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg px-4 py-2">
                        <span className="text-xl font-bold text-gray-900">
                          {course.price}
                        </span>
                        <span className="text-sm text-gray-600 ml-1">per month</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <Button className="w-full" href="/contact">Start Learning</Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          {courses.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="max-w-2xl mx-auto">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
                  <FaClock className="text-4xl text-gray-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">No courses found</h3>
                  <p className="text-gray-600">
                    Please select a different filter or view all courses.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
      
      <section className="py-20 bg-gradient-to-br from-orange-100 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get Notified About <span className="gradient-text">Upcoming Courses</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Be the first to know when your favorite courses launch. We'll send you early access
              and special discounts for new courses across all classes.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <Card className="text-center p-6">
                <FaBell className="text-3xl text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Early Access</h3>
                <p className="text-gray-600 text-sm">Get 7-day early access to new courses before public launch</p>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Card className="text-center p-6">
                <FaRocket className="text-3xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Special Discounts</h3>
                <p className="text-gray-600 text-sm">Up to 30% off on new course launches for waitlist members</p>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Card className="text-center p-6">
                <FaGraduationCap className="text-3xl text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Course Updates</h3>
                <p className="text-gray-600 text-sm">Regular updates on course development and progress</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Courses