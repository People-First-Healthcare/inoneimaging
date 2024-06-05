"use server";

import { RequestLoginFormDataSchema as FormSchema } from "@/lib/schema";
import axios from "axios";
import nodemailer from "nodemailer";
import { z } from "zod";
import format from "date-fns/format";

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

export async function requestLogin(formData: formData) {
  const { patientName, patientDOB, service, providerNum, clinicName, token } =
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
      from: senderEmail,
      to: receiverEmail,
      subject: `New Access Images Request from ${clinicName}`,
      html: `<h1>Request Patient Image Access</h1>
      <p>Dear InOne Imaging,</p>
      <p>I am writing to request access to patient images for the following patient:</p>
      <p><strong>Patient Information</strong></p>
      <ul>
        <li>Name: ${patientName}</li>
        <li>Date of Birth: ${format(patientDOB, "PPP")}</li>
      </ul>
      <p><strong>Imaging Information</strong></p>
      <ul>
        <li>Imaging Type: ${service}</li>
      </ul>
      <p><strong>Referrer Information</strong></p>
      <ul>
        <li>Provider No.: ${providerNum}</li>
        <li>Clinic Name: ${clinicName}</li>
      </ul>
      <p>Please provide me with login details to access the patient's images.</p>
      <p>Thank you for your assistance.</p>
      <p>Sincerely,</p>
      <p>${clinicName}</p>`,
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
