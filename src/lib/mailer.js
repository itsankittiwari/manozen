import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Service key to readable name mapping
const serviceLabels = {
  medical_coding: "Medical Coding & Billing",
  medical_annotation: "Medical Annotation",
  data_labeling: "AI Healthcare Data Labeling",
  training: "Training",
  ar_denial: "AR & Denial Management",
  general: "General Inquiry",
  other: "Request a Schedule Demo / Consultation",
};

// Get readable service name from key
function getServiceLabel(serviceKey) {
  if (!serviceKey) return "-";
  return serviceLabels[serviceKey] || serviceKey;
}

export async function sendContactEmail(data) {
  return resend.emails.send({
    from: "Manozen Website <contact@manozensolution.com>",
    to: [process.env.ADMIN_EMAIL],
    subject: "📩 New Contact Form Submission",
    html: `
      <h2>New Contact Submission</h2>
      <p><b>Name:</b> ${data.name}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Phone:</b> ${data.phone || "-"}</p>
      <p><b>Organization:</b> ${data.organization || "-"}</p>
      <p><b>Service:</b> ${getServiceLabel(data.service)}</p>
      <p><b>Message:</b></p>
      <p>${data.message}</p>
    `,
  });
}
