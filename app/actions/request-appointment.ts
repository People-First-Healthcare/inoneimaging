"use server";

import { RequestAppointmentFormDataSchema as FormSchema } from "@/lib/schema";
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
  // simulate delay
  // await new Promise((resolve) => {
  //   setTimeout(() => resolve(1), 3000);
  // });

  const inputValidation = FormSchema.safeParse(formData);

  if (!inputValidation.success) {
    return { success: false, error: inputValidation.error.format() };
  }

  const { firstName, lastName, email, phone, service, preferredTime } =
    formData;
  try {
    const mailOptions: Object = {
      from: senderEmail,
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
    return { success: false, error: err };
  }
}
