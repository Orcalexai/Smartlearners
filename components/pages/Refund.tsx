'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Card from '@/components/Card'
import { FaMoneyBillWave, FaClock, FaCheckCircle, FaTimesCircle } from 'react-icons/fa'

const Refund = () => {
  const policies = [
    {
      icon: <FaMoneyBillWave className="text-3xl text-green-600" />,
      title: '30-Day Guarantee',
      description: 'Full refund within 30 days of purchase if not satisfied'
    },
    {
      icon: <FaClock className="text-3xl text-blue-600" />,
      title: 'Quick Processing',
      description: 'Refunds processed within 5-7 business days'
    },
    {
      icon: <FaCheckCircle className="text-3xl text-purple-600" />,
      title: 'Easy Process',
      description: 'Simple online refund request system'
    },
    {
      icon: <FaTimesCircle className="text-3xl text-orange-600" />,
      title: 'Fair Terms',
      description: 'Clear conditions and transparent process'
    }
  ]

  const eligibleReasons = [
    'Technical issues preventing platform access',
    'Course content not matching description',
    'Significant platform downtime affecting learning',
    'Billing errors or duplicate charges',
    'Accidental subscription purchase',
    'Platform not meeting educational needs'
  ]

  const ineligibleReasons = [
    'Changed mind after 30-day period',
    'Completed more than 80% of purchased courses',
    'Downloaded certificates or completed assessments',
    'Violation of terms of service',
    'Free trial users (no payment made)',
    'Third-party payment disputes'
  ]

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Refund <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We stand behind the quality of our AI-powered learning platform. If you're not 
              completely satisfied with Smart Learners.ai, we offer a fair and transparent refund policy.
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
            {policies.map((policy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card hover className="text-center h-full">
                  <div className="mb-4 p-3 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl w-fit mx-auto">
                    {policy.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {policy.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{policy.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">30-Day Money-Back Guarantee</h2>
            
            <p className="text-gray-600 mb-4">
              At Smart Learners.ai, we are confident in the quality and effectiveness of our AI-powered 
              learning platform. We offer a 30-day money-back guarantee for all premium subscriptions 
              to ensure your complete satisfaction.
            </p>
            
            <p className="text-gray-600 mb-8">
              If you are not satisfied with our service within 30 days of your initial purchase, 
              you may request a full refund subject to the terms outlined in this policy.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Refund Eligibility</h2>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">You are eligible for a refund if:</h3>
            <ul className="text-gray-600 mb-6 space-y-2">
              {eligibleReasons.map((reason, index) => (
                <li key={index} className="flex items-start">
                  <FaCheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                  {reason}
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Refunds are not available if:</h3>
            <ul className="text-gray-600 mb-8 space-y-2">
              {ineligibleReasons.map((reason, index) => (
                <li key={index} className="flex items-start">
                  <FaTimesCircle className="text-red-600 mt-1 mr-3 flex-shrink-0" />
                  {reason}
                </li>
              ))}
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Refund Process</h2>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Step 1: Submit Refund Request</h3>
            <p className="text-gray-600 mb-4">
              To request a refund, please contact our support team within 30 days of your purchase:
            </p>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>• Email: refunds@smartlearners.ai</li>
              <li>• Phone: +91 123 456 7890</li>
              <li>• Online form: Available in your account dashboard</li>
              <li>• Live chat: Through our website during business hours</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Step 2: Provide Required Information</h3>
            <p className="text-gray-600 mb-4">
              Please include the following information in your refund request:
            </p>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>• Your account email address</li>
              <li>• Order ID or transaction reference number</li>
              <li>• Reason for requesting the refund</li>
              <li>• Date of purchase</li>
              <li>• Any relevant screenshots or documentation</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Step 3: Review and Processing</h3>
            <ul className="text-gray-600 mb-8 space-y-2">
              <li>• Our team will review your request within 2 business days</li>
              <li>• We may request additional information or clarification</li>
              <li>• You will receive an email confirmation once approved</li>
              <li>• Refunds are processed within 5-7 business days</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Subscriptions</h2>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Monthly Subscriptions</h3>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>• Full refund available within 30 days of first payment</li>
              <li>• Subsequent monthly charges are not refundable after 30 days</li>
              <li>• Cancel anytime to prevent future charges</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Annual Subscriptions</h3>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>• Full refund available within 30 days of purchase</li>
              <li>• Prorated refunds may be considered for exceptional circumstances</li>
              <li>• Significant savings make annual plans non-refundable after 30 days</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Free Trials</h3>
            <ul className="text-gray-600 mb-8 space-y-2">
              <li>• Free trials do not involve payment, so refunds are not applicable</li>
              <li>• Cancel before trial ends to avoid charges</li>
              <li>• If charged by mistake, contact us immediately</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Refund Methods</h2>
            
            <p className="text-gray-600 mb-4">
              Refunds will be processed using the same payment method used for the original purchase:
            </p>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>• Credit/Debit Card: 5-7 business days</li>
              <li>• UPI/Digital Wallets: 3-5 business days</li>
              <li>• Net Banking: 5-7 business days</li>
              <li>• International Cards: 7-14 business days</li>
            </ul>

            <p className="text-gray-600 mb-8">
              Please note that processing times may vary depending on your bank or payment provider. 
              If you don't see the refund after the expected timeframe, please contact your bank first 
              before reaching out to us.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Partial Refunds</h2>
            
            <p className="text-gray-600 mb-4">
              In certain exceptional circumstances, we may offer partial refunds:
            </p>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>• Platform downtime exceeding 48 consecutive hours</li>
              <li>• Loss of course progress due to technical issues</li>
              <li>• Significant changes to course content after purchase</li>
              <li>• Service disruptions affecting exam preparation timeline</li>
            </ul>

            <p className="text-gray-600 mb-8">
              Partial refund amounts will be calculated based on the duration of service disruption 
              and the impact on your learning experience.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Alternative Solutions</h2>
            
            <p className="text-gray-600 mb-4">
              Before processing a refund, we may offer alternative solutions:
            </p>
            <ul className="text-gray-600 mb-8 space-y-2">
              <li>• Account credit for future purchases</li>
              <li>• Free subscription extension</li>
              <li>• Access to additional courses or features</li>
              <li>• One-on-one support to resolve technical issues</li>
              <li>• Migration to a different subscription plan</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Promotional and Discounted Purchases</h2>
            
            <p className="text-gray-600 mb-4">
              Special terms apply to promotional purchases:
            </p>
            <ul className="text-gray-600 mb-8 space-y-2">
              <li>• Discounted subscriptions follow the same 30-day policy</li>
              <li>• Refund amount equals the actual amount paid, not the regular price</li>
              <li>• Bundle purchases are refunded as a complete package</li>
              <li>• Gift subscriptions can be refunded if unused</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Corporate and Institutional Accounts</h2>
            
            <p className="text-gray-600 mb-4">
              Different terms may apply to bulk or institutional purchases:
            </p>
            <ul className="text-gray-600 mb-8 space-y-2">
              <li>• Custom refund policies are negotiated in service agreements</li>
              <li>• Extended evaluation periods may be available</li>
              <li>• Prorated refunds for unused licenses</li>
              <li>• Contact our enterprise team for specific terms</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Disputes and Appeals</h2>
            
            <p className="text-gray-600 mb-4">
              If your refund request is denied and you disagree with the decision:
            </p>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>• You may appeal the decision within 15 days</li>
              <li>• Provide additional documentation supporting your case</li>
              <li>• Senior management will review appeals</li>
              <li>• Final decisions will be communicated within 5 business days</li>
            </ul>

            <p className="text-gray-600 mb-8">
              For unresolved disputes, you may contact consumer protection authorities or seek 
              mediation through appropriate channels as per Indian consumer protection laws.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Policy Updates</h2>
            
            <p className="text-gray-600 mb-8">
              This refund policy may be updated from time to time. Significant changes will be 
              communicated via email and posted on our website. The updated policy applies to 
              purchases made after the effective date of changes.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
            
            <p className="text-gray-600 mb-4">
              For refund requests or questions about this policy, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Refunds Team:</strong> refunds@smartlearners.ai</p>
              <p className="text-gray-700 mb-2"><strong>Phone:</strong> +91 123 456 7890</p>
              <p className="text-gray-700 mb-2"><strong>Address:</strong> 123 Education Hub, Tech Park, Bangalore, India 560001</p>
              <p className="text-gray-700 mb-4"><strong>Live Chat:</strong> Available on our website</p>
              
              <h4 className="font-semibold text-gray-800 mb-2">Refund Processing Hours:</h4>
              <p className="text-gray-700 mb-2">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
              <p className="text-gray-700 mb-4">Average response time: 24 hours</p>
              
              <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-green-800 mb-2">💡 Quick Tip:</h4>
                <p className="text-green-700 text-sm">
                  Before requesting a refund, try contacting our support team. Many issues can be 
                  resolved quickly, and we're committed to ensuring you have a great learning experience!
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default Refund