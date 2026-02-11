import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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
      <p><b>Service:</b> ${data.service_interest || "-"}</p>
      <p><b>Message:</b></p>
      <p>${data.message}</p>
    `,
  });
}
