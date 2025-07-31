'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { 
  FaBrain, 
  FaChartLine, 
  FaRobot, 
  FaCertificate, 
  FaBookOpen, 
  FaUserGraduate,
  FaLightbulb,
  FaCrosshairs,
  FaMobile,
  FaCloud
} from 'react-icons/fa'

const Features = () => {
  const mainFeatures = [
    {
      icon: <FaBrain className="text-5xl text-purple-600" />,
      title: 'AI-Powered Tutoring',
      description: 'Get personalized guidance from our AI tutor that adapts to your learning style and pace.',
      details: [
        'Instant doubt resolution',
        'Adaptive questioning',
        'Personalized explanations',
        '24/7 availability'
      ]
    },
    {
      icon: <FaChartLine className="text-5xl text-pink-600" />,
      title: 'Learning Analytics',
      description: 'Track your progress with detailed analytics and insights into your learning patterns.',
      details: [
        'Performance tracking',
        'Weakness identification',
        'Progress visualization',
        'Learning recommendations'
      ]
    },
    {
      icon: <FaCrosshairs className="text-5xl text-indigo-600" />,
      title: 'Gap Analysis',
      description: 'Identify knowledge gaps and get targeted content to strengthen your weak areas.',
      details: [
        'Skill gap identification',
        'Targeted practice',
        'Adaptive content delivery',
        'Remedial learning paths'
      ]
    },
    {
      icon: <FaRobot className="text-5xl text-purple-600" />,
      title: 'Smart Answer Correction',
      description: 'Get instant feedback on your answers with AI-powered correction and suggestions.',
      details: [
        'Instant feedback',
        'Step-by-step solutions',
        'Alternative approaches',
        'Error pattern analysis'
      ]
    }
  ]
  
  const additionalFeatures = [
    {
      icon: <FaBookOpen className="text-3xl text-purple-600" />,
      title: 'Complete NCERT Coverage',
      description: 'Full CBSE syllabus for Classes 6-12'
    },
    {
      icon: <FaUserGraduate className="text-3xl text-pink-600" />,
      title: 'JEE Preparation',
      description: '5,000+ JEE questions with solutions'
    },
    // {
    //   icon: <FaCertificate className="text-3xl text-indigo-600" />,
    //   title: 'Certificates',
    //   description: 'Earn certificates on course completion'
    // },
    {
      icon: <FaLightbulb className="text-3xl text-yellow-600" />,
      title: 'Concept Clarity',
      description: 'Visual explanations for complex topics'
    },
    {
      icon: <FaMobile className="text-3xl text-green-600" />,
      title: 'Mobile Friendly',
      description: 'Learn anywhere, anytime on any device'
    },
    {
      icon: <FaCloud className="text-3xl text-blue-600" />,
      title: 'Cloud Sync',
      description: 'Your progress syncs across all devices'
    }
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
              Powerful <span className="gradient-text">Features</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the advanced AI-powered features that make Smart Learners.ai 
              the most effective learning platform for CBSE students.
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card hover className="h-full">
                  <div className="flex flex-col lg:flex-row items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
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
              Additional <span className="gradient-text">Benefits</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              More features that enhance your learning experience
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card hover className="text-center h-full">
                  <div className="mb-4 p-3 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl w-fit mx-auto">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Experience the Future of Learning
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Our AI-powered platform doesn't just teach - it understands how you learn 
                and adapts to help you succeed. Join thousands of students who are already 
                experiencing the benefits of personalized education.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Proven 95% score improvement rate</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Trusted by 10,000+ students</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Complete CBSE NCERT coverage</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Card glass className="p-8">
                <FaBrain className="text-8xl text-white mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-purple-100 mb-6">
                  Experience the power of AI-driven learning today
                </p>
                <Button className='mx-auto' variant="secondary" size="lg" href="https://app1.aieducator.com/">
                  Start Free Trial
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features