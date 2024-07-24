"use server";

import { ContactUsFormDataSchema as FormSchema } from "@/lib/schema";
import axios from "xior";
import nodemailer from "nodemailer";
import { z } from "zod";

const senderEmail = process.env.NODEMAILER_EMAIL;
const password = process.env.NODEMAILER_PWD;
const receiverEmail = process.env.RECEIVER_EMAIL;

const transporter = nodemailer.createTransport({
  service: "Outlook365",
  port: 587,
  secure: false,
  auth: {
    user: senderEmail,
    pass: password,
  },
  tls: { ciphers: "SSLv3" },
});

type formData = z.infer<typeof FormSchema>;

export async function sendEnquiry(formData: formData) {
  const { name, email, phone, message, token } = formData;

  const turnstileData = {
    // Refer: https://developers.cloudflare.com/turnstile/reference/testing/
    secret: process.env.TURNSTILE_SECRET_KEY,
    response: token,
  };
  const turnstileRes = await axios
    .post(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      turnstileData
    )
    .then((res) => res.data);

  if (!turnstileRes.success) {
    return { success: false, message: "Could not verify human" };
  }

  const inputValidation = FormSchema.safeParse(formData);

  if (!inputValidation.success) {
    return { success: false, error: inputValidation.error.format() };
  }

  try {
    let mailOptions: any = {
      from: senderEmail,
      to: receiverEmail,
      subject: `New Enquiry from ${name}`,
      html: `<h1>New Enquiry</h1>
      <p>Dear InOne Imaging,</p>
      <p>I am writing to you to enquire about your services at InOne Imaging.</p>
      <p><strong>Patient Information</strong></p>
      <ul>
        <li>Name: ${name}</li>
        <li>Email: ${email}</li>
        <li>Phone Number: ${phone}</li>
      </ul>
      <p><strong>Enquiry</strong></p>
      <p style="font-size:16px; border-style:ridge; padding:8px;">${message}</p>

      <p>Thank you for your time and I look forward to hearing from you soon.</p>

      <p>Sincerely,</p>
      <p>${name}</p>`,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (err) {
    console.error("Error sending email:", err);
    return {
      success: false,
      message: "Failed to submit request. Please try again later.",
    };
  }
}
