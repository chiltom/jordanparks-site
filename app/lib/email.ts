import nodemailer from "nodemailer";

interface EmailData {
  to: string;
  subject: string;
  html: string;
}

// Create a transporter object
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER || "smtp.gmail.com",
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function sendEmail({
  to,
  subject,
  html,
}: EmailData): Promise<boolean> {
  try {
    const info = await transporter.sendMail({
      from:
        process.env.EMAIL_FROM ||
        "Jordan Parks Website <noreply@jordanparks.com>",
      to,
      subject,
      html,
    });

    console.log("Message sent: %s", info.messageId);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}

export function generateContactEmailHtml(data: {
  subject: string;
  message: string;
  email: string;
}): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Contact Form Submission</h2>
      
      <div style="margin: 20px 0;">
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>From:</strong> ${data.email}</p>
      </div>
      
      <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
        <h3 style="margin-top: 0; color: #555;">Message:</h3>
        <p style="white-space: pre-line;">${data.message}</p>
      </div>
      
      <div style="margin-top: 20px; font-size: 12px; color: #777; text-align: center;">
        <p>This email was sent from the contact form on Jordan Parks' website.</p>
      </div>
    </div>
  `;
}

export function generateLessonApplicationEmailHtml(data: {
  name: string;
  age: string;
  email: string;
  timePlayed: string;
  goal: string;
  idols: string;
}): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Lesson Application</h2>
      
      <div style="margin: 20px 0;">
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Age:</strong> ${data.age}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Experience:</strong> ${data.timePlayed}</p>
      </div>
      
      <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
        <h3 style="margin-top: 0; color: #555;">Learning Goals:</h3>
        <p style="white-space: pre-line;">${data.goal}</p>
      </div>
      
      <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
        <h3 style="margin-top: 0; color: #555;">Musical Influences:</h3>
        <p style="white-space: pre-line;">${data.idols}</p>
      </div>
      
      <div style="margin-top: 20px; font-size: 12px; color: #777; text-align: center;">
        <p>This email was sent from the lesson application form on Jordan Parks' website.</p>
      </div>
    </div>
  `;
}
