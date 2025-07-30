'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Card from '@/components/Card'
import { FaGavel, FaHandshake, FaUserCheck, FaExclamationTriangle } from 'react-icons/fa'

const Terms = () => {
  const highlights = [
    {
      icon: <FaGavel className="text-3xl text-blue-600" />,
      title: 'Legal Agreement',
      description: 'Binding terms between you and Smart Learners.ai'
    },
    {
      icon: <FaHandshake className="text-3xl text-green-600" />,
      title: 'Fair Usage',
      description: 'Guidelines for responsible use of our platform'
    },
    {
      icon: <FaUserCheck className="text-3xl text-purple-600" />,
      title: 'User Rights',
      description: 'Your rights and responsibilities as a user'
    },
    {
      icon: <FaExclamationTriangle className="text-3xl text-orange-600" />,
      title: 'Important Notices',
      description: 'Key limitations and disclaimers'
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
              Terms & <span className="gradient-text">Conditions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Please read these terms and conditions carefully before using Smart Learners.ai. 
              By accessing or using our platform, you agree to be bound by these terms.
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
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card hover className="text-center h-full">
                  <div className="mb-4 p-3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl w-fit mx-auto">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{highlight.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
            
            <p className="text-gray-600 mb-4">
              By accessing and using Smart Learners.ai ("the Platform"), you accept and agree to be bound 
              by the terms and provision of this agreement. If you do not agree to abide by the above, 
              please do not use this service.
            </p>
            
            <p className="text-gray-600 mb-8">
              These terms apply to all users of the Platform, including without limitation users who are 
              students, parents, educators, contributors of content, and/or general browsers of the Platform.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Description of Service</h2>
            
            <p className="text-gray-600 mb-4">
              Smart Learners.ai provides an AI-powered educational platform offering:
            </p>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>• Personalized learning experiences for CBSE NCERT curriculum</li>
              <li>• AI-driven tutoring and assessment tools</li>
              <li>• Progress tracking and analytics</li>
              <li>• Interactive courses for Classes 6-12</li>
              <li>• JEE preparation materials and practice tests</li>
              <li>• Achievement certificates and performance reports</li>
            </ul>

            <p className="text-gray-600 mb-8">
              The Platform is provided "as is" and we reserve the right to modify, suspend, or discontinue 
              any aspect of the service at any time without notice.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">3. User Registration and Accounts</h2>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Account Creation</h3>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>• Users must provide accurate and complete information during registration</li>
              <li>• You are responsible for maintaining the confidentiality of your account credentials</li>
              <li>• One account per user - multiple accounts are not permitted</li>
              <li>• Users under 18 must have parental consent to create an account</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Account Security</h3>
            <ul className="text-gray-600 mb-8 space-y-2">
              <li>• You are solely responsible for all activities under your account</li>
              <li>• Notify us immediately of any unauthorized use of your account</li>
              <li>• We are not liable for any loss or damage from unauthorized account access</li>
              <li>• Strong passwords and regular updates are recommended</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Acceptable Use Policy</h2>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Permitted Uses</h3>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>• Access educational content for personal learning purposes</li>
              <li>• Complete courses and assessments honestly</li>
              <li>• Interact respectfully with AI tutors and platform features</li>
              <li>• Provide feedback to help improve the platform</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Prohibited Activities</h3>
            <p className="text-gray-600 mb-4">You agree not to:</p>
            <ul className="text-gray-600 mb-8 space-y-2">
              <li>• Share account credentials with others</li>
              <li>• Copy, distribute, or modify platform content without permission</li>
              <li>• Attempt to reverse engineer or hack the platform</li>
              <li>• Use automated tools to access or scrape the platform</li>
              <li>• Submit false information or cheat on assessments</li>
              <li>• Violate any applicable laws or regulations</li>
              <li>• Harass, abuse, or harm other users</li>
              <li>• Upload malicious content or viruses</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Subscription and Payment Terms</h2>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Subscription Plans</h3>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>• Free tier with limited access to basic features</li>
              <li>• Premium subscriptions with full platform access</li>
              <li>• Annual and monthly billing options available</li>
              <li>• Institutional and bulk pricing for schools</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Payment Processing</h3>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>• All payments are processed securely through our payment partners</li>
              <li>• Subscription fees are charged in advance</li>
              <li>• Failed payments may result in service suspension</li>
              <li>• Price changes will be communicated 30 days in advance</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Auto-Renewal</h3>
            <p className="text-gray-600 mb-8">
              Subscriptions automatically renew unless cancelled before the renewal date. 
              You can cancel your subscription at any time through your account settings.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Intellectual Property Rights</h2>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Content</h3>
            <p className="text-gray-600 mb-4">
              All content on Smart Learners.ai, including but not limited to:
            </p>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>• Course materials, videos, and text content</li>
              <li>• AI algorithms and learning models</li>
              <li>• Software, code, and platform technology</li>
              <li>• Trademarks, logos, and brand elements</li>
              <li>• Design, layout, and user interface</li>
            </ul>
            <p className="text-gray-600 mb-6">
              is owned by Smart Learners.ai and protected by copyright, trademark, and other intellectual property laws.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">User-Generated Content</h3>
            <p className="text-gray-600 mb-8">
              By submitting content to our platform (responses, feedback, etc.), you grant us a 
              non-exclusive, worldwide, royalty-free license to use, modify, and display such content 
              for the purpose of providing and improving our services.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Privacy and Data Protection</h2>
            
            <p className="text-gray-600 mb-4">
              Your privacy is important to us. Our Privacy Policy explains:
            </p>
            <ul className="text-gray-600 mb-8 space-y-2">
              <li>• What information we collect and why</li>
              <li>• How we use and protect your data</li>
              <li>• Your rights regarding your personal information</li>
              <li>• How to contact us about privacy concerns</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Disclaimers and Limitations</h2>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Educational Disclaimer</h3>
            <p className="text-gray-600 mb-6">
              Smart Learners.ai is a supplementary educational tool. While we strive for accuracy, 
              we do not guarantee that our content is error-free or that use of our platform will 
              result in specific academic outcomes. Traditional study methods and qualified teachers 
              remain important for comprehensive education.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Service Availability</h3>
            <p className="text-gray-600 mb-6">
              We aim for 99.9% uptime but cannot guarantee uninterrupted service. We may experience 
              downtime for maintenance, updates, or due to factors beyond our control.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Limitation of Liability</h3>
            <p className="text-gray-600 mb-8">
              Smart Learners.ai shall not be liable for any indirect, incidental, special, 
              consequential, or punitive damages, including without limitation, loss of profits, 
              data, use, goodwill, or other intangible losses resulting from your use of the platform.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Termination</h2>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">By You</h3>
            <p className="text-gray-600 mb-4">
              You may terminate your account at any time by:
            </p>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>• Contacting our support team</li>
              <li>• Using the account deletion feature in settings</li>
              <li>• Canceling your subscription (service ends at period end)</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">By Us</h3>
            <p className="text-gray-600 mb-4">
              We may suspend or terminate your account if:
            </p>
            <ul className="text-gray-600 mb-8 space-y-2">
              <li>• You violate these terms of service</li>
              <li>• You engage in fraudulent or illegal activities</li>
              <li>• Your account remains inactive for an extended period</li>
              <li>• We discontinue the service (with reasonable notice)</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Governing Law and Disputes</h2>
            
            <p className="text-gray-600 mb-4">
              These terms are governed by the laws of India. Any disputes will be subject to the 
              exclusive jurisdiction of the courts in Bangalore, Karnataka, India.
            </p>
            
            <p className="text-gray-600 mb-8">
              We encourage resolving disputes through direct communication. If formal proceedings 
              are necessary, both parties agree to attempt mediation before litigation.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">11. Changes to Terms</h2>
            
            <p className="text-gray-600 mb-8">
              We reserve the right to modify these terms at any time. Material changes will be 
              communicated via email or platform notification at least 30 days before taking effect. 
              Continued use of the platform after changes constitutes acceptance of the new terms.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">12. Contact Information</h2>
            
            <p className="text-gray-600 mb-4">
              For questions about these terms or our services, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> legal@smartlearners.ai</p>
              <p className="text-gray-700 mb-2"><strong>Phone:</strong> +91 123 456 7890</p>
              <p className="text-gray-700 mb-4"><strong>Address:</strong> 123 Education Hub, Tech Park, Bangalore, India 560001</p>
              
              <h4 className="font-semibold text-gray-800 mb-2">Business Hours:</h4>
              <p className="text-gray-700 mb-2">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
              <p className="text-gray-700">Saturday: 10:00 AM - 4:00 PM IST</p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default Terms