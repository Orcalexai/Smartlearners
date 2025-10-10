'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
  const [activeStudentCard, setActiveStudentCard] = useState<number | null>(null)
  const [activeTeacherCard, setActiveTeacherCard] = useState<number | null>(null)

  const features = [
    {
      image: '/curriculum-coverage.png',
      title: 'Comprehensive Curriculum Coverage',
      description: 'Complete learning for NCERT 6–12, IIT Foundation, and JEE Main & Advanced – all in one app.',
      color: 'from-sky-500 to-blue-600'
    },
    {
      image: '/ai-powered-learning.png',
      title: 'AI-Powered Learning',
      description: 'Advanced Agentic AI Innovation to personalize your learning journey for maximum efficiency and engagement',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      image: '/gap-analysis.png',
      title: 'Gap Analysis',
      description: 'From self study, homework, and classwork, track student progress with detailed class and individual reports.',
      color: 'from-indigo-500 to-purple-600'
    }
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
      <section className="relative pt-10 pb-0 overflow-hidden">
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
          className="relative container-max section-padding pt-2"
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
                Your Path to Smarter Learning - Designed & Developed by Orcalex Technologies
              </motion.span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 text-shadow text-rendering-fix leading-tight"
              variants={itemVariants}
            >
              <span className="gradient-text">The No.1 Agentic AI Educational App</span><br />
              <span className="text-4xl md:text-6xl">All-in-One Learning Platform</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-4 max-w-4xl mx-auto leading-relaxed text-rendering-fix"
              variants={itemVariants}
            >
              Experience personalized education that adapts to your pace. 
              <span className="gradient-text font-semibold"> Learn in silence, shine with brilliance.</span>
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center mb-0"
              variants={itemVariants}
            >
              <Button variant="secondary" size="xl" icon={<FaArrowRight />} href="https://www.youtube.com/@AiEducator-j8l" target="_blank">
                Watch Demo
              </Button>
            </motion.div>
            
          </div>
        </motion.div>
      </section>
      
      {/* Features Section */}
      <section className="pt-0 pb-8 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative">
        <div className="absolute inset-0 bg-mesh opacity-20"></div>
        <div className="container-max relative z-10">
          <motion.div 
            className="text-center mb-2"
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
              tailored to each student's unique needs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                hover
                glow
                delay={index * 0.1}
                className="h-full group text-center"
              >
                <div className="mb-6 mx-auto">
                  <div className="relative w-64 h-64 mx-auto">
                    <Image 
                      src={feature.image} 
                      alt={feature.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-rendering-fix leading-tight">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-rendering-fix">{feature.description}</p>
              </Card>
            ))}
          </div>
          
          <motion.div 
            className="flex justify-center mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Link href="/features">
              <Button variant="primary" size="lg" icon={<FaArrowRight />}>
                Explore All Features
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-12 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative">
        <div className="absolute inset-0 bg-mesh opacity-10"></div>
        <div className="container-max relative z-10">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-rendering-fix leading-tight">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-rendering-fix">
              Discover how our platform empowers both students and teachers with powerful tools for effective learning and teaching.
            </p>
          </motion.div>
          
          {/* Student Dashboard Section */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-8 text-rendering-fix">
              👩‍🎓 Student Dashboard
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              <Card hover glow delay={0} className="overflow-visible p-0 group relative cursor-pointer" onClick={() => setActiveStudentCard(activeStudentCard === 0 ? null : 0)}>
                <div className="relative h-48 w-full bg-slate-800 overflow-visible">
                  <Image 
                    src="/login-portal.png" 
                    alt="Login & Access" 
                    fill 
                    className={`object-contain p-2 transition-all duration-500 ease-in-out ${activeStudentCard === 0 ? 'scale-[2.5] z-50 shadow-2xl rounded-lg' : ''}`}
                  />
                  {/* Text overlay positioned further down */}
                  <div className={`absolute top-[320px] left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-blue-600/95 to-purple-600/95 text-white px-6 py-4 rounded-lg shadow-2xl transition-all duration-500 z-[60] min-w-[300px] backdrop-blur-sm ${activeStudentCard === 0 ? 'opacity-100' : 'opacity-0'}`}>
                    <h4 className="font-bold text-lg mb-2 text-center">Login & Access</h4>
                    <p className="text-white/90 text-sm text-center">Log in to start learning and manage all your tasks in one place.</p>
                  </div>
                </div>
                <div className="p-3 text-center">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Login & Access</h4>
                  <p className="text-sm text-gray-600">Log in to start learning and manage all your tasks in one place.</p>
                </div>
              </Card>
              
              <Card hover glow delay={0.1} className="overflow-visible p-0 group relative cursor-pointer" onClick={() => setActiveStudentCard(activeStudentCard === 1 ? null : 1)}>
                <div className="relative h-48 w-full bg-slate-800 overflow-visible">
                  <Image 
                    src="/merged-student-dashboard.png" 
                    alt="Self Practice" 
                    fill 
                    className={`object-contain p-2 transition-all duration-500 ease-in-out ${activeStudentCard === 1 ? 'scale-[2.5] z-50 shadow-2xl rounded-lg' : ''}`}
                  />
                </div>
                  <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gradient-to-br from-blue-600/95 to-purple-600/95 text-white px-6 py-4 rounded-lg shadow-2xl transition-all duration-500 z-[60] min-w-[300px] backdrop-blur-sm ${activeStudentCard === 1 ? 'opacity-100' : 'opacity-0'}`}>
                    <h4 className="font-bold text-lg mb-2 text-center">Self Practice</h4>
                    <p className="text-white/90 text-sm text-center">Practice chapter-wise exercises at your own pace and get instant feedback.</p>
                  </div>
                <div className="p-3 text-center">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Self Practice</h4>
                  <p className="text-sm text-gray-600">Practice chapter-wise exercises at your own pace and get instant feedback.</p>
                </div>
              </Card>
              
              <Card hover glow delay={0.2} className="overflow-visible p-0 group relative cursor-pointer" onClick={() => setActiveStudentCard(activeStudentCard === 2 ? null : 2)}>
                <div className="relative h-48 w-full bg-slate-800 overflow-visible">
                  <Image 
                    src="/merged-teacher-dashboard.png" 
                    alt="Homework" 
                    fill 
                    className={`object-contain p-2 transition-all duration-500 ease-in-out ${activeStudentCard === 2 ? 'scale-[2.5] z-50 shadow-2xl rounded-lg' : ''}`}
                  />
                </div>
                  <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gradient-to-br from-blue-600/95 to-purple-600/95 text-white px-6 py-4 rounded-lg shadow-2xl transition-all duration-500 z-[60] min-w-[300px] backdrop-blur-sm ${activeStudentCard === 2 ? 'opacity-100' : 'opacity-0'}`}>
                    <h4 className="font-bold text-lg mb-2 text-center">Homework</h4>
                    <p className="text-white/90 text-sm text-center">Receive notifications for homework assigned by teachers and submit for quick feedback.</p>
                  </div>
                <div className="p-3 text-center">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Homework</h4>
                  <p className="text-sm text-gray-600">Receive notifications for homework assigned by teachers and submit for quick feedback.</p>
                </div>
              </Card>
              
              <Card hover glow delay={0.3} className="overflow-visible p-0 group relative cursor-pointer" onClick={() => setActiveStudentCard(activeStudentCard === 3 ? null : 3)}>
                <div className="relative h-48 w-full bg-slate-800 overflow-visible">
                  <Image 
                    src="/merged-performance-analysis.png" 
                    alt="Track Progress" 
                    fill 
                    className={`object-contain p-2 transition-all duration-500 ease-in-out ${activeStudentCard === 3 ? 'scale-[2.5] z-50 shadow-2xl rounded-lg' : ''}`}
                  />
                </div>
                  <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gradient-to-br from-blue-600/95 to-purple-600/95 text-white px-6 py-4 rounded-lg shadow-2xl transition-all duration-500 z-[60] min-w-[300px] backdrop-blur-sm ${activeStudentCard === 3 ? 'opacity-100' : 'opacity-0'}`}>
                    <h4 className="font-bold text-lg mb-2 text-center">Track Progress</h4>
                    <p className="text-white/90 text-sm text-center">Use analytics dashboard to check performance with gap analysis.</p>
                  </div>
                <div className="p-3 text-center">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Track Progress</h4>
                  <p className="text-sm text-gray-600">Use analytics dashboard to check performance with gap analysis.</p>
                </div>
              </Card>
              
              <Card hover glow delay={0.4} className="overflow-visible p-0 group relative cursor-pointer" onClick={() => setActiveStudentCard(activeStudentCard === 4 ? null : 4)}>
                <div className="relative h-48 w-full bg-slate-800 overflow-visible">
                  <Image 
                    src="/merged-card-image.png" 
                    alt="Chatbot" 
                    fill 
                    className={`object-contain p-2 transition-all duration-500 ease-in-out ${activeStudentCard === 4 ? 'scale-[2.5] z-50 shadow-2xl rounded-lg' : ''}`}
                  />
                </div>
                  <div className={`absolute top-[280px] left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-blue-600/95 to-purple-600/95 text-white px-6 py-4 rounded-lg shadow-2xl transition-all duration-500 z-[60] min-w-[300px] backdrop-blur-sm ${activeStudentCard === 4 ? 'opacity-100' : 'opacity-0'}`}>
                    <h4 className="font-bold text-lg mb-2 text-center">Chatbot</h4>
                    <p className="text-white/90 text-sm text-center">Ask anything anytime — get solutions and study plans instantly.</p>
                  </div>
                <div className="p-3 text-center">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Chatbot</h4>
                  <p className="text-sm text-gray-600">Ask anything anytime — get solutions and study plans instantly.</p>
                </div>
              </Card>
            </div>
          </div>
          
          {/* Teacher Dashboard Section */}
          <div>
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-8 text-rendering-fix">
              👩‍🏫 Teacher Dashboard
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              <Card hover glow delay={0} className="overflow-visible p-0 group relative cursor-pointer" onClick={() => setActiveTeacherCard(activeTeacherCard === 0 ? null : 0)}>
                <div className="relative h-48 w-full bg-slate-800 overflow-visible">
                  <Image 
                    src="/login-portal.png" 
                    alt="Login & Assign" 
                    fill 
                    className={`object-contain p-2 transition-all duration-500 ease-in-out ${activeTeacherCard === 0 ? 'scale-[2.5] z-50 shadow-2xl rounded-lg' : ''}`}
                  />
                </div>
                  <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gradient-to-br from-blue-600/95 to-purple-600/95 text-white px-6 py-4 rounded-lg shadow-2xl transition-all duration-500 z-[60] min-w-[300px] backdrop-blur-sm ${activeTeacherCard === 0 ? 'opacity-100' : 'opacity-0'}`}>
                    <h4 className="font-bold text-lg mb-2 text-center">Login & Assign</h4>
                    <p className="text-white/90 text-sm text-center">Easily assign classwork and homework to students directly.</p>
                  </div>
                <div className="p-3 text-center">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Login & Assign</h4>
                  <p className="text-sm text-gray-600">Easily assign classwork and homework to students directly.</p>
                </div>
              </Card>
              
              <Card hover glow delay={0.1} className="overflow-visible p-0 group relative cursor-pointer" onClick={() => setActiveTeacherCard(activeTeacherCard === 1 ? null : 1)}>
                <div className="relative h-48 w-full bg-slate-800 overflow-visible">
                  <Image 
                    src="/merged-classwork-homework.png" 
                    alt="Homework & Classwork" 
                    fill 
                    className={`object-contain p-2 transition-all duration-500 ease-in-out ${activeTeacherCard === 1 ? 'scale-[2.5] z-50 shadow-2xl rounded-lg' : ''}`}
                  />
                </div>
                  <div className={`absolute top-[280px] left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-blue-600/95 to-purple-600/95 text-white px-6 py-4 rounded-lg shadow-2xl transition-all duration-500 z-[60] min-w-[300px] backdrop-blur-sm ${activeTeacherCard === 1 ? 'opacity-100' : 'opacity-0'}`}>
                    <h4 className="font-bold text-lg mb-2 text-center">Homework & Classwork</h4>
                    <p className="text-white/90 text-sm text-center">Assign homework and classwork to be completed through the platform.</p>
                  </div>
                <div className="p-3 text-center">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Homework & Classwork</h4>
                  <p className="text-sm text-gray-600">Assign homework and classwork to be completed through the platform.</p>
                </div>
              </Card>
              
              <Card hover glow delay={0.2} className="overflow-visible p-0 group relative cursor-pointer" onClick={() => setActiveTeacherCard(activeTeacherCard === 2 ? null : 2)}>
                <div className="relative h-48 w-full bg-slate-800 overflow-visible">
                  <Image 
                    src="/merged-assignment-latest.png" 
                    alt="Worksheets" 
                    fill 
                    className={`object-contain p-2 transition-all duration-500 ease-in-out ${activeTeacherCard === 2 ? 'scale-[2.5] z-50 shadow-2xl rounded-lg' : ''}`}
                  />
                </div>
                  <div className={`absolute top-[280px] left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-blue-600/95 to-purple-600/95 text-white px-6 py-4 rounded-lg shadow-2xl transition-all duration-500 z-[60] min-w-[300px] backdrop-blur-sm ${activeTeacherCard === 2 ? 'opacity-100' : 'opacity-0'}`}>
                    <h4 className="font-bold text-lg mb-2 text-center">Worksheets</h4>
                    <p className="text-white/90 text-sm text-center">Create and assign custom worksheets with your own questions.</p>
                  </div>
                <div className="p-3 text-center">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Worksheets</h4>
                  <p className="text-sm text-gray-600">Create and assign custom worksheets with your own questions.</p>
                </div>
              </Card>
              
              <Card hover glow delay={0.3} className="overflow-visible p-0 group relative cursor-pointer" onClick={() => setActiveTeacherCard(activeTeacherCard === 3 ? null : 3)}>
                <div className="relative h-48 w-full bg-slate-800 overflow-visible">
                  <Image 
                    src="/merged-performance.png" 
                    alt="Class Analysis" 
                    fill 
                    className={`object-contain p-2 transition-all duration-500 ease-in-out ${activeTeacherCard === 3 ? 'scale-[2.5] z-50 shadow-2xl rounded-lg' : ''}`}
                  />
                </div>
                  <div className={`absolute top-[280px] left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-blue-600/95 to-purple-600/95 text-white px-6 py-4 rounded-lg shadow-2xl transition-all duration-500 z-[60] min-w-[300px] backdrop-blur-sm ${activeTeacherCard === 3 ? 'opacity-100' : 'opacity-0'}`}>
                    <h4 className="font-bold text-lg mb-2 text-center">Class Analysis</h4>
                    <p className="text-white/90 text-sm text-center">View chapter and topic-wise performance of the entire class.</p>
                  </div>
                <div className="p-3 text-center">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Class Analysis</h4>
                  <p className="text-sm text-gray-600">View chapter and topic-wise performance of the entire class.</p>
                </div>
              </Card>
              
              <Card hover glow delay={0.4} className="overflow-visible p-0 group relative cursor-pointer" onClick={() => setActiveTeacherCard(activeTeacherCard === 4 ? null : 4)}>
                <div className="relative h-48 w-full bg-slate-800 overflow-visible">
                  <Image 
                    src="/merged-performance-analysis.png" 
                    alt="Student Analysis" 
                    fill 
                    className={`object-contain p-2 transition-all duration-500 ease-in-out ${activeTeacherCard === 4 ? 'scale-[2.5] z-50 shadow-2xl rounded-lg' : ''}`}
                  />
                </div>
                  <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gradient-to-br from-blue-600/95 to-purple-600/95 text-white px-6 py-4 rounded-lg shadow-2xl transition-all duration-500 z-[60] min-w-[300px] backdrop-blur-sm ${activeTeacherCard === 4 ? 'opacity-100' : 'opacity-0'}`}>
                    <h4 className="font-bold text-lg mb-2 text-center">Student Analysis</h4>
                    <p className="text-white/90 text-sm text-center">Access detailed analysis for each student including gap analysis.</p>
                  </div>
                <div className="p-3 text-center">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Student Analysis</h4>
                  <p className="text-sm text-gray-600">Access detailed analysis for each student including gap analysis.</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-rendering-fix leading-tight">
              Start Your Learning Journey Today
            </h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-rendering-fix opacity-90">
              Join Smart Learners.ai and experience the future of education with 
              AI-powered personalized learning that adapts to your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="xl" icon={<FaArrowRight />}>
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