'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { FaUser, FaArrowRight, FaEye, FaEyeSlash } from 'react-icons/fa'
import toast, { Toaster } from 'react-hot-toast'

const FreeTrialForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    rollNumber: '',
    schoolName: '',
    className: '',
    sectionName: '',
    whatsappNumber: '',
    email: '',
    username: '',
    password: ''
  })

  const [showPassword, setShowPassword] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateForm = () => {
    if (!formData.fullName || !formData.rollNumber ||
        !formData.whatsappNumber || !formData.email || !formData.username || !formData.password) {
      toast.error('Please fill in all required fields')
      return false
    }
    if (!/^[0-9]{10}$/.test(formData.whatsappNumber)) {
      toast.error('Please enter a valid 10-digit WhatsApp number')
      return false
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error('Please enter a valid email address')
      return false
    }
    if (formData.password.length < 8) {
      toast.error('Password must be at least 8 characters long')
      return false
    }
    return true
  }

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        const payload = {
          fullname: formData.fullName,
          email: formData.email,
          username: formData.username,
          roll_number: formData.rollNumber,
          phone_number: formData.whatsappNumber,
          payment_done: false,
          password: formData.password,
          ...(formData.schoolName && { school_name: formData.schoolName }),
          ...(formData.className && { class_name: formData.className }),
          ...(formData.sectionName && { section_name: formData.sectionName })
        }

        console.log('Starting free trial registration...', payload)

        const response = await fetch('https://smartgen.smartlearners.ai/api/free-trial/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        })

        console.log('Registration response status:', response.status)

        if (!response.ok) {
          const errorData = await response.json()
          console.error('Registration error:', errorData)
          throw new Error(errorData.detail || errorData.error || 'Registration failed')
        }

        const data = await response.json()
        console.log('Registration successful:', data)

        if (data.success && data.status === 'success') {
          // Show success toast with custom styling
          toast.success(
            (t) => (
              <div className="flex flex-col gap-2">
                <div className="font-bold text-lg text-green-700">
                  🎉 Free Trial Registration Successful!
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-700">Username:</span>
                    <span className="text-blue-600 font-medium">{data.username}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-700">Password:</span>
                    <span className="text-blue-600 font-medium">{formData.password}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-700">Trial expires:</span>
                    <span className="text-gray-600">{new Date(data.trial_expiry_date).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="mt-2 pt-2 border-t border-gray-200">
                  <a
                    href="https://app1.aieducator.com/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-medium underline text-sm"
                  >
                    Login now →
                  </a>
                </div>
              </div>
            ),
            {
              duration: 8000,
              style: {
                maxWidth: '500px',
                padding: '16px',
              },
            }
          )
          // Reset form
          setFormData({
            fullName: '',
            rollNumber: '',
            schoolName: '',
            className: '',
            sectionName: '',
            whatsappNumber: '',
            email: '',
            username: '',
            password: ''
          })
        } else {
          throw new Error(data.detail || data.error || 'Registration failed')
        }
      } catch (error) {
        console.error('Error submitting form:', error)

        let errorMessage = 'Unknown error occurred'
        if (error instanceof Error) {
          errorMessage = error.message
        } else if (typeof error === 'string') {
          errorMessage = error
        } else if (error && typeof error === 'object') {
          errorMessage = JSON.stringify(error)
        }

        toast.error(errorMessage, {
          duration: 5000,
          style: {
            maxWidth: '500px',
          },
        })
      }
    }
  }

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{
          top: 80,
          zIndex: 9999,
        }}
        toastOptions={{
          success: {
            style: {
              background: '#f0fdf4',
              border: '1px solid #86efac',
              zIndex: 9999,
            },
          },
          error: {
            style: {
              background: '#fef2f2',
              border: '1px solid #fca5a5',
              zIndex: 9999,
            },
          },
        }}
      />
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,219,255,0.2),transparent_50%)]" />
      </div>

      {/* Floating shapes for visual interest */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-300 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-300 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '4s' }} />

      <div className="max-w-4xl mx-auto px-4 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold text-center mb-8">
            Start Your <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent animate-gradient">Free Trial</span>
          </h1>
          <p className="text-center text-gray-600 mb-8 text-lg">
            Experience Smart Learners AI-powered platform with a free trial - no payment required!
          </p>

          <Card className="p-8 bg-white/90 backdrop-blur-lg shadow-2xl border border-white/50">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg">
                <FaUser />
              </div>
              <div className="ml-3">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">Create Your Account</h2>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gradient-to-r from-blue-50/50 to-sky-50/50 backdrop-blur-sm transition-all duration-200 hover:from-blue-50 hover:to-sky-50"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Roll Number *
                </label>
                <input
                  type="text"
                  name="rollNumber"
                  value={formData.rollNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gradient-to-r from-blue-50/50 to-sky-50/50 backdrop-blur-sm transition-all duration-200 hover:from-blue-50 hover:to-sky-50"
                  placeholder="Enter your roll number"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  School Name
                </label>
                <input
                  type="text"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gradient-to-r from-blue-50/50 to-sky-50/50 backdrop-blur-sm transition-all duration-200 hover:from-blue-50 hover:to-sky-50"
                  placeholder="Enter your school name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Class Name
                </label>
                <select
                  name="className"
                  value={formData.className}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gradient-to-r from-blue-50/50 to-sky-50/50 backdrop-blur-sm transition-all duration-200 hover:from-blue-50 hover:to-sky-50"
                >
                  <option value="">Select Class</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Section Name
                </label>
                <input
                  type="text"
                  name="sectionName"
                  value={formData.sectionName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gradient-to-r from-blue-50/50 to-sky-50/50 backdrop-blur-sm transition-all duration-200 hover:from-blue-50 hover:to-sky-50"
                  placeholder="Enter your section (e.g., A, B, C)"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  WhatsApp Mobile Number *
                </label>
                <input
                  type="tel"
                  name="whatsappNumber"
                  value={formData.whatsappNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gradient-to-r from-blue-50/50 to-sky-50/50 backdrop-blur-sm transition-all duration-200 hover:from-blue-50 hover:to-sky-50"
                  placeholder="10-digit WhatsApp number"
                  maxLength={10}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gradient-to-r from-blue-50/50 to-sky-50/50 backdrop-blur-sm transition-all duration-200 hover:from-blue-50 hover:to-sky-50"
                  placeholder="email@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Username *
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gradient-to-r from-blue-50/50 to-sky-50/50 backdrop-blur-sm transition-all duration-200 hover:from-blue-50 hover:to-sky-50"
                  placeholder="Choose a username"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password *
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 pr-12 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gradient-to-r from-blue-50/50 to-sky-50/50 backdrop-blur-sm transition-all duration-200 hover:from-blue-50 hover:to-sky-50"
                    placeholder="Minimum 8 characters"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                  >
                    {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-8">
              <Button
                onClick={handleSubmit}
                className="flex items-center bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Start Free Trial
                <FaArrowRight className="ml-2" />
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default FreeTrialForm