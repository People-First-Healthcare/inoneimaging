"use server";

import { RequestAppointmentFormDataSchema as FormSchema } from "@/lib/schema";
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

export async function sendAppointmentRequest(formData: formData) {
  const { firstName, lastName, email, phone, service, preferredTime, token } =
    formData;

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

  // Add real email and direct when emails are set up for Imaging - Fatima
  try {
    let mailOptions: any = {
      from: senderEmail,
      to: receiverEmail,
      subject: `New Appointment Request for ${firstName}`,
      html: `<h1>New Appointment Request</h1>
      <p>Dear InOne Imaging,</p>
      <p>I would like to request a new appointment for an imaging service.</p>
      <p><strong>Patient Information</strong></p>
      <ul>
        <li>First Name: ${firstName}</li>
        <li>Last Name: ${lastName}</li>
        <li>Email: ${email}</li>
        <li>Phone Number: ${phone}</li>
      </ul>
      <p><strong>Imaging Service Requested:</strong> ${service}</p>
      <p><strong>Preferred Appointment Time:</strong> ${preferredTime}</p>
      <p>Thank you for your consideration.</p>
      <p>Sincerely,</p>
      <p>${firstName} ${lastName}</p>`,
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
