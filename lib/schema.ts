import { z } from "zod";

export const RequestAppointmentFormDataSchema = z.object({
  firstName: z.string().min(1, {
    message: "First name is required",
  }),
  lastName: z.string().min(1, {
    message: "Last name is required",
  }),
  email: z.string().email("Not a valid email address"),
  phone: z.string().min(9, {
    message: "Not a valid phone number",
  }),
  service: z.string({
    required_error: "Please select a service",
  }),
  preferredTime: z.string({
    required_error: "Please select a preferred time",
  }),
  token: z.string(),
});

export const ContactUsFormDataSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  email: z.string().email("Not a valid email address"),
  phone: z.string().min(9, {
    message: "Not a valid phone number",
  }),
  message: z.string().min(1, {
    message: "Message is required",
  }),
  token: z.string(),
});

export const RequestLoginFormDataSchema = z.object({
  patientName: z.string().min(1, {
    message: "Patient name is required",
  }),
  patientDOB: z.date({
    required_error: "Patient DOB is required",
    invalid_type_error: "Invalid date",
  }),
  service: z.string({
    required_error: "Please select a service",
  }),
  providerNum: z
    .string()
    .min(1, {
      message: "Provider number is required",
    })
    .min(8, {
      message: "Invalid provider number",
    }),
  clinicName: z.string().min(1, {
    message: "Clinic name is required",
  }),
  token: z.string(),
});

export const RequestReferralPadsFormDataSchema = z.object({
  clinicName: z.string().min(1, {
    message: "Clinic name is required",
  }),
  clinicAddress: z.string().min(1, {
    message: "Clinic address is required",
  }),
  token: z.string(),
});
