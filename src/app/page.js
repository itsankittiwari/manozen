"use client";
import {
  FileText,
  Brain,
  Database,
  TrendingUp,
  Shield,
  DollarSign,
  Clock,
} from "lucide-react";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import { useState, useEffect } from 'react';

export default function Home() {
  const stats = [
    { number: "110,000+", label: "Records Processed" },
    { number: "10+", label: "Years Experience" },
    { number: "98%", label: "Clean Claim Rate" },
    { number: "99%", label: "Annotation Accuracy" },
  ];

  const features = [
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description:
        "Full compliance with healthcare data security standards and regulations.",
    },
    {
      icon: Brain,
      title: "AI + Certified Coders",
      description:
        "Combining advanced AI technology with expert certified medical coders.",
    },
    {
      icon: DollarSign,
      title: "50% Cost Reduction",
      description:
        "Significantly reduce operational costs while maintaining quality.",
    },
    {
      icon: Clock,
      title: "Faster Reimbursements",
      description:
        "Accelerate your revenue cycle with accurate and timely coding.",
    },
  ];
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    'image/medical-annotation1.png',
    'image/annotation_image.png',
    'image/annotation_medical.png',
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-white">
      {/* Hero */}
      {/* <section className="bg-gradient-to-br from-red-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Smart RCM End-to-End Solutions and Scalable Data Annotation for Healthcare and{" "}
            <span className="text-red-500">AI-Driven Businesses.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your healthcare operations with precision medical coding,
            advanced annotation, and revenue cycle management solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-red-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-600 transition-all shadow-lg"
            >
              Register for Free Demo
            </Link>
            <Link
              href="/contact"
              className="bg-white text-red-500 border-2 border-red-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-50 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section> */}
      <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Smart RCM End-to-End Solutions and Scalable Data Annotation for Healthcare and{" "}
                <span className="text-red-500">AI-Driven Businesses.</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Transform your healthcare operations with precision medical coding,
                advanced annotation, and revenue cycle management solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-red-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-600 transition-all shadow-lg">
                  Register for Free Demo
                </button>
                <button className="bg-white text-red-500 border-2 border-red-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-50 transition-all">
                  Contact Us
                </button>
              </div>
            </div>

            <div className="relative h-[350px] lg:h-[400px] w-full rounded-2xl overflow-hidden flex items-center justify-center">

              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 flex items-center justify-center
                    transition-all duration-1000 ease-in-out
                    ${index === currentImage
                      ? "opacity-100 translate-x-0"
                      : index < currentImage
                        ? "opacity-0 -translate-x-full"
                        : "opacity-0 translate-x-full"
                    }
                  `}
                >
                  <img
                    src={image}
                    alt={`Healthcare solution ${index + 1}`}
                    className="w-[90%] h-[90%] object-contain"
                  />
                </div>
              ))}

              {/* DOT INDICATORS */}
              <div className="absolute bottom-0 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`h-3 rounded-full transition-all duration-300
                      ${index === currentImage
                        ? "bg-red-500 w-8"
                        : "bg-gray-300 w-3 hover:bg-gray-400"
                      }
                    `}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Manozen Solution?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-semibold">
              Achieve up to 40% cost reduction compared to your current vendor—without compromising quality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-red-500" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare solutions tailored to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: FileText,
                title: "Medical Coding & Billing",
                text: "Accurate ICD-10, CPT, and HCPCS coding to maximize reimbursements.",
              },
              {
                icon: Brain,
                title: "Medical Annotation",
                text: "Expert annotation of medical data for AI and research.",
              },
              {
                icon: Database,
                title: "AI Healthcare Data Labeling",
                text: "High-quality labeled datasets for healthcare ML models.",
              },
              {
                icon: TrendingUp,
                title: "AR & Denial Management",
                text: "Proactive revenue cycle and denial prevention strategies.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl border border-red-100"
                >
                  <Icon className="text-red-500 mb-4" size={40} />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {item.text}
                  </p>
                  <Link
                    href="/services"
                    className="text-red-500 font-semibold hover:text-red-700"
                  >
                    Learn More →
                  </Link>
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
            Ready to Transform Your Healthcare Operations?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Get started with a free demo today.
          </p>
          <Link
            href="/contact"
            className="bg-white text-red-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-50 transition-all shadow-lg"
          >
            Schedule a Free Demo
          </Link>
        </div>
      </section>
      {/* Services Cards Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Healthcare Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Scalable, secure, and technology-driven services designed for modern healthcare.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ServiceCard
              icon={FileText}
              title="Medical Coding & Billing"
              description="Accurate ICD-10, CPT, and HCPCS coding to optimize reimbursements."
              features={[
                "Certified medical coders",
                "HIPAA-compliant workflows",
                "Reduced claim denials",
                "Faster reimbursements",
              ]}
              gradient="from-blue-500 to-indigo-600"
              bgGradient="from-blue-100 to-indigo-100"
            />

            <ServiceCard
              icon={Brain}
              title="Medical Data Annotation"
              description="High-quality human-labeled medical data for AI and ML applications."
              features={[
                "Clinically trained annotators",
                "99% annotation accuracy",
                "Scalable datasets",
                "AI-ready outputs",
              ]}
              gradient="from-purple-500 to-pink-600"
              bgGradient="from-purple-100 to-pink-100"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
