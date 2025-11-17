'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight, FaCheckCircle } from 'react-icons/fa'

const Features = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const carouselFeatures = [
    // 1. SELF STUDY (01)
    {
      title: 'Self-Study Learning Cycle',
      subtitle: 'SmartLearners.ai makes students independent learners.',
      icon: '🔄',
      number: '01',
      videoPlaceholder: '/self study.mp4',
      benefits: [
        'Write exam/homework and upload it to SmartLearners.ai',
        'AI evaluates answers and shows mistakes, marks, and concepts needed',
        'Ask Chatbot for previous performance and remedial program',
        'Practice questions from weak chapters',
        'Get step-by-step solutions with concepts and videos',
        'Continue practicing more questions',
      ],
      whyItHelps: [
        '• No tuition needed',
        '• Real Understanding',
        '• Continuous improvement with personalized feedback'
      ],
      gradient: 'from-indigo-500 via-blue-500 to-sky-500',
      accentColor: 'indigo'
    },
    // 2. CHATBOT (02)
    {
      title: 'Smart AI Chatbot (24×7 Tutor)',
      subtitle: 'Students can ask anything, anytime:',
      icon: '🤖',
      number: '02',
      videoPlaceholder: '/feature-video-5.mp4',
      benefits: [
        'Check my homework',
        'Give exam analysis',
        'What are my weak areas?',
        'Give a remedial plan for these chapters',
        'Explain this concept with real examples',
        'Give step-by-step solution for this question'
      ],
      whyItHelps: 'A personal teacher available any time.',
      gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
      accentColor: 'violet'
    },
    // 3. AI-CORRECTION (03)
    {
      title: 'AI-Correction (Handwritten Answers)',
      subtitle: 'Students upload their handwritten answers directly. The AI instantly evaluates the response and provides:',
      icon: '✅',
      number: '03',
      videoPlaceholder: '/ai-correction-demo.mp4',
      benefits: [
        'Corrected solution with proper steps',
        'Instant marks',
        'Mistake identification (calculation / conceptual / presentation)',
        'Concepts required for the question',
        'Gap analysis showing exactly where they went wrong'
      ],
      whyItHelps: 'Instant learning — instant correction. No waiting for manual checking. Students improve faster with step-by-step feedback.',
      gradient: 'from-emerald-500 via-green-500 to-teal-500',
      accentColor: 'emerald'
    },
    // 4. EXAM CORRECTION (04)
    {
      title: 'Exam Correction (AI Auto-Evaluation)',
      subtitle: 'SmartLearners.ai completely automates exam correction.',
      icon: '✅',
      number: '04',
      videoPlaceholder: '/feature-video-1.mp4',
      benefits: [
        'Upload handwritten answer sheets',
        'AI reads every line',
        'Shows the exact line where the mistake happened',
        'Provides correct method + steps',
        'Shows marks scored, missed steps, and concepts to improve'
      ],
      whyItHelps: 'Students know exactly what went wrong — not just the final result.',
      gradient: 'from-purple-500 via-pink-500 to-red-500',
      accentColor: 'purple'
    },
    // 5. PARENTAL WHATSAPP (05)
    {
      title: 'WhatsApp Reports for Parents',
      subtitle: 'Parents can simply text on WhatsApp anytime, 24/7, and instantly view the child\'s complete performance.',
      icon: '📱',
      number: '05',
      videoPlaceholder: '/feature-video-2.mp4',
      benefits: [
        'Chapter-wise score',
        'Overall exam performance',
        'Weak concepts & areas to improve',
        'Exam-wise & homework-wise progress',
        'Marks and accuracy of homework & classwork'
      ],
      whyItHelps: 'No need to open the app — parents just send a WhatsApp message and get a clear, instant report of their child\'s progress.',
      gradient: 'from-blue-500 via-indigo-500 to-purple-500',
      accentColor: 'blue'
    },
    // 6. PROGRESS ANALYSIS (06)
    {
      title: 'Progress Analysis',
      subtitle: 'SmartLearners.ai tracks learning like a personal coach:',
      icon: '📊',
      number: '06',
      videoPlaceholder: '/feature-video-4.mp4',
      benefits: [
        'Day-wise improvement',
        'Chapter-wise progress',
        'Mistake progress, error analysis',
        'Which concepts are strong & weak',
        'Accuracy trend of every exam and homework',
        'Whether mistakes are due to calculation or concept'
      ],
      whyItHelps: 'Students always know where they stand and how fast they are improving.',
      gradient: 'from-orange-500 via-amber-500 to-yellow-500',
      accentColor: 'orange'
    },
    // 7. AUTO-CORRECTION (07)
    {
      title: 'Auto-Correction of Homework & Classwork',
      subtitle: 'Teachers can assign homework or classwork.',
      icon: '✅',
      number: '07',
      videoPlaceholder: '/feature-video-3.mp4',
      benefits: [
        'Student uploads handwritten answers',
        'System auto-corrects',
        'Gives marks instantly',
        'Teacher can see results for the entire class',
        'Students get corrections with proper steps'
      ],
      whyItHelps: 'No waiting for correction — instant learning, instant feedback.',
      gradient: 'from-green-500 via-teal-500 to-cyan-500',
      accentColor: 'green'
    },
    // 8. WORKSHEETS & CUSTOM QUESTIONS (08)
    {
      title: 'Worksheets & Custom Questions',
      subtitle: 'Teachers can create their own questions and assignments inside SmartLearners.ai.',
      icon: '📝',
      number: '08',
      videoPlaceholder: '/feature-video-6.mp4',
      benefits: [
        'Create custom worksheets',
        'Assign for homework or classwork',
        'Students can also use these worksheets for extra practice'
      ],
      whyItHelps: 'Complete flexibility for teachers to customize learning materials according to their teaching style and student needs.',
      gradient: 'from-pink-500 via-rose-500 to-red-500',
      accentColor: 'pink'
    }
  ]

  const nextFeature = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselFeatures.length)
  }

  const prevFeature = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselFeatures.length) % carouselFeatures.length)
  }

  const goToFeature = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="pt-8 pb-4 bg-gradient-to-br from-purple-50 to-pink-50">
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

      {/* Interactive Carousel Section */}
      <section className="pt-4 pb-16 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className={`absolute inset-0 bg-gradient-to-br ${carouselFeatures[currentIndex].gradient} opacity-10 transition-all duration-1000`}></div>
          <motion.div
            className="absolute top-20 -left-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
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
            className="absolute bottom-20 -right-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative"
              >
                {/* Main Card Container */}
                <div className={`bg-gradient-to-br from-white via-white to-gray-50/30 rounded-3xl shadow-2xl p-8 lg:p-12 backdrop-blur-sm border-2 relative overflow-hidden`}
                  style={{
                    borderImage: `linear-gradient(135deg, ${
                      currentIndex === 0 ? '#10b981, #14b8a6' :
                      currentIndex === 1 ? '#8b5cf6, #d946ef' :
                      currentIndex === 2 ? '#3b82f6, #8b5cf6' :
                      currentIndex === 3 ? '#a855f7, #ec4899' :
                      currentIndex === 4 ? '#6366f1, #0ea5e9' :
                      currentIndex === 5 ? '#f97316, #fbbf24' :
                      currentIndex === 6 ? '#22c55e, #06b6d4' :
                      '#ec4899, #ef4444'
                    }) 1`,
                    boxShadow: `0 20px 60px -15px ${
                      currentIndex === 0 ? 'rgba(16, 185, 129, 0.3)' :
                      currentIndex === 1 ? 'rgba(139, 92, 246, 0.3)' :
                      currentIndex === 2 ? 'rgba(59, 130, 246, 0.3)' :
                      currentIndex === 3 ? 'rgba(168, 85, 247, 0.3)' :
                      currentIndex === 4 ? 'rgba(99, 102, 241, 0.3)' :
                      currentIndex === 5 ? 'rgba(249, 115, 22, 0.3)' :
                      currentIndex === 6 ? 'rgba(34, 197, 94, 0.3)' :
                      'rgba(236, 72, 153, 0.3)'
                    }`
                  }}
                >
                  {/* Enhanced gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${carouselFeatures[currentIndex].gradient} opacity-[0.08] -z-10`}></div>

                  {/* Decorative corner accent */}
                  <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${carouselFeatures[currentIndex].gradient} opacity-20 rounded-bl-full blur-2xl`}></div>

                  {/* Bottom left accent */}
                  <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${carouselFeatures[currentIndex].gradient} opacity-15 rounded-tr-full blur-xl`}></div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Side - Text Content */}
                    <div className="space-y-5">
                      <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-2 leading-tight">
                          {carouselFeatures[currentIndex].title}
                        </h2>
                      </div>

                      <p className="text-xl text-gray-700 leading-relaxed">
                        {carouselFeatures[currentIndex].subtitle}
                      </p>

                      <div className="space-y-3">
                        {carouselFeatures[currentIndex].benefits.map((benefit, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 + 0.3 }}
                            className="flex items-start gap-3"
                          >
                            <FaCheckCircle
                              className="mt-1 flex-shrink-0"
                              style={{
                                color: currentIndex === 0 ? '#10b981' :
                                  currentIndex === 1 ? '#8b5cf6' :
                                  currentIndex === 2 ? '#3b82f6' :
                                  currentIndex === 3 ? '#a855f7' :
                                  currentIndex === 4 ? '#6366f1' :
                                  currentIndex === 5 ? '#f97316' :
                                  currentIndex === 6 ? '#22c55e' :
                                  '#ec4899'
                              }}
                            />
                            <span className="text-gray-700 text-lg">{benefit}</span>
                          </motion.div>
                        ))}
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className={`relative p-6 rounded-xl border-l-4 shadow-md hover:shadow-xl transition-all duration-300`}
                        style={{
                          background: `linear-gradient(135deg, ${
                            currentIndex === 0 ? 'rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.05)' :
                            currentIndex === 1 ? 'rgba(139, 92, 246, 0.1), rgba(217, 70, 239, 0.05)' :
                            currentIndex === 2 ? 'rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.05)' :
                            currentIndex === 3 ? 'rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.05)' :
                            currentIndex === 4 ? 'rgba(99, 102, 241, 0.1), rgba(14, 165, 233, 0.05)' :
                            currentIndex === 5 ? 'rgba(249, 115, 22, 0.1), rgba(251, 191, 36, 0.05)' :
                            currentIndex === 6 ? 'rgba(34, 197, 94, 0.1), rgba(6, 182, 212, 0.05)' :
                            'rgba(236, 72, 153, 0.1), rgba(239, 68, 68, 0.05)'
                          })`,
                          borderLeftColor: currentIndex === 0 ? '#10b981' :
                            currentIndex === 1 ? '#8b5cf6' :
                            currentIndex === 2 ? '#3b82f6' :
                            currentIndex === 3 ? '#a855f7' :
                            currentIndex === 4 ? '#6366f1' :
                            currentIndex === 5 ? '#f97316' :
                            currentIndex === 6 ? '#22c55e' :
                            '#ec4899'
                        }}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${carouselFeatures[currentIndex].gradient} flex items-center justify-center shadow-lg`}>
                            <span className="text-white text-xl">💡</span>
                          </div>
                          <div>
                            <h3 className="font-bold text-lg text-gray-900 mb-2">How it helps:</h3>
                            <p className="text-gray-700 leading-relaxed">
                              {carouselFeatures[currentIndex].whyItHelps}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Right Side - Video/Animation Placeholder */}
                    <div className="relative">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className={`relative rounded-2xl shadow-xl p-6 border-2`}
                        style={{
                          background: `linear-gradient(135deg, ${
                            currentIndex === 0 ? 'rgba(16, 185, 129, 0.05), rgba(20, 184, 166, 0.02)' :
                            currentIndex === 1 ? 'rgba(139, 92, 246, 0.05), rgba(217, 70, 239, 0.02)' :
                            currentIndex === 2 ? 'rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.02)' :
                            currentIndex === 3 ? 'rgba(168, 85, 247, 0.05), rgba(236, 72, 153, 0.02)' :
                            currentIndex === 4 ? 'rgba(99, 102, 241, 0.05), rgba(14, 165, 233, 0.02)' :
                            currentIndex === 5 ? 'rgba(249, 115, 22, 0.05), rgba(251, 191, 36, 0.02)' :
                            currentIndex === 6 ? 'rgba(34, 197, 94, 0.05), rgba(6, 182, 212, 0.02)' :
                            'rgba(236, 72, 153, 0.05), rgba(239, 68, 68, 0.02)'
                          })`,
                          borderColor: currentIndex === 0 ? 'rgba(16, 185, 129, 0.2)' :
                            currentIndex === 1 ? 'rgba(139, 92, 246, 0.2)' :
                            currentIndex === 2 ? 'rgba(59, 130, 246, 0.2)' :
                            currentIndex === 3 ? 'rgba(168, 85, 247, 0.2)' :
                            currentIndex === 4 ? 'rgba(99, 102, 241, 0.2)' :
                            currentIndex === 5 ? 'rgba(249, 115, 22, 0.2)' :
                            currentIndex === 6 ? 'rgba(34, 197, 94, 0.2)' :
                            'rgba(236, 72, 153, 0.2)'
                        }}
                      >
                        {currentIndex === 0 ? (
                          // Actual video for Self-Study Learning Cycle feature (at index 0)
                          <div className="rounded-xl overflow-hidden">
                            <video
                              className="w-full h-auto rounded-xl"
                              style={{ maxHeight: '550px' }}
                              controls
                              autoPlay
                              muted
                              loop
                            >
                              <source src="/self study.mp4" type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        ) : currentIndex === 1 ? (
                          // Actual video for Smart AI Chatbot feature (at index 1)
                          <div className="rounded-xl overflow-hidden">
                            <video
                              className="w-full h-auto rounded-xl"
                              style={{ maxHeight: '550px' }}
                              controls
                              autoPlay
                              muted
                              loop
                            >
                              <source src="/chatbot-demo.mp4" type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        ) : currentIndex === 2 ? (
                          // Actual video for AI-Correction feature (at index 2)
                          <div className="rounded-xl overflow-hidden">
                            <video
                              className="w-full h-auto rounded-xl"
                              style={{ maxHeight: '550px' }}
                              controls
                              autoPlay
                              muted
                              loop
                            >
                              <source src="/ai-correction-demo.mp4" type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        ) : currentIndex === 3 ? (
                          // Actual video for Exam Correction feature (at index 3)
                          <div className="rounded-xl overflow-hidden">
                            <video
                              className="w-full h-auto rounded-xl"
                              style={{ maxHeight: '550px' }}
                              controls
                              autoPlay
                              muted
                              loop
                            >
                              <source src="/exam-correction-demo.mp4" type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        ) : currentIndex === 4 ? (
                          // Actual video for WhatsApp Reports for Parents feature (at index 4)
                          <div className="rounded-xl overflow-hidden">
                            <video
                              className="w-full h-auto rounded-xl"
                              style={{ maxHeight: '550px' }}
                              controls
                              autoPlay
                              muted
                              loop
                            >
                              <source src="/whatsapp-parental-demo.mp4" type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        ) : (
                          // Placeholder for other features
                          <div className="rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden aspect-video">
                            <div className="text-center">
                              <div className="text-6xl mb-4">🎥</div>
                              <p className="text-gray-600 font-medium">Video Demo Placeholder</p>
                              <p className="text-sm text-gray-500 mt-2">Add your video here</p>
                            </div>

                            {/* Animated shimmer effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                              animate={{
                                x: ['-100%', '100%']
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear"
                              }}
                            />
                          </div>
                        )}
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Decorative shadow blob */}
                <div className={`absolute -bottom-8 -right-8 w-96 h-96 bg-gradient-to-br ${carouselFeatures[currentIndex].gradient} rounded-full blur-3xl opacity-10 -z-10`}></div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevFeature}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 lg:-translate-x-20 bg-gradient-to-r ${carouselFeatures[currentIndex].gradient} text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 z-10 group hover:scale-110`}
              aria-label="Previous feature"
            >
              <FaChevronLeft className="text-2xl group-hover:scale-110 transition-transform" />
            </button>

            <button
              onClick={nextFeature}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 lg:translate-x-20 bg-gradient-to-r ${carouselFeatures[currentIndex].gradient} text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 z-10 group hover:scale-110`}
              aria-label="Next feature"
            >
              <FaChevronRight className="text-2xl group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {carouselFeatures.map((_, index) => (
              <button
                key={index}
                onClick={() => goToFeature(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-12 h-3 bg-gradient-to-r ' + carouselFeatures[currentIndex].gradient
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to feature ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Features