"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import toast from "react-hot-toast";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // success | error | null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      toast.success("Thank you! Your response has been submitted 🎉");

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submit error:", error);
      toast.error("Something went wrong. Please try again ❌");
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600">
            Ready to transform your healthcare operations?
            Partner with us today and unlock smarter workflows,
            faster reimbursements, and technology-driven solutions
            designed to elevate your practice’s performance.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2 className="text-3xl font-bold text-blue-600 mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              <Info icon={Mail} title="Email" lines={["info@manozen.com"]} />
              <Info icon={Phone} title="Phone" lines={["+91 8178324532", "Mon-Fri, 9am-6pm EST"]} />
              <Info
                icon={MapPin}
                title="Office"
                lines={[
                  "N-103 Sector 25",
                  "Jalvayu Vihar, Noida",
                  "UP, India - 201301",
                ]}
              />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg space-y-6">
            <Input label="Full Name *" name="name" value={formData.name} onChange={handleChange} required />
            <Input label="Email Address *" name="email" type="email" value={formData.email} onChange={handleChange} required />
            <Input label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} />
            <Input label="Organization" name="organization" value={formData.organization} onChange={handleChange} />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Service of Interest
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              >
                <option value="">Select a service</option>
                <option value="medical_coding">Medical Coding & Billing</option>
                <option value="medical_annotation">Medical Annotation</option>
                <option value="data_labeling">AI Healthcare Data Labeling</option>
                <option value="ar_denial">AR & Denial Management</option>
                <option value="general">General Inquiry</option>
                <option value="other">Request a Schedule Demo</option>
                <option value="other">Request a Consultation</option>
              </select>
            </div>

            <Textarea label="Message *" name="message" value={formData.message} onChange={handleChange} required />

            {/* {submitStatus === "success" && (
              <Alert type="success" text="Thank you! Your message has been sent." />
            )}
            {submitStatus === "error" && (
              <Alert type="error" text="Something went wrong. Please try again." />
            )} */}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center"
            >
              {isSubmitting ? "Sending..." : (<><Send size={18} className="mr-2" />Send Message</>)}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

/* 🔹 Small Reusable Components */

function Info({ icon: Icon, title, lines }) {
  return (
    <div className="flex items-start">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
        <Icon className="text-blue-600" size={24} />
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
        {lines.map((line, i) => (
          <p key={i} className="text-gray-600">{line}</p>
        ))}
      </div>
    </div>
  );
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input {...props} className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
    </div>
  );
}

function Textarea({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <textarea {...props} rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none" />
    </div>
  );
}

function Alert({ type, text }) {
  return (
    <div className={`p-4 rounded-lg ${type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
      {text}
    </div>
  );
}
