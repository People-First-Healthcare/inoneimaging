"use server";

import { RequestReferralPadsFormDataSchema as FormSchema } from "@/lib/schema";
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

export async function requestReferralPads(formData: formData) {
  // simulate delay
  // await new Promise((resolve) => {
  //   setTimeout(() => resolve(1), 3000);
  // });

  const { clinicName, clinicAddress, token } = formData;

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
      to: "info@inoneimaging.com.au",
      subject: `Request for InOne Imaging Referral Pads from ${clinicName}`,
      html: `<h1>Request for InOne Imaging Referral Pads</h1>
  <p>Dear InOne Imaging,</p>
  <p>I am writing to request referral pads for our clinic:</p>
  <p><strong>Clinic Information</strong></p>
  <ul>
    <li>Clinic Name: ${clinicName}</li>
    <li>Clinic Address: ${clinicAddress}</li>
  </ul>
  <p>Please send us a supply of referral pads at your earliest convenience.</p>
  <p>Thank you for your assistance.</p>
  <p>Sincerely,</p>
  <p>${clinicName}</p>`,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (err) {
    console.error(err);
    return { success: false, message: err };
  }
}
