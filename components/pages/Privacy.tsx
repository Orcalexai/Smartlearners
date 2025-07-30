'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Card from '@/components/Card'
import { FaShieldAlt, FaUserShield, FaLock, FaEye } from 'react-icons/fa'

const Privacy = () => {
  const principles = [
    {
      icon: <FaShieldAlt className="text-3xl text-blue-600" />,
      title: 'Data Protection',
      description: 'We use industry-standard encryption to protect your personal information'
    },
    {
      icon: <FaUserShield className="text-3xl text-green-600" />,
      title: 'Privacy First',
      description: 'Your privacy is our top priority in everything we do'
    },
    {
      icon: <FaLock className="text-3xl text-purple-600" />,
      title: 'Secure Storage',
      description: 'All data is stored securely with advanced security measures'
    },
    {
      icon: <FaEye className="text-3xl text-indigo-600" />,
      title: 'Transparency',
      description: 'We are transparent about what data we collect and how we use it'
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              At Smart Learners.ai, we are committed to protecting your privacy and ensuring 
              the security of your personal information. This policy explains how we collect, 
              use, and safeguard your data.
            </p>
            <p className="text-sm text-gray-500">
              Last updated: December 20, 2024
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card hover className="text-center h-full">
                  <div className="mb-4 p-3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl w-fit mx-auto">
                    {principle.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{principle.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Information We Collect</h2>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Personal Information</h3>
            <p className="text-gray-600 mb-4">
              When you register for Smart Learners.ai, we collect information such as:
            </p>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>• Full name and contact information</li>
              <li>• Email address and phone number</li>
              <li>• Educational background and class level</li>
              <li>• Parent/guardian contact information (for minors)</li>
              <li>• Payment information for premium services</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Learning Data</h3>
            <p className="text-gray-600 mb-4">
              To provide personalized learning experiences, we collect:
            </p>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>• Course progress and completion status</li>
              <li>• Quiz and test results</li>
              <li>• Time spent on different topics</li>
              <li>• Learning preferences and patterns</li>
              <li>• AI interaction logs for improvement</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Technical Information</h3>
            <p className="text-gray-600 mb-4">
              We automatically collect certain technical information:
            </p>
            <ul className="text-gray-600 mb-8 space-y-2">
              <li>• IP address and location data</li>
              <li>• Device type and operating system</li>
              <li>• Browser information and preferences</li>
              <li>• Usage patterns and platform interactions</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Educational Services</h3>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>• Provide personalized AI-powered tutoring</li>
              <li>• Track learning progress and performance</li>
              <li>• Generate customized study plans</li>
              <li>• Deliver relevant course content and materials</li>
              <li>• Issue certificates and achievements</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Platform Improvement</h3>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>• Analyze usage patterns to enhance features</li>
              <li>• Improve AI algorithms and recommendations</li>
              <li>• Develop new educational tools and resources</li>
              <li>• Optimize platform performance and reliability</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Communication</h3>
            <ul className="text-gray-600 mb-8 space-y-2">
              <li>• Send course updates and notifications</li>
              <li>• Provide customer support and assistance</li>
              <li>• Share educational content and tips</li>
              <li>• Send promotional offers (with consent)</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Sharing and Disclosure</h2>
            
            <p className="text-gray-600 mb-4">
              We do not sell, rent, or share your personal information with third parties except in the following circumstances:
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Service Providers</h3>
            <p className="text-gray-600 mb-4">
              We may share information with trusted service providers who help us operate our platform, such as:
            </p>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>• Cloud hosting and storage providers</li>
              <li>• Payment processing companies</li>
              <li>• Analytics and performance monitoring services</li>
              <li>• Customer support tools</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Legal Requirements</h3>
            <p className="text-gray-600 mb-4">
              We may disclose information when required by law or to:
            </p>
            <ul className="text-gray-600 mb-8 space-y-2">
              <li>• Comply with legal processes or government requests</li>
              <li>• Protect our rights, property, or safety</li>
              <li>• Protect the rights and safety of our users</li>
              <li>• Prevent fraud or abuse of our services</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Security</h2>
            
            <p className="text-gray-600 mb-4">
              We implement comprehensive security measures to protect your information:
            </p>
            <ul className="text-gray-600 mb-8 space-y-2">
              <li>• SSL/TLS encryption for all data transmission</li>
              <li>• Secure data storage with regular backups</li>
              <li>• Regular security audits and updates</li>
              <li>• Access controls and employee training</li>
              <li>• Incident response and monitoring systems</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Rights and Choices</h2>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Access and Control</h3>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>• Access your personal information</li>
              <li>• Update or correct your data</li>
              <li>• Delete your account and data</li>
              <li>• Export your learning data</li>
              <li>• Opt-out of marketing communications</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Parental Rights</h3>
            <p className="text-gray-600 mb-8">
              For users under 18, parents or legal guardians can review, modify, or delete their child's 
              personal information by contacting us at privacy@smartlearners.ai.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookies and Tracking</h2>
            
            <p className="text-gray-600 mb-4">
              We use cookies and similar technologies to:
            </p>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>• Remember your login preferences</li>
              <li>• Analyze platform usage and performance</li>
              <li>• Personalize your learning experience</li>
              <li>• Provide relevant advertisements</li>
            </ul>
            <p className="text-gray-600 mb-8">
              You can control cookie preferences through your browser settings.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">International Data Transfers</h2>
            
            <p className="text-gray-600 mb-8">
              Your information may be transferred to and processed in countries other than India. 
              We ensure appropriate safeguards are in place to protect your data in accordance with 
              applicable privacy laws.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to This Policy</h2>
            
            <p className="text-gray-600 mb-8">
              We may update this privacy policy from time to time. We will notify you of any 
              material changes by email or through our platform. The updated policy will be 
              effective immediately upon posting.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
            
            <p className="text-gray-600 mb-4">
              If you have any questions about this privacy policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@smartlearners.ai</p>
              <p className="text-gray-700 mb-2"><strong>Phone:</strong> +91 123 456 7890</p>
              <p className="text-gray-700 mb-2"><strong>Address:</strong> 123 Education Hub, Tech Park, Bangalore, India</p>
              <p className="text-gray-700"><strong>Data Protection Officer:</strong> dpo@smartlearners.ai</p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default Privacy