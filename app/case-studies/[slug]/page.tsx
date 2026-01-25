'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';

interface CaseStudyDetail {
  id: string;
  title: string;
  category: string;
  description: string;
  client: string;
  industry: string;
  year: number;
  duration: string;
  challenge: string;
  solution: string;
  results: string[];
  keyMetrics: Array<{
    label: string;
    value: string;
  }>;
  technologies: string[];
}

const caseStudiesData: Record<string, CaseStudyDetail> = {
  'fintech-mobile-app': {
    id: 'fintech-mobile-app',
    title: 'FinTech Mobile App Transformation',
    category: 'Mobile Development',
    description:
      'Developed a comprehensive mobile banking solution that increased user engagement by 340% and enabled seamless transactions for over 500K users.',
    client: 'SecureBank Inc.',
    industry: 'Finance',
    year: 2023,
    duration: '8 months',
    challenge:
      'SecureBank Inc. had a legacy mobile banking app with poor user experience, outdated technology stack, and security vulnerabilities. Users were abandoning the app, leading to declining transaction volumes and customer satisfaction.',
    solution:
      'We completely rebuilt the mobile application using React Native for cross-platform compatibility. Implemented state-of-the-art security protocols, redesigned the UI/UX for intuitive navigation, and integrated advanced features like biometric authentication, real-time notifications, and investment portfolio tracking.',
    results: [
      '340% increase in daily active users',
      '500K+ active users in first 6 months',
      '99.9% uptime SLA achieved',
      '$2.3M in transaction volume',
      '4.8/5 app store rating',
      'Zero security incidents post-launch',
    ],
    keyMetrics: [
      { label: 'User Growth', value: '+340%' },
      { label: 'Active Users', value: '500K+' },
      { label: 'Transaction Volume', value: '$2.3M' },
      { label: 'Uptime SLA', value: '99.9%' },
    ],
    technologies: [
      'React Native',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'AWS',
      'Firebase',
    ],
  },
  'retail-ecommerce': {
    id: 'retail-ecommerce',
    title: 'E-commerce Platform Modernization',
    category: 'Web Development',
    description:
      'Rebuilt legacy e-commerce infrastructure with modern tech stack, resulting in 280% faster checkout and 45% increase in conversion rates.',
    client: 'RetailMax Group',
    industry: 'Retail',
    year: 2023,
    duration: '6 months',
    challenge:
      'RetailMax Group operated on a 15-year-old e-commerce platform built with legacy technology. The platform was slow, difficult to maintain, had poor mobile experience, and couldn\'t handle peak traffic during sales.',
    solution:
      'We migrated to a modern headless e-commerce architecture using Next.js for the frontend and a microservices backend. Implemented CDN for faster content delivery, optimized database queries, and redesigned the checkout flow for mobile-first experience.',
    results: [
      '280% faster checkout process',
      '45% increase in conversion rates',
      'Handles 10M+ daily requests',
      '67% improvement in load times',
      '25% reduction in cart abandonment',
      '99.95% uptime achieved',
    ],
    keyMetrics: [
      { label: 'Checkout Speed', value: '280% faster' },
      { label: 'Conversion Increase', value: '+45%' },
      { label: 'Load Time Improvement', value: '67%' },
      { label: 'Daily Requests', value: '10M+' },
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'Redis',
      'AWS',
      'Stripe',
    ],
  },
  'healthcare-platform': {
    id: 'healthcare-platform',
    title: 'Healthcare Data Management System',
    category: 'AI Solutions',
    description:
      'Built AI-powered diagnostic support system that helped healthcare providers identify patterns faster, reducing diagnosis time by 60%.',
    client: 'MediCare Solutions',
    industry: 'Healthcare',
    year: 2022,
    duration: '12 months',
    challenge:
      'MediCare Solutions needed to integrate patient data from multiple sources, analyze complex medical records, and provide diagnostic assistance to doctors while maintaining HIPAA compliance.',
    solution:
      'We built a comprehensive healthcare data management platform with AI/ML models for pattern recognition. Integrated with various hospital systems, implemented secure data encryption, and created an intuitive dashboard for healthcare professionals.',
    results: [
      '60% reduction in diagnosis time',
      'HIPAA compliant infrastructure',
      '98.5% accuracy in AI predictions',
      'Integrated with 150+ hospital systems',
      '10K+ successful diagnoses supported',
      'Zero compliance violations',
    ],
    keyMetrics: [
      { label: 'Diagnosis Time Reduction', value: '60%' },
      { label: 'AI Accuracy', value: '98.5%' },
      { label: 'Hospital Systems', value: '150+' },
      { label: 'Supported Diagnoses', value: '10K+' },
    ],
    technologies: [
      'Python',
      'TensorFlow',
      'React',
      'Node.js',
      'PostgreSQL',
      'AWS',
      'HL7 FHIR',
    ],
  },
  'logistics-optimization': {
    id: 'logistics-optimization',
    title: 'Logistics Route Optimization Engine',
    category: 'SaaS Development',
    description:
      'Developed real-time logistics optimization platform using advanced algorithms, saving 35% on operational costs.',
    client: 'GlobalShip Logistics',
    industry: 'Logistics',
    year: 2023,
    duration: '9 months',
    challenge:
      'GlobalShip Logistics managed thousands of delivery routes manually, resulting in inefficient routes, high fuel costs, and delayed deliveries. They needed real-time optimization for dynamic order management.',
    solution:
      'We developed a sophisticated route optimization engine using genetic algorithms and machine learning. Integrated real-time GPS tracking, traffic prediction, and created a web dashboard for fleet managers to monitor and adjust routes dynamically.',
    results: [
      '35% reduction in operational costs',
      '22% faster delivery times',
      'Real-time tracking for 50K+ vehicles',
      '$4.2M annual savings',
      '98% on-time delivery rate',
      '15% reduction in fuel consumption',
    ],
    keyMetrics: [
      { label: 'Cost Reduction', value: '35%' },
      { label: 'Delivery Speed', value: '+22%' },
      { label: 'Annual Savings', value: '$4.2M' },
      { label: 'Tracked Vehicles', value: '50K+' },
    ],
    technologies: [
      'Python',
      'JavaScript',
      'React',
      'Node.js',
      'PostgreSQL',
      'Google Maps API',
      'AWS',
    ],
  },
  'marketing-automation': {
    id: 'marketing-automation',
    title: 'Marketing Automation Platform',
    category: 'SaaS Development',
    description:
      'Built enterprise marketing automation solution managing campaigns for 2000+ brands with 5x better engagement rates.',
    client: 'MarketPro Global',
    industry: 'Marketing Technology',
    year: 2022,
    duration: '10 months',
    challenge:
      'MarketPro Global needed to scale their marketing platform to handle thousands of concurrent campaigns while maintaining performance. They required sophisticated segmentation and personalization capabilities.',
    solution:
      'We architected a multi-tenant SaaS platform with microservices, built advanced campaign segmentation engine, implemented real-time analytics, and created user-friendly drag-and-drop campaign builder.',
    results: [
      '5x improvement in engagement rates',
      '2000+ enterprise clients',
      '15M+ emails processed daily',
      '180% ROI improvement for clients',
      '99.99% uptime SLA',
      '$50M+ revenue generated for clients',
    ],
    keyMetrics: [
      { label: 'Engagement Improvement', value: '5x' },
      { label: 'Enterprise Clients', value: '2000+' },
      { label: 'Daily Email Volume', value: '15M+' },
      { label: 'Client ROI Improvement', value: '180%' },
    ],
    technologies: [
      'React',
      'Node.js',
      'TypeScript',
      'PostgreSQL',
      'Redis',
      'Kafka',
      'AWS',
    ],
  },
  'manufacturing-iot': {
    id: 'manufacturing-iot',
    title: 'IoT Manufacturing Intelligence System',
    category: 'AI Solutions',
    description:
      'Implemented IoT sensors and AI analytics across manufacturing plants, reducing downtime by 48% and increasing efficiency.',
    client: 'IndustrialTech Corp',
    industry: 'Manufacturing',
    year: 2023,
    duration: '11 months',
    challenge:
      'IndustrialTech Corp operated manufacturing plants with aging equipment, frequent unexpected breakdowns, and no real-time visibility into production metrics. This led to costly downtime and inefficient operations.',
    solution:
      'We implemented an IoT sensor network across all equipment, built a real-time analytics platform using machine learning for predictive maintenance, and created dashboards for production monitoring and optimization.',
    results: [
      '48% reduction in equipment downtime',
      '32% increase in production efficiency',
      'Real-time monitoring of 1000+ machines',
      '$8.5M in prevented losses',
      '40% reduction in maintenance costs',
      '25% improvement in equipment lifespan',
    ],
    keyMetrics: [
      { label: 'Downtime Reduction', value: '48%' },
      { label: 'Production Efficiency', value: '+32%' },
      { label: 'Monitored Machines', value: '1000+' },
      { label: 'Prevented Losses', value: '$8.5M' },
    ],
    technologies: [
      'Python',
      'TensorFlow',
      'Node.js',
      'React',
      'InfluxDB',
      'MQTT',
      'AWS IoT',
    ],
  },
};

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const caseStudy = caseStudiesData[slug];

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-3xl font-bold text-black dark:text-white mb-4">
            Case Study Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            The case study you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 opacity-30"></div>
      {/* Back Link */}
      <div className="relative pt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/case-studies"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Case Studies
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
              {caseStudy.category}
            </span>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {caseStudy.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {caseStudy.description}
            </p>
          </div>

          {/* Hero Image */}
          <div className="w-full h-96 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-lg mb-12 flex items-center justify-center">
            <div className="text-white text-center">
              <p className="text-xl font-semibold">{caseStudy.client}</p>
              <p className="text-sm opacity-75 mt-2">{caseStudy.industry}</p>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Client', value: caseStudy.client },
              { label: 'Industry', value: caseStudy.industry },
              { label: 'Duration', value: caseStudy.duration },
              { label: 'Year', value: caseStudy.year.toString() },
            ].map((item) => (
              <div
                key={item.label}
                className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  {item.label}
                </p>
                <p className="text-lg font-semibold text-black dark:text-white">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-8">
            Key Results
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {caseStudy.keyMetrics.map((metric) => (
              <div
                key={metric.label}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                  {metric.label}
                </p>
                <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                Challenge
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                Solution
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results List */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-8">
            Results
          </h2>
          <div className="space-y-4">
            {caseStudy.results.map((result, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700 dark:text-gray-300">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-8">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {caseStudy.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg font-medium text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Let&apos;s discuss how we can help transform your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-white text-blue-600 font-semibold hover:bg-gray-100 transition-colors"
          >
            Get in Touch
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
