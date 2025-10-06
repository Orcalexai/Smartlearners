'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { FaPenAlt, FaFileAlt, FaClipboardCheck, FaCheckCircle } from 'react-icons/fa'

const Features = () => {
  const mainFeatures = [
    {
      icon: <span className="text-5xl">✅</span>,
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
      icon: <span className="text-5xl">✍️</span>,
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
      icon: (
        <div className="relative">
          <FaFileAlt className="text-5xl text-blue-600" />
          <FaPenAlt className="text-3xl text-indigo-600 absolute -bottom-1 -right-1" />
        </div>
      ),
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
      icon: (
        <div className="relative">
          <FaClipboardCheck className="text-5xl text-green-600" />
          <FaCheckCircle className="text-2xl text-emerald-500 absolute -bottom-1 -right-1 bg-white rounded-full" />
        </div>
      ),
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
      icon: <span className="text-5xl">🤖</span>,
      title: 'Student Chatbot',
      description: 'Your personal study companion — ask, learn, and track your progress.',
      details: [
        'Ask for weak chapters',
        'Get past test performance',
        'Request any solution instantly',
        'Available 24/7 for guidance'
      ]
    },
    {
      icon: (
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-sm font-bold text-yellow-600">1</div>
            <div className="h-4 w-12 bg-gradient-to-r from-yellow-400 to-yellow-300" style={{clipPath: 'polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%)'}}></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-sm font-bold text-green-600">2</div>
            <div className="h-4 w-12 bg-gradient-to-r from-green-400 to-green-300" style={{clipPath: 'polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%)'}}></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-sm font-bold text-teal-600">3</div>
            <div className="h-4 w-12 bg-gradient-to-r from-teal-400 to-teal-300" style={{clipPath: 'polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%)'}}></div>
          </div>
        </div>
      ),
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
      icon: <span className="text-5xl">📚</span>,
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
      icon: <span className="text-5xl">🔄</span>,
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
                <Card hover className={`h-full border-2 ${
                  index % 4 === 0 ? 'bg-gradient-to-br from-blue-100 via-sky-100 to-blue-50 border-blue-400' :
                  index % 4 === 1 ? 'bg-gradient-to-br from-green-100 via-emerald-100 to-green-50 border-green-400' :
                  index % 4 === 2 ? 'bg-gradient-to-br from-purple-100 via-violet-100 to-purple-50 border-purple-400' :
                  'bg-gradient-to-br from-orange-100 via-amber-100 to-orange-50 border-orange-400'
                }`}>
                  <div className="flex flex-col lg:flex-row items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="p-4 bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center min-w-[80px] min-h-[80px]">
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
      
    </div>
  )
}

export default Features