'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { FaRocket, FaBullseye, FaStar, FaBookOpen, FaArrowRight } from 'react-icons/fa'
const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-8">
              About <span className="gradient-text">Smart Learners.ai</span>
            </h1>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed">
                At Smart Learners.ai, we're transforming education with AI-powered personalized learning. Our goal is simple: 
                make world-class, adaptive education accessible to every learner.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story & What Makes Us Different - Side by Side */}
      <section className="py-8 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 relative">
        <div className="absolute inset-0 bg-mesh opacity-15"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Our Story */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Our <span className="gradient-text">Story</span>
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Traditional classrooms often follow a one-size-fits-all approach, leaving some students behind while others race ahead.
                </p>
                
                <p className="text-lg leading-relaxed">
                  We created Smart Learners.ai to change that. A team of educators and technologists joined hands to build a platform that adapts to your pace and unique needs. Using cutting-edge Agentic AI, we provide:
                </p>
                
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center space-x-3 p-5 bg-purple-500 border-2 border-purple-600 rounded-xl shadow-lg shadow-purple-500/30 transform hover:-translate-y-1 transition-all duration-300">
                    <span className="text-white text-2xl">🎯</span>
                    <span className="text-white font-semibold">Personalized guidance for each student</span>
                  </div>
                  <div className="flex items-center space-x-3 p-5 bg-blue-500 border-2 border-blue-600 rounded-xl shadow-lg shadow-blue-500/30 transform hover:-translate-y-1 transition-all duration-300">
                    <span className="text-white text-2xl">⚡</span>
                    <span className="text-white font-semibold">Instant feedback on answers</span>
                  </div>
                  <div className="flex items-center space-x-3 p-5 bg-green-500 border-2 border-green-600 rounded-xl shadow-lg shadow-green-500/30 transform hover:-translate-y-1 transition-all duration-300">
                    <span className="text-white text-2xl">🔍</span>
                    <span className="text-white font-semibold">Targeted support to fix knowledge gaps</span>
                  </div>
                  <div className="flex items-center space-x-3 p-5 bg-orange-500 border-2 border-orange-600 rounded-xl shadow-lg shadow-orange-500/30 transform hover:-translate-y-1 transition-all duration-300">
                    <span className="text-white text-2xl">✨</span>
                    <span className="text-white font-semibold">Confidence to succeed</span>
                  </div>
                </div>
                
                
              </div>
            </motion.div>

            {/* What Makes Us Different */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                What Makes Us <span className="gradient-text">Different</span>
              </h2>
              
              <p className="text-lg text-gray-700 mb-6">
                Instead of focusing only on "what to learn," we also focus on:
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <FaBullseye className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">How you learn best</h3>
                    <p className="text-gray-600">Personalized journeys tailored to your learning goals</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <FaBookOpen className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Why you made mistakes</h3>
                    <p className="text-gray-600">Gap analysis with detailed feedback</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <FaStar className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">How to grow continuously</h3>
                    <p className="text-gray-600">Identify strengths & weak areas that guide continuous learning and improvement.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 text-lg">📊</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Smart Study Planning</h3>
                    <p className="text-gray-600">We prioritize high-weightage topics and important chapters, so students know where to focus their efforts for maximum results.</p>
                  </div>
                </div>
              </div>
              
              
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-lg">
                <p className="text-base text-gray-800 font-medium text-center">
                  💡 It's not just an app. It's a learning companion.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-8 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 relative">
        <div className="absolute inset-0 bg-mesh opacity-25"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core <span className="gradient-text">Values</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 * 0.1, duration: 0.5 }}
            >
              <Card hover className="h-full text-center">
                <div className="mb-6 mx-auto w-48 h-48 relative rounded-xl overflow-hidden shadow-lg">
                  <Image 
                    src="/innovation-value.png" 
                    alt="Innovation"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">Always pushing boundaries with the latest Agentic AI Innovation.</p>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 * 0.1, duration: 0.5 }}
            >
              <Card hover className="h-full text-center">
                <div className="mb-6 mx-auto w-48 h-48 relative rounded-xl overflow-hidden shadow-lg">
                  <Image 
                    src="/student-centric-value.png" 
                    alt="Student-Centric"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Student-Centric</h3>
                <p className="text-gray-600">Every feature designed for student success.</p>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 2 * 0.1, duration: 0.5 }}
            >
              <Card hover className="h-full text-center">
                <div className="mb-6 mx-auto w-48 h-48 relative rounded-xl overflow-hidden shadow-lg">
                  <Image 
                    src="/excellence-value.png" 
                    alt="Excellence"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-600">High-quality, effective, and reliable solutions.</p>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 3 * 0.1, duration: 0.5 }}
            >
              <Card hover className="h-full text-center">
                <div className="mb-6 mx-auto w-48 h-48 relative rounded-xl overflow-hidden shadow-lg">
                  <Image 
                    src="/teacher-insights-value.png" 
                    alt="Teacher Insights"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Teacher Insights</h3>
                <p className="text-gray-600">Providing teachers with clear reports and analysis to track student performance easily.</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join the Movement */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Join the Movement
            </h2>
            <p className="text-xl mb-4">
              Smart Learners.ai is more than an app — it's a mission to give every student the tools to unlock their potential.
            </p>
            <p className="text-lg mb-8 opacity-90">
              👉 Whether you're a student, parent, or teacher, you're invited to be part of this journey.
            </p>
            <Button 
              variant="secondary" 
              size="xl" 
              href="/contact" 
              icon={<FaArrowRight />}
            >
              Get Subscription
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About