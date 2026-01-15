import { Target, Eye, Award, Users, Shield, Globe } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "Security & Compliance",
      description:
        "HIPAA compliance and data security are at the core of everything we do.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We maintain the highest standards of quality and accuracy in all our deliverables.",
    },
    {
      icon: Users,
      title: "Partnership",
      description:
        "We work closely with our clients to understand and meet their unique needs.",
    },
    {
      icon: Globe,
      title: "Innovation",
      description:
        "Combining cutting-edge AI technology with healthcare expertise for optimal results.",
    },
  ];

  const achievements = [
    { number: "10+", label: "Years of Experience" },
    { number: "110,000+", label: "Records Processed" },
    { number: "50+", label: "Healthcare Clients" },
    { number: "98%", label: "Client Satisfaction" },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
              About Manozen Solution
            </h1>
            <p className="text-xl text-gray-600">
              We empower healthcare organizations to operate with clarity and 
              confidence by delivering reliable, efficient, 
              and future-ready revenue cycle solutions that 
              drive sustainable growth and enhance patient outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  Manozen Solution Pvt Ltd is a leading provider of medical
                  coding, annotation, and revenue cycle management services.
                  With over a decade of experience, we help healthcare
                  organizations optimize operations and maximize revenue.
                </p>
                <p className="text-lg">
                  Our team combines certified medical coding professionals with
                  advanced AI technology to deliver unparalleled accuracy and
                  efficiency.
                </p>
                <p className="text-lg">
                  We build our processes around HIPAA compliance and industry
                  best practices to ensure accuracy, security, and trust.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 text-center"
                >
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {item.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <Target className="text-blue-600 mr-4" size={40} />
                  <h3 className="text-2xl font-bold text-gray-900">
                    Our Mission
                  </h3>
                </div>
                <p className="text-gray-600 text-lg">
                  To empower healthcare organizations with accurate, compliant,
                  and timely medical coding and data annotation services.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg mt-6">
                <div className="flex items-center mb-6">
                  <Eye className="text-blue-600 mr-4" size={40} />
                  <h3 className="text-2xl font-bold text-gray-900">
                    Our Vision
                  </h3>
                </div>
                <p className="text-gray-600 text-lg">
                  To be the most trusted partner in healthcare data management.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission & Vision
              </h2>
              <p className="text-lg text-gray-600">
                We are driven by excellence, innovation, and uncompromising
                quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-blue-600" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Healthcare Organizations Choose Us
          </h2>
          <p className="text-xl text-blue-100">
            Expertise, technology, and proven results.
          </p>
        </div>
      </section>
    </div>
  );
}
