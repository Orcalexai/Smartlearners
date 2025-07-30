'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Button from '@/components/Button'
import Card from '@/components/Card'
import { 
  FaBrain, 
  FaChartLine, 
  FaUserGraduate, 
  FaCertificate, 
  FaRocket, 
  FaBookOpen,
  FaPlay,
  FaArrowRight,
  FaStar
} from 'react-icons/fa'
import { HiLightBulb, HiAcademicCap, HiSparkles } from 'react-icons/hi'

const Home = () => {
  const features = [
    {
      icon: <FaBrain className="text-4xl text-sky-600" />,
      title: 'AI-Powered Learning',
      description: 'Advanced AI algorithms personalize your learning journey for maximum efficiency and engagement',
      color: 'from-sky-500 to-blue-600'
    },
    {
      icon: <FaChartLine className="text-4xl text-blue-600" />,
      title: 'Smart Gap Analysis',
      description: 'Identify knowledge gaps instantly and get targeted content to improve weak areas',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: <FaUserGraduate className="text-4xl text-indigo-600" />,
      title: 'CBSE NCERT Focus',
      description: 'Complete coverage of CBSE NCERT syllabus for Classes 6-12 with expert content',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      icon: <FaCertificate className="text-4xl text-emerald-600" />,
      title: 'Achievement Certificates',
      description: 'Earn verified certificates on course completion to showcase your achievements',
      color: 'from-emerald-500 to-teal-600'
    }
  ]
  
  const stats = [
    { number: '10,000+', label: 'CBSE Students', icon: <FaUserGraduate /> },
    { number: '10,000+', label: 'NCERT Questions', icon: <FaBookOpen /> },
    { number: '95%', label: 'Score Improvement', icon: <FaChartLine /> },
    { number: '5,000+', label: 'JEE Questions', icon: <FaBrain /> }
  ]
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50"></div>
          <div className="absolute inset-0 bg-mesh opacity-40"></div>
          <motion.div 
            className="absolute top-20 -left-20 w-96 h-96 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{ 
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute top-40 -right-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{ 
              x: [0, -100, 0],
              y: [0, 100, 0],
              scale: [1.2, 1, 1.2]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
        
        <motion.div 
          className="relative container-max section-padding pt-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center">
            <motion.div variants={itemVariants}>
              <motion.span 
                className="inline-flex items-center px-4 py-2 bg-sky-100 text-sky-800 rounded-full text-sm font-medium mb-6 text-rendering-fix"
                whileHover={{ scale: 1.05 }}
              >
                <HiSparkles className="mr-2" />
                #1 AI-Powered Learning Platform
              </motion.span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 text-shadow text-rendering-fix leading-tight"
              variants={itemVariants}
            >
              Master <span className="gradient-text">CBSE NCERT</span><br />
              <span className="text-4xl md:text-6xl">with AI-Powered Learning</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed text-rendering-fix"
              variants={itemVariants}
            >
              Experience personalized education that adapts to your pace. 
              <span className="gradient-text font-semibold"> Learn in silence, shine with brilliance.</span>
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
              variants={itemVariants}
            >
              <Button size="xl" icon={<FaPlay />} href="https://app1.aieducator.com/">
                Start Learning Free
              </Button>
              <Button variant="secondary" size="xl" icon={<FaArrowRight />} href="https://app1.aieducator.com/">
                Watch Demo
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex justify-center items-center space-x-3 text-yellow-400 mb-16"
              variants={itemVariants}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + i * 0.1, duration: 0.3 }}
                >
                  <FaStar className="text-2xl" />
                </motion.div>
              ))}
              <span className="ml-3 text-gray-600 font-medium text-rendering-fix">Rated 4.9/5 by 10,000+ students</span>
            </motion.div>
          </div>
          
          {/* Stats Cards */}
          <motion.div 
            className="mt-20 relative"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-400 blur-3xl opacity-10"></div>
            <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-gray-200/50">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="text-center group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-3xl text-sky-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 text-rendering-fix">{stat.number}</div>
                    <div className="text-gray-600 font-medium text-rendering-fix">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
      
      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-rendering-fix leading-tight">
              Why Choose <span className="gradient-text">Smart Learners</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-rendering-fix">
              Our AI-powered platform provides personalized learning experiences 
              tailored to each student's unique needs and learning style.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                hover
                glow
                delay={index * 0.1}
                className="h-full group text-center"
              >
                <motion.div
                  className={`mb-6 p-4 bg-gradient-to-r ${feature.color} rounded-2xl w-fit mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-rendering-fix leading-tight">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-rendering-fix">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-sky-600 via-blue-700 to-indigo-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-20"></div>
        <motion.div 
          className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{ 
            scale: [1, 1.5, 1],
            x: [0, 100, 0],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-rendering-fix leading-tight">
                Transform Your Learning Journey
              </h2>
              <p className="text-xl text-sky-100 mb-8 leading-relaxed text-rendering-fix">
                Join thousands of students who have improved their academic performance 
                with our AI-powered learning platform. Experience the future of education today.
              </p>
              <div className="space-y-4">
                {[
                  { icon: <HiLightBulb />, title: 'Smart Answer Correction', desc: 'Get instant feedback with AI-powered evaluation' },
                  { icon: <FaRocket />, title: 'Adaptive Learning Path', desc: 'Personalized curriculum that adapts to your pace' },
                  { icon: <HiAcademicCap />, title: 'Comprehensive Coverage', desc: 'Complete CBSE NCERT syllabus with JEE prep' }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="text-2xl text-yellow-400 flex-shrink-0 mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-rendering-fix">{item.title}</h3>
                      <p className="text-sky-100 text-rendering-fix leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/features">
                  <Button variant="secondary" size="lg" icon={<FaArrowRight />}>
                    Explore All Features
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="relative">
                <Card glass className="text-center p-8">
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <FaBookOpen className="text-8xl text-white mx-auto mb-6" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-rendering-fix">Ready to Excel?</h3>
                  <p className="text-sky-100 mb-6 text-lg leading-relaxed text-rendering-fix">
                    Start your journey to academic success today
                  </p>
                  <Button size="lg" icon={<HiSparkles />} href="https://app1.aieducator.com/">
                    Get Started Now
                  </Button>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-rendering-fix leading-tight">
              Start Your <span className="gradient-text">Success Story</span> Today
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed text-rendering-fix">
              Join Smart Learners.ai and experience the future of education with 
              AI-powered personalized learning that adapts to your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="xl" icon={<HiSparkles />} href="https://app1.aieducator.com/">
                Start Free Trial
              </Button>
              <Link href="/contact">
                <Button variant="outline" size="xl" icon={<FaArrowRight />}>
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home