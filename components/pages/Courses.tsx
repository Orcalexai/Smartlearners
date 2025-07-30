'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { FaFlask, FaCalculator, FaGlobe, FaLanguage, FaDesktop, FaRocket, FaGraduationCap, FaClock, FaBell } from 'react-icons/fa'

const Courses = () => {
  const [selectedClass, setSelectedClass] = useState('all')
  const [selectedSubject, setSelectedSubject] = useState('all')
  
  const courses = [
    // Class 6 Courses
    {
      id: 1,
      title: 'Mathematics',
      class: '6',
      subject: 'mathematics',
      icon: <FaCalculator className="text-3xl" />,
      description: 'Foundation Mathematics for Class 6 with interactive problem solving',
      topics: ['Number System', 'Basic Geometry', 'Integers', 'Fractions'],
      color: 'from-blue-500 to-indigo-600',
      available: true
    },
    {
      id: 2,
      title: 'Physics',
      class: '6',
      subject: 'physics',
      icon: <FaRocket className="text-3xl" />,
      description: 'Introduction to Physics concepts for Class 6 students',
      topics: ['Motion', 'Light', 'Sound', 'Simple Machines'],
      color: 'from-green-500 to-teal-600',
      available: false
    },
    {
      id: 3,
      title: 'Chemistry',
      class: '6',
      subject: 'chemistry',
      icon: <FaFlask className="text-3xl" />,
      description: 'Basic Chemistry concepts and experiments for Class 6',
      topics: ['Matter', 'Elements', 'Compounds', 'Mixtures'],
      color: 'from-yellow-500 to-orange-600',
      available: false
    },
    // Class 7 Courses
    {
      id: 4,
      title: 'Mathematics',
      class: '7',
      subject: 'mathematics',
      icon: <FaCalculator className="text-3xl" />,
      description: 'Intermediate Mathematics for Class 7 with conceptual clarity',
      topics: ['Integers', 'Rational Numbers', 'Lines and Angles', 'Triangles'],
      color: 'from-blue-500 to-indigo-600',
      available: true
    },
    {
      id: 5,
      title: 'Physics',
      class: '7',
      subject: 'physics',
      icon: <FaRocket className="text-3xl" />,
      description: 'Building Physics concepts for Class 7 with practical examples',
      topics: ['Heat', 'Motion and Time', 'Electric Current', 'Winds and Storms'],
      color: 'from-green-500 to-teal-600',
      available: false
    },
    {
      id: 6,
      title: 'Chemistry',
      class: '7',
      subject: 'chemistry',
      icon: <FaFlask className="text-3xl" />,
      description: 'Chemistry fundamentals for Class 7 with lab experiments',
      topics: ['Acids and Bases', 'Physical and Chemical Changes', 'Weather', 'Soil'],
      color: 'from-yellow-500 to-orange-600',
      available: false
    },
    // Class 8 Courses
    {
      id: 7,
      title: 'Mathematics',
      class: '8',
      subject: 'mathematics',
      icon: <FaCalculator className="text-3xl" />,
      description: 'Advanced foundation Mathematics for Class 8 students',
      topics: ['Rational Numbers', 'Linear Equations', 'Quadrilaterals', 'Data Handling'],
      color: 'from-blue-500 to-indigo-600',
      available: true
    },
    {
      id: 8,
      title: 'Physics',
      class: '8',
      subject: 'physics',
      icon: <FaRocket className="text-3xl" />,
      description: 'Intermediate Physics concepts for Class 8 with applications',
      topics: ['Force and Pressure', 'Friction', 'Sound', 'Chemical Effects'],
      color: 'from-green-500 to-teal-600',
      available: false
    },
    {
      id: 9,
      title: 'Chemistry',
      class: '8',
      subject: 'chemistry',
      icon: <FaFlask className="text-3xl" />,
      description: 'Essential Chemistry topics for Class 8 students',
      topics: ['Synthetic Fibres', 'Materials', 'Combustion', 'Chemical Effects'],
      color: 'from-yellow-500 to-orange-600',
      available: false
    },
    // Class 9 Courses
    {
      id: 10,
      title: 'Mathematics',
      class: '9',
      subject: 'mathematics',
      icon: <FaCalculator className="text-3xl" />,
      description: 'Pre-board Mathematics for Class 9 with exam preparation',
      topics: ['Number Systems', 'Polynomials', 'Coordinate Geometry', 'Statistics'],
      color: 'from-blue-500 to-indigo-600',
      available: true
    },
    {
      id: 11,
      title: 'Physics',
      class: '9',
      subject: 'physics',
      icon: <FaRocket className="text-3xl" />,
      description: 'Foundation Physics for Class 9 with problem-solving approach',
      topics: ['Motion', 'Force and Laws', 'Gravitation', 'Work and Energy'],
      color: 'from-green-500 to-teal-600',
      available: false
    },
    {
      id: 12,
      title: 'Chemistry',
      class: '9',
      subject: 'chemistry',
      icon: <FaFlask className="text-3xl" />,
      description: 'Core Chemistry concepts for Class 9 students',
      topics: ['Matter', 'Atoms and Molecules', 'Structure of Atom', 'Natural Resources'],
      color: 'from-yellow-500 to-orange-600',
      available: false
    },
    // Class 10 Courses
    {
      id: 13,
      title: 'Mathematics',
      class: '10',
      subject: 'mathematics',
      icon: <FaCalculator className="text-3xl" />,
      description: 'Complete NCERT Mathematics syllabus with problem-solving techniques',
      topics: ['Real Numbers', 'Polynomials', 'Linear Equations', 'Quadratic Equations'],
      color: 'from-blue-500 to-indigo-600',
      available: true
    },
    {
      id: 14,
      title: 'Physics',
      class: '10',
      subject: 'physics',
      icon: <FaRocket className="text-3xl" />,
      description: 'Board exam Physics with practical applications and numericals',
      topics: ['Light', 'Electricity', 'Magnetic Effects', 'Energy Management'],
      color: 'from-green-500 to-teal-600',
      available: false
    },
    {
      id: 15,
      title: 'Chemistry',
      class: '10',
      subject: 'chemistry',
      icon: <FaFlask className="text-3xl" />,
      description: 'Complete Chemistry syllabus for Class 10 board exams',
      topics: ['Chemical Reactions', 'Acids and Bases', 'Metals', 'Carbon Compounds'],
      color: 'from-yellow-500 to-orange-600',
      available: false
    },
    // Class 11 Courses
    {
      id: 16,
      title: 'Mathematics',
      class: '11',
      subject: 'mathematics',
      icon: <FaCalculator className="text-3xl" />,
      description: 'Higher secondary Mathematics with JEE foundation',
      topics: ['Sets', 'Relations', 'Trigonometry', 'Binomial Theorem'],
      color: 'from-blue-500 to-indigo-600',
      available: true
    },
    {
      id: 17,
      title: 'Physics',
      class: '11',
      subject: 'physics',
      icon: <FaRocket className="text-3xl" />,
      description: 'Advanced Physics for Class 11 with JEE preparation focus',
      topics: ['Kinematics', 'Laws of Motion', 'Waves', 'Thermodynamics'],
      color: 'from-green-500 to-teal-600',
      available: false
    },
    {
      id: 18,
      title: 'Chemistry',
      class: '11',
      subject: 'chemistry',
      icon: <FaFlask className="text-3xl" />,
      description: 'Comprehensive Chemistry for Class 11 students',
      topics: ['Atomic Structure', 'Chemical Bonding', 'States of Matter', 'Organic Chemistry'],
      color: 'from-yellow-500 to-orange-600',
      available: false
    },
    // Class 12 Courses
    {
      id: 19,
      title: 'Mathematics',
      class: '12',
      subject: 'mathematics',
      icon: <FaCalculator className="text-3xl" />,
      description: 'Advanced Mathematics with JEE preparation focus',
      topics: ['Calculus', 'Vectors', '3D Geometry', 'Probability'],
      color: 'from-blue-500 to-indigo-600',
      available: true
    },
    {
      id: 20,
      title: 'Physics',
      class: '12',
      subject: 'physics',
      icon: <FaRocket className="text-3xl" />,
      description: 'Conceptual Physics with numerical problem solving for boards and JEE',
      topics: ['Electrostatics', 'Current Electricity', 'Optics', 'Modern Physics'],
      color: 'from-green-500 to-teal-600',
      available: false
    },
    {
      id: 21,
      title: 'Chemistry',
      class: '12',
      subject: 'chemistry',
      icon: <FaFlask className="text-3xl" />,
      description: 'Organic, Inorganic, and Physical Chemistry mastery',
      topics: ['Solid State', 'Solutions', 'Electrochemistry', 'Organic Compounds'],
      color: 'from-yellow-500 to-orange-600',
      available: false
    },
    // JEE Mains Courses for Class 11
    {
      id: 22,
      title: 'JEE Mathematics',
      class: '11',
      subject: 'jee',
      icon: <FaCalculator className="text-3xl" />,
      description: 'Advanced Mathematics for JEE Mains preparation - Class 11 level',
      topics: ['Calculus', 'Algebra', 'Coordinate Geometry', 'Trigonometry'],
      color: 'from-blue-600 to-purple-600',
      available: true
    },
    {
      id: 23,
      title: 'JEE Physics',
      class: '11',
      subject: 'jee',
      icon: <FaRocket className="text-3xl" />,
      description: 'Physics preparation for JEE Mains - Class 11 level',
      topics: ['Mechanics', 'Thermodynamics', 'Waves', 'Kinematics'],
      color: 'from-red-500 to-pink-600',
      available: false
    },
    {
      id: 24,
      title: 'JEE Chemistry',
      class: '11',
      subject: 'jee',
      icon: <FaFlask className="text-3xl" />,
      description: 'Chemistry for JEE Mains preparation - Class 11 level',
      topics: ['Physical Chemistry', 'Organic Chemistry', 'Inorganic Chemistry', 'Atomic Structure'],
      color: 'from-yellow-500 to-red-600',
      available: false
    },
    // JEE Mains Courses for Class 12
    {
      id: 25,
      title: 'JEE Mathematics',
      class: '12',
      subject: 'jee',
      icon: <FaCalculator className="text-3xl" />,
      description: 'Advanced Mathematics for JEE Mains preparation - Class 12 level',
      topics: ['Integration', 'Differential Equations', '3D Geometry', 'Probability'],
      color: 'from-blue-600 to-purple-600',
      available: true
    },
    {
      id: 26,
      title: 'JEE Physics',
      class: '12',
      subject: 'jee',
      icon: <FaRocket className="text-3xl" />,
      description: 'Physics preparation for JEE Mains - Class 12 level',
      topics: ['Electromagnetism', 'Optics', 'Modern Physics', 'Electromagnetic Induction'],
      color: 'from-red-500 to-pink-600',
      available: false
    },
    {
      id: 27,
      title: 'JEE Chemistry',
      class: '12',
      subject: 'jee',
      icon: <FaFlask className="text-3xl" />,
      description: 'Chemistry for JEE Mains preparation - Class 12 level',
      topics: ['Electrochemistry', 'Chemical Kinetics', 'Coordination Compounds', 'Biomolecules'],
      color: 'from-yellow-500 to-red-600',
      available: false
    },
    // JEE Mains Complete Courses
    {
      id: 28,
      title: 'JEE Mains Mathematics',
      class: 'JEE',
      subject: 'jee',
      icon: <FaCalculator className="text-3xl" />,
      description: 'Complete Mathematics for JEE Mains with extensive practice problems',
      topics: ['Calculus', 'Algebra', 'Coordinate Geometry', 'Trigonometry'],
      color: 'from-blue-600 to-purple-600',
      available: true
    },
    {
      id: 29,
      title: 'JEE Mains Physics',
      class: 'JEE',
      subject: 'jee',
      icon: <FaRocket className="text-3xl" />,
      description: 'Complete Physics preparation for JEE Mains with advanced problem solving',
      topics: ['Mechanics', 'Thermodynamics', 'Electromagnetism', 'Modern Physics'],
      color: 'from-red-500 to-pink-600',
      available: false
    },
    {
      id: 30,
      title: 'JEE Mains Chemistry',
      class: 'JEE',
      subject: 'jee',
      icon: <FaFlask className="text-3xl" />,
      description: 'Comprehensive Chemistry for JEE Mains with organic and inorganic focus',
      topics: ['Physical Chemistry', 'Organic Chemistry', 'Inorganic Chemistry', 'Numerical Problems'],
      color: 'from-yellow-500 to-red-600',
      available: false
    },
    {
      id: 31,
      title: 'JEE Mains Complete Package',
      class: 'JEE',
      subject: 'jee',
      icon: <FaGraduationCap className="text-3xl" />,
      description: 'All-in-one JEE Mains preparation with mock tests and personalized study plans',
      topics: ['All Subjects', 'Mock Tests', 'Previous Year Papers', 'Study Plans'],
      color: 'from-indigo-600 to-purple-700',
      available: false
    }
  ]
  
  const classes = ['all', '6', '7', '8', '9', '10', '11', '12', 'JEE']
  const subjects = ['all', 'mathematics', 'physics', 'chemistry', 'jee']
  
  const filteredCourses = courses.filter(course => {
    const classMatch = selectedClass === 'all' || course.class === selectedClass
    
    // Special handling for JEE class selection
    if (selectedClass === 'JEE') {
      if (selectedSubject === 'all') {
        // JEE + All Subjects: Show all JEE courses (Class 11, 12, and JEE)
        return course.subject === 'jee'
      } else if (selectedSubject === 'jee') {
        // JEE + JEE Subject: Show only standalone JEE courses
        return course.class === 'JEE' && course.subject === 'jee'
      } else if (['mathematics', 'physics', 'chemistry'].includes(selectedSubject)) {
        // JEE + specific subject: Show Class 11 and 12 JEE courses for that subject
        const subjectKeywords: Record<string, string[]> = {
          'mathematics': ['mathematics', 'math'],
          'physics': ['physics'],
          'chemistry': ['chemistry']
        }
        const keywords = subjectKeywords[selectedSubject as keyof typeof subjectKeywords] || []
        return course.subject === 'jee' && ['11', '12'].includes(course.class) && 
               keywords.some(keyword => course.title.toLowerCase().includes(keyword))
      }
      return false
    }
    
    // Special handling for JEE subject selection with other classes
    if (selectedSubject === 'jee') {
      // For classes 6-10: Don't show any JEE courses (they should see "coming soon" message)
      if (selectedClass !== 'all' && ['6', '7', '8', '9', '10'].includes(selectedClass)) {
        return false
      }
      // For classes 11-12: Show JEE courses for those classes
      if (['11', '12'].includes(selectedClass)) {
        return course.class === selectedClass && course.subject === 'jee'
      }
      // For 'all' classes: Show all JEE courses
      if (selectedClass === 'all') {
        return course.subject === 'jee'
      }
      return false
    }
    
    // Regular subject filtering (excluding JEE courses from regular subjects)
    const subjectMatch = selectedSubject === 'all' || course.subject === selectedSubject
    const notJeeCourse = course.subject !== 'jee'
    
    return classMatch && subjectMatch && notJeeCourse
  })
  
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
              Our <span className="gradient-text">Courses</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive CBSE NCERT curriculum coverage with AI-powered learning 
              for Classes 6-12 in Mathematics, Physics & Chemistry plus specialized JEE Mains preparation. Choose your class and subject to get started.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full">
                <FaCalculator className="mr-2" />
                <span className="font-medium">10 Mathematics Courses Available</span>
              </div>
              <div className="flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full">
                <FaClock className="mr-2" />
                <span className="font-medium">21 Physics & Chemistry Coming Soon</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <section className="py-12 bg-white sticky top-16 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Class
              </label>
              <div className="flex flex-wrap gap-2">
                {classes.map(cls => (
                  <button
                    key={cls}
                    onClick={() => setSelectedClass(cls)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedClass === cls
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {cls === 'all' ? 'All Classes' : cls === 'JEE' ? 'JEE Mains' : `Class ${cls}`}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Subject
              </label>
              <div className="flex flex-wrap gap-2">
                {subjects.map(subject => (
                  <button
                    key={subject}
                    onClick={() => setSelectedSubject(subject)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all capitalize ${
                      selectedSubject === subject
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {subject === 'all' ? 'All Subjects' : subject === 'jee' ? 'JEE Mains' : subject}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card hover className={`h-full flex flex-col relative ${!course.available ? 'opacity-90' : ''}`}>
                  {!course.available && (
                    <div className="absolute top-3 left-3 z-10">
                      <span className="inline-flex items-center px-2 py-1 bg-orange-500 text-white text-xs font-medium rounded-full">
                        <FaClock className="mr-1" />
                        Coming Soon
                      </span>
                    </div>
                  )}
                  
                  <div className={`bg-gradient-to-r ${course.color} text-white p-4 rounded-t-lg -m-6 mb-4 ${!course.available ? 'opacity-75' : ''}`}>
                    <div className="flex items-center justify-between">
                      {course.icon}
                      <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                        {course.class === 'JEE' ? 'JEE Mains' : `Class ${course.class}`}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-2 ${course.available ? 'text-gray-900' : 'text-gray-600'}`}>
                    {course.title}
                  </h3>
                  <p className={`mb-4 ${course.available ? 'text-gray-600' : 'text-gray-500'}`}>
                    {course.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className={`font-semibold mb-2 ${course.available ? 'text-gray-900' : 'text-gray-600'}`}>
                      Key Topics:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {course.topics.map((topic, idx) => (
                        <span
                          key={idx}
                          className={`text-xs px-2 py-1 rounded-full ${
                            course.available 
                              ? 'bg-purple-100 text-purple-700' 
                              : 'bg-gray-100 text-gray-500'
                          }`}
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {!course.available && (
                    <div className="mb-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                      <div className="flex items-center justify-center text-orange-700">
                        <FaBell className="mr-2 text-sm" />
                        <span className="font-medium text-sm">Coming Soon</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-auto">
                    {course.available ? (
                      <Button className="w-full" href="https://app1.aieducator.com/">Start Learning</Button>
                    ) : (
                      <Button 
                        variant="outline" 
                        className="w-full opacity-60 cursor-not-allowed"
                        onClick={() => {}}
                      >
                        <FaClock className="mr-2" />
                        Notify Me
                      </Button>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          {filteredCourses.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              {selectedSubject === 'jee' && selectedClass !== 'all' && ['6', '7', '8', '9', '10'].includes(selectedClass) ? (
                <div className="max-w-2xl mx-auto">
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-8 mb-6">
                    <FaClock className="text-4xl text-orange-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-orange-800 mb-3">JEE Preparation Coming Soon!</h3>
                    <p className="text-orange-700 text-lg mb-4">
                      JEE Mains preparation courses for Class {selectedClass} are currently under development.
                    </p>
                    <p className="text-gray-600">
                      JEE preparation is available for <strong>Class 11 & 12</strong> students. 
                      For now, focus on strengthening your foundation with our regular Mathematics, Physics, and Chemistry courses.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      variant="outline" 
                      onClick={() => setSelectedSubject('mathematics')}
                      className="text-blue-600 border-blue-600 hover:bg-blue-50"
                    >
                      <FaCalculator className="mr-2" />
                      Try Mathematics
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => setSelectedSubject('all')}
                      className="text-purple-600 border-purple-600 hover:bg-purple-50"
                    >
                      View All Subjects
                    </Button>
                  </div>
                </div>
              ) : null}
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
              Be the first to know when your favorite subjects launch. We'll send you early access 
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
          
          <div className="text-center">
            <Button size="lg" className="mr-4">
              <FaBell className="mr-2" />
              Join Waitlist
            </Button>
            <Button variant="outline" size="lg" href="https://app1.aieducator.com/">
              Request a Course
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Courses