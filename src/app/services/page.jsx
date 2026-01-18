import {
  FileText,
  Brain,
  Database,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";


export default function Services() {
  const services = [
    {
      icon: FileText,
      image: "/image/medical-coding.png",
      title: "Medical Coding & Billing",
      description:
        "Comprehensive medical coding services ensuring accuracy, compliance, and maximum reimbursement.",
      features: [
        "ICD-10, CPT, and HCPCS coding",
        "Inpatient and outpatient coding",
        "Professional fee coding",
        "Facility coding services",
        "Charge entry and posting",
        "Claims submission and follow-up",
      ],
      benefits: [
        "98% clean claim rate",
        "Reduced denials",
        "Faster reimbursements",
        "Improved revenue cycle",
      ],
    },
    {
      icon: Brain,
      image: "/image/annotation_medical.png",
      title: "Medical Annotation",
      description:
        "Expert annotation of medical data for AI training, research, and clinical applications.",
      features: [
        "Clinical notes annotation",
        "Medical image labeling",
        "Medical audio annotation",
        "Medical video annotation",
        "ICD-10 code tagging",
        "CPT procedure identification",
        "Named entity recognition",
        "Relationship extraction",
      ],
      benefits: [
        "95% annotation accuracy",
        "HIPAA-compliant processes",
        "Scalable solutions",
        "Quality-assured outputs",
      ],
    },
    {
      icon: Database,
      image: "/image/ai-data-labeling.png",
      title: "AI Healthcare Data Labeling",
      description:
        "High-quality labeled datasets to power your healthcare AI and machine learning initiatives.",
      features: [
        "Medical image segmentation",
        "Text classification",
        "Data extraction",
        "Sentiment analysis",
        "Custom labeling taxonomies",
        "Multi-modal data labeling",
      ],
      benefits: [
        "Accelerated AI development",
        "Improved model performance",
        "Domain expert validation",
        "Flexible data formats",
      ],
    },
    {
      icon: TrendingUp,
      image: "/image/ar-denial.png",
      title: "AR & Denial Management",
      description:
        "Proactive revenue cycle management to reduce denials and optimize cash flow.",
      features: [
        "Denial analysis and tracking",
        "Appeals management",
        "Payment posting",
        "Accounts receivable follow-up",
        "Underpayment identification",
        "Payer correspondence",
      ],
      benefits: [
        "Reduced AR days",
        "Lower denial rates",
        "Increased collections",
        "Better cash flow",
      ],
    },
  ];


  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-red-500 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your healthcare operations with smart solutions that boost
            efficiency, ensure accuracy, and maximize revenue—powering growth
            and better patient outcomes.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0
                  ? "lg:flex-row"
                  : "lg:flex-row-reverse"
                  } gap-8 items-center`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                    <Icon size={200} className="text-red-500 opacity-20" />
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Features */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle
                              size={18}
                              className="text-red-500 mr-2 mt-0.5"
                            />
                            <span className="text-gray-700">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Benefits
                      </h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle
                              size={18}
                              className="text-green-600 mr-2 mt-0.5"
                            />
                            <span className="text-gray-700">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Visual */}
                <div className="flex-1 w-full">
                  <div className="relative bg-gradient-to-br min-h-[300px] lg:min-h-[400px] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain max-h-full rounded-2xl p-4"
                      priority
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to learn how our services can transform your
            healthcare operations.
          </p>
          <Link href="/contact" className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-all shadow-lg">
            Request a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
