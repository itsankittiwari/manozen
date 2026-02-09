"use client";

import Link from "next/link";
import {
  Code,
  Globe,
  Zap,
  Database,
  Wrench,
  GitBranch,
  Shield,
  CheckCircle,
  TrendingUp,
  Phone
} from "lucide-react";

export default function OtherServices() {
  const serviceCategories = [
    {
      icon: Code,
      title: "Flask Development",
      subtitle: "Python Web Applications",
      description:
        "Build lightweight, scalable web applications with Flask. Perfect for APIs, microservices, and rapid prototyping.",
      features: [
        "RESTful API Development",
        "Database Integration (PostgreSQL, MySQL)",
        "Authentication & Authorization",
        "Real-time Data Processing",
        "Microservices Architecture",
        "Performance Optimization",
      ],
      useCases: [
        "Healthcare Portals",
        "Data Processing APIs",
        "Machine Learning Pipelines",
        "Backend Services",
      ],
      color: "from-yellow-50 to-yellow-100",
      borderColor: "border-yellow-200",
      textColor: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
    {
      icon: Database,
      title: "Odoo Development",
      subtitle: "Enterprise Resource Planning",
      description:
        "Implement and customize Odoo ERP systems for healthcare billing, inventory, and operations management.",
      features: [
        "Odoo Module Development",
        "Custom Workflow Automation",
        "Healthcare Module Customization",
        "Integration with External Systems",
        "Database Optimization",
        "User Training & Support",
      ],
      useCases: [
        "Hospital Management",
        "Revenue Cycle Management",
        "Inventory Control",
        "Financial Planning",
      ],
      color: "from-red-50 to-red-100",
      borderColor: "border-red-200",
      textColor: "text-red-600",
      bgColor: "bg-red-100",
    },
    {
      icon: Globe,
      title: "Website Creation",
      subtitle: "From Concept to Launch",
      description:
        "Build professional, responsive websites tailored to your healthcare organization or business needs.",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Content Management Systems",
        "E-commerce Integration",
        "Performance Optimization",
        "Security & Compliance",
      ],
      useCases: [
        "Healthcare Providers",
        "Clinics & Hospitals",
        "Medical Practices",
        "Health Tech Companies",
      ],
      color: "from-red-50 to-red-100",
      borderColor: "border-red-200",
      textColor: "text-red-600",
      bgColor: "bg-red-100",
    },
    {
      icon: Wrench,
      title: "Website Modifications",
      subtitle: "Enhance & Update",
      description:
        "Improve existing websites with new features, redesigns, and performance upgrades.",
      features: [
        "Feature Addition",
        "UI/UX Improvements",
        "Performance Optimization",
        "Security Updates",
        "Mobile Responsiveness",
        "Plugin Integration",
      ],
      useCases: [
        "Legacy System Updates",
        "Feature Enhancements",
        "Compliance Updates",
        "Design Refresh",
      ],
      color: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
      textColor: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ];

  const workflow = [
    { step: "01", title: "Requirements Gathering", description: "Understand business needs" },
    { step: "02", title: "Architecture & Planning", description: "Design scalable solutions" },
    { step: "03", title: "Development", description: "Clean, best-practice code" },
    { step: "04", title: "Testing & QA", description: "Quality & performance testing" },
    { step: "05", title: "Deployment", description: "Secure production rollout" },
  ];

  const techStack = [
    { category: "Backend / ERP", tech: "Flask, Python, Django, Node.js, Odoo" },
    { category: "Frontend / UI UX", tech: "React, TypeScript, Tailwind, Figma, Adobe XD" },
    { category: "Database", tech: "PostgreSQL, MySQL, MongoDB" },
    // { category: "Tools", tech: "Docker, Git, CI/CD, " },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "Scalable solutions for long-term growth",
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "HIPAA-compliant, security-first systems",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized speed & reliability",
    },
    {
      icon: GitBranch,
      title: "Continuous Support",
      description: "Maintenance & upgrades",
    },
  ];
  const testimonials = [
    {
      quote: 'Exceptional UX thinking that balanced business needs with user research. The designs were dev-ready and improved our healthcare platform significantly.',
      author: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'HealthTech Solutions',
    },
    {
      quote: 'Outstanding work on our dashboard redesign. The team understood complex healthcare workflows and created intuitive solutions.',
      author: 'Michael Chen',
      role: 'VP of Product',
      company: 'MedVision Inc',
    },
    {
      quote: 'Senior-level UX expertise with clear communication and accessible design. Highly recommend for enterprise projects.',
      author: 'Emma Rodriguez',
      role: 'CEO',
      company: 'CloudBase Technologies',
    },
  ];


  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-red-50 via-white to-red-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Designing User-Centric Digital Experiences That Drive Results
              </h1>
              <p className="text-xl text-gray-600 mb-2">
                Helping startups & enterprises build intuitive, scalable, and high-impact products.
              </p>
              <p className="text-lg text-gray-500 mb-8">
                End-to-end UX/UI design for healthcare, SaaS, and enterprise platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/contact"
                  className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-all shadow-lg inline-block"
                >
                  Get a Free Consultant
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-lg p-6 shadow-lg mb-4">
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-md"></div>
                  <div className="bg-white rounded-lg p-4 shadow-md"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Development & Implementation Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flask, Odoo, websites & enterprise-grade solutions built for scale.
          </p>
          <p className="text-lg text-gray-500 max-w-4xl mx-auto mt-4">
            From custom web applications to comprehensive ERP systems, we deliver robust, secure, and scalable digital solutions tailored to your business needs.
          </p>
          <p className="text-lg text-gray-500 max-w-4xl mx-auto mt-2">
            Our expertise spans across modern frameworks, cloud technologies, and industry best practices to ensure your projects are future-ready and high-performing.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {serviceCategories.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-10 items-center`}
              >
                <div className="flex-1">
                  <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className={service.textColor} size={32} />
                  </div>

                  <h2 className="text-4xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h2>
                  <p className={`font-semibold ${service.textColor} mb-4`}>
                    {service.subtitle}
                  </p>
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold mb-3">Key Features</h3>
                      <ul className="space-y-2">
                        {service.features.map((f, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle size={18} className={`${service.textColor} mr-2 mt-1`} />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold mb-3">Use Cases</h3>
                      <ul className="space-y-2">
                        {service.useCases.map((u, i) => (
                          <li key={i} className="flex items-start">
                            <span className={`w-2 h-2 ${service.textColor} rounded-full mr-2 mt-2`} />
                            {u}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex-1 w-full">
                  <div
                    className={`bg-gradient-to-br ${service.color} border ${service.borderColor} rounded-2xl min-h-[320px] flex items-center justify-center`}
                  >
                    <Icon size={220} className={`${service.textColor} opacity-20`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Workflow */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {workflow.map((w) => (
              <div key={w.step} className="bg-white p-6 rounded-xl text-center border">
                <div className="text-3xl font-bold text-red-600 mb-3">{w.step}</div>
                <h3 className="font-bold">{w.title}</h3>
                <p className="text-sm text-gray-600">{w.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Technology Stack</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {techStack.map((t, i) => (
              <div key={i} className="border rounded-xl p-6 bg-red-50">
                <h3 className="font-bold mb-2">{t.category}</h3>
                <p className="text-gray-600">{t.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Testimonials */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Clients Say</h2>
            <p className="text-xl text-gray-600">Trusted by leading healthcare and tech companies</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50 to-white border border-red-100 rounded-xl p-6 shadow-md">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">{`"${testimonial.quote}"`}</p>
                <div className="border-t border-red-200 pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-red-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div key={i} className="bg-white p-6 rounded-xl shadow">
                  <Icon size={32} className="text-red-600 mb-4" />
                  <h3 className="font-bold mb-2">{b.title}</h3>
                  <p className="text-gray-600">{b.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-16 bg-red-500 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
             Let's Design Something Users Actually Love
          </h2>
          <p className="text-xl mb-8 text-red-100">
           Ready to transform your digital product with exceptional UX design?
          </p>
          <Link
            href="/contact"
            className="bg-white text-red-500 px-10 py-5 rounded-lg text-lg font-semibold hover:bg-red-50 hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-2 mx-auto w-fit"
          >
            <Phone size={20} />
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
