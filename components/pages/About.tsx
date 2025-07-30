'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { FaLightbulb, FaUsers, FaAward, FaChartLine } from 'react-icons/fa'

const About = () => {
  const values = [
    {
      icon: <FaLightbulb className="text-4xl text-purple-600" />,
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge AI technology in education'
    },
    {
      icon: <FaUsers className="text-4xl text-pink-600" />,
      title: 'Student-Centric',
      description: 'Every feature designed with student success in mind'
    },
    {
      icon: <FaAward className="text-4xl text-indigo-600" />,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality educational experience'
    },
    {
      icon: <FaChartLine className="text-4xl text-purple-600" />,
      title: 'Growth',
      description: 'Fostering continuous improvement and lifelong learning'
    }
  ]
  
  const milestones = [
    { year: '2021', event: 'Smart Learners.ai founded with a vision to revolutionize education' },
    { year: '2022', event: 'Launched AI-powered learning platform for CBSE students' },
    { year: '2023', event: 'Reached 25,000+ active students across India' },
    { year: '2024', event: 'Expanded to cover complete NCERT syllabus for Classes 6-12' }
  ]
  
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About <span className="gradient-text">Smart Learners.ai</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to transform education through AI-powered personalized 
              learning, making quality education accessible to every student in India.
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <p className="text-gray-600 mb-4">
                Smart Learners.ai was born from a simple observation: traditional education 
                often follows a one-size-fits-all approach, leaving many students behind. 
                We believed there had to be a better way.
              </p>
              <p className="text-gray-600 mb-4">
                Our team of educators, technologists, and AI experts came together to create 
                a platform that adapts to each student's unique learning style, pace, and needs. 
                By leveraging cutting-edge AI technology, we've built a system that provides 
                personalized guidance, instant feedback, and targeted support.
              </p>
              <p className="text-gray-600 mb-6">
                Today, we're proud to serve over 50,000 students across India, helping them 
                achieve their academic goals and build confidence in their abilities.
              </p>
              <Button>Join Our Journey</Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 blur-3xl opacity-20"></div>
              <Card gradient className="relative">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 italic text-lg">
                  "To democratize quality education by providing every student with 
                  personalized, AI-powered learning experiences that unlock their full 
                  potential and prepare them for success in academics and beyond."
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do at Smart Learners.ai
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card hover className="h-full text-center">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our mission to transform education
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-center mb-8"
              >
                <div className="flex-shrink-0 w-24 text-right pr-4">
                  <span className="text-2xl font-bold gradient-text">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-purple-600 rounded-full relative">
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-purple-200"></div>
                </div>
                <div className="flex-grow pl-4">
                  <Card className="p-4">
                    <p className="text-gray-700">{milestone.event}</p>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About