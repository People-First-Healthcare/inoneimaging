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
