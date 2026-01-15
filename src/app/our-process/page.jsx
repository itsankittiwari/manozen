import {
  Upload,
  FileSearch,
  CheckSquare,
  Cpu,
  Send,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";


export default function OurProcess() {
  const processSteps = [
    {
      icon: Upload,
      title: "Data Intake",
      description:
        "Secure transfer of your healthcare data through HIPAA-compliant channels. We accept various formats including EHR exports, medical documents, and clinical notes.",
      details: [
        "Encrypted data transfer",
        "Multiple format support",
        "Batch processing capabilities",
        "Real-time status tracking",
      ],
    },
    {
      icon: FileSearch,
      title: "Coding & Annotation",
      description:
        "Expert medical coders and annotators process your data with precision using industry-standard coding systems and annotation guidelines.",
      details: [
        "Certified medical coders",
        "ICD-10, CPT, HCPCS coding",
        "Custom annotation schemas",
        "Domain expert review",
      ],
    },
    {
      icon: CheckSquare,
      title: "QA Review",
      description:
        "Comprehensive quality assurance with multiple layers of review to ensure accuracy and compliance with healthcare standards.",
      details: [
        "Multi-tier QA process",
        "Compliance verification",
        "Error detection and correction",
        "Audit trail maintenance",
      ],
    },
    {
      icon: Cpu,
      title: "Automation + Human Validation",
      description:
        "AI-powered automation combined with human expertise ensures both efficiency and accuracy in every deliverable.",
      details: [
        "AI-assisted processing",
        "Machine learning optimization",
        "Expert validation",
        "Continuous improvement",
      ],
    },
    {
      icon: Send,
      title: "Secure Delivery",
      description:
        "Processed data is delivered through secure channels with complete documentation and support for seamless integration.",
      details: [
        "Encrypted delivery",
        "Format customization",
        "Integration support",
        "Post-delivery assistance",
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
            Our Process
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Before onboarding any new partner, we offer a free Practice 
            Performance Review to assess your revenue cycle health and 
            identify financial leakages, workflow gaps, and operational 
            challenges affecting reimbursements. In addition to RCM services, 
            we provide high-quality human-powered medical data annotation through 
            trained medical coders and clinical reviewers to support accurate 
            AI/ML models and healthcare automation.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index}>
                <div className="flex flex-col md:flex-row gap-8 mb-16">
                  <div className="md:w-1/3 flex flex-col items-center md:items-start">
                    <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                      <Icon className="text-white" size={36} />
                    </div>
                    <div className="text-center md:text-left">
                      <div className="text-blue-600 font-semibold mb-2">
                        Step {index + 1}
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {step.title}
                      </h2>
                    </div>
                  </div>

                  <div className="md:w-2/3">
                    <p className="text-lg text-gray-600 mb-6">
                      {step.description}
                    </p>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="font-semibold text-gray-900 mb-3">
                        Key Features
                      </h3>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start text-gray-700">
                            <span className="text-blue-600 mr-2">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {index < processSteps.length - 1 && (
                  <div className="flex justify-center mb-16">
                    <ArrowRight
                      size={32}
                      className="text-blue-600 rotate-90 md:rotate-0"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Our Process Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Refined over 10+ years to ensure optimal healthcare outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Security",
                text: "End-to-end encryption and HIPAA compliance at every stage.",
              },
              {
                title: "Quality",
                text: "Multiple quality checks ensuring 98%+ accuracy.",
              },
              {
                title: "Speed",
                text: "Automation-driven workflows for faster delivery.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {item.title}
                </div>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience Our Process Firsthand
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Schedule a demo to see how our workflow can benefit your organization.
          </p>
           <Link
              href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all shadow-lg">
            Schedule a Demo
          </Link>
        </div>
      </section>
    </div>
  );
}
