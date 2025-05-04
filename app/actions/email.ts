"use server";

import {
  sendEmail,
  generateContactEmailHtml,
  generateLessonApplicationEmailHtml,
} from "@/app/lib/email";

export async function sendContactEmail(formData: {
  subject: string;
  message: string;
  email: string;
}) {
  try {
    // Get the recipient email from environment variables
    const recipientEmail =
      process.env.CONTACT_EMAIL || "your-email@example.com";

    // Generate the HTML content for the email
    const htmlContent = generateContactEmailHtml(formData);

    // Send the email
    const success = await sendEmail({
      to: recipientEmail,
      subject: `Website Contact: ${formData.subject}`,
      html: htmlContent,
    });

    return {
      success,
      message: success ? "Email sent successfully!" : "Failed to send email.",
    };
  } catch (error) {
    console.error("Error in sendContactEmail:", error);
    return {
      success: false,
      message: "An error occurred while sending the email.",
    };
  }
}

export async function sendLessonApplicationEmail(formData: {
  name: string;
  age: string;
  email: string;
  timePlayed: string;
  goal: string;
  idols: string;
}) {
  try {
    // Get the recipient email from environment variables
    const recipientEmail =
      process.env.CONTACT_EMAIL || "your-email@example.com";

    // Generate the HTML content for the email
    const htmlContent = generateLessonApplicationEmailHtml(formData);

    // Send the email
    const success = await sendEmail({
      to: recipientEmail,
      subject: `Lesson Application from ${formData.name}`,
      html: htmlContent,
    });

    return {
      success,
      message: success
        ? "Application submitted successfully!"
        : "Failed to submit application.",
    };
  } catch (error) {
    console.error("Error in sendLessonApplicationEmail:", error);
    return {
      success: false,
      message: "An error occurred while submitting your application.",
    };
  }
}
