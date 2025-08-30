'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { 
  FaBrain, 
  FaChartLine, 
  FaRobot, 
  FaBookOpen, 
  FaUserGraduate,
  FaLightbulb,
  FaCheckCircle,
  FaSyncAlt,
  FaSchool,
  FaClipboardCheck,
  FaFileAlt,
  FaComments
} from 'react-icons/fa'

const Features = () => {
  const mainFeatures = [
    {
      icon: <span className="text-5xl">🤖</span>,
      title: 'Auto-Correct',
      description: 'Upload your answer and get instant AI-powered scoring and insights.',
      details: [
        'Instant score',
        'Mistake type: Calculation / Conceptual',
        'Concepts required explained',
        'Immediate feedback loop'
      ]
    },
    {
      icon: <span className="text-5xl">🏫</span>,
      title: 'Classwork & Homework',
      description: 'Assign, attempt, and track classwork and homework seamlessly.',
      details: [
        'Teachers assign from our app',
        'Students attempt directly or upload answers',
        'Notifications for pending work',
        'Easy submission tracking'
      ]
    },
    {
      icon: <span className="text-5xl">📘</span>,
      title: 'Worksheets (Custom Questions)',
      description: 'Create and attempt your own sets of questions tailored to your practice needs.',
      details: [
        'practice from custom worksheets',
        'Attempt teacher-assigned sets',
        'Practice focused topics',
        'Save & reuse worksheets'
      ]
    },
    {
      icon: <span className="text-5xl">📄</span>,
      title: 'Answer-Sheet Correction (HW & CW)',
      description: 'Scan or upload written work for AI + teacher review.',
      details: [
        'Auto-score with AI',
        'Mistake detection & categorization',
        'Faster grading and feedback',
        'Teachers can review the performance'
      ]
    },
    {
      icon: <span className="text-5xl">📊</span>,
      title: 'Performance Analysis',
      description: 'Track your learning journey with in-depth insights.',
      details: [
        'Chapter-wise accuracy',
        'Date-wise progress tracking',
        'Time spent trends',
        'Strengths & weaknesses overview'
      ]
    },
    {
      icon: <span className="text-5xl">💬</span>,
      title: 'Student Chatbot',
      description: 'Your personal study companion — ask, learn, and track your progress.',
      details: [
        'Ask for weak chapters',
        'Get past test performance',
        'Request any solution instantly',
        'Available 24/7 for guidance'
      ]
    }
    
    
    
  ]
  
  const additionalFeatures = [
    {
      icon: <span className="text-3xl">🧩</span>,
      title: 'Solve (Step-by-Step)',
      description: 'Understand solutions at your own pace with guided reveal-by-step learning.',
      details: [
        'Stepwise breakdown of answers',
        'Reveal next step when ready',
        'Clear explanations for each step',
        'Supports self-paced learning'
      ]
    },
    {
      icon: <span className="text-3xl">📚</span>,
      title: 'Concepts Required (in Solution)',
      description: 'Know the exact concepts behind every solution to strengthen fundamentals.',
      details: [
        'Lists all concepts used',
        'Highlights prerequisite knowledge',
        'Links to related topics',
        'Helps in targeted revision'
      ]
    },
    {
      icon: <span className="text-3xl">🔄</span>,
      title: 'Similar Questions',
      description: 'From any solution, click "Similar Questions" to practice variants instantly.',
      details: [
        'Auto-generate related problems',
        'Reinforce the same concept',
        'Increase mastery with practice',
        'Improve exam readiness'
      ]
    }
    
    
    
    
  ]
  
  return (
    <div className="min-h-screen pt-20">
      <section className="py-12 bg-gradient-to-br from-purple-50 to-pink-50">
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
              the most effective learning platform for students.
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className="py-8">
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
      
      <section className="py-8 bg-gray-50">
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
                <Card hover className="h-full">
                  <div className="text-center mb-4">
                    <div className="mb-4 p-3 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl w-fit mx-auto">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                  </div>
                  <ul className="space-y-2 text-left">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features