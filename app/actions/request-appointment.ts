"use server";

import { RequestAppointmentFormDataSchema as FormSchema } from "@/lib/schema";
import axios from "axios";
import nodemailer from "nodemailer";
import { z } from "zod";

const senderEmail = process.env.NODEMAILER_EMAIL;
const password = process.env.NODEMAILER_PWD;

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: senderEmail,
    pass: password,
  },
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
      turnstileData,
      {
        headers: { "Content-Type": "application/json" },
      }
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
      from: `"In One Imaging" example@inoneimaging.com.au`,
      to: "hendry.kosasih@yahoo.com",
      subject: `New Appointment Request for ${firstName}`,
      html: `<h1>New Appointment Request</h1>
      <p>Dear In One Imaging,</p>
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
    console.error(err);
    return { success: false, message: err };
  }
}
