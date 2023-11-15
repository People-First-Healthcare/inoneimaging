"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { sendAppointmentRequest } from "@/app/actions/request-appointment";
import captchaTurnstileVerify from "@/app/actions/verify";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RequestAppointmentFormDataSchema as FormSchema } from "@/lib/schema";
import { useRef, useState } from "react";
import SubmitButton from "./SubmitButton";
import TurnstileWidget from "./TurnstileWidget";
import { Label } from "./ui/label";

type Props = {
  setFormSubmitted: (isSubbmitted: boolean) => void;
};

function AppointmentForm({ setFormSubmitted }: Props) {
  const [pending, setPending] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      token: "",
    },
  });

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    setPending(true);
    const turnstileResponse = await captchaTurnstileVerify({
      token: values.token,
    });

    if (!turnstileResponse.success) {
      alert("Failed verifying human");
      setPending(false);
      return;
    }
    const fileFormData = new FormData();
    if (inputRef.current?.files?.[0]) {
      fileFormData.append('referral', inputRef.current?.files?.[0]);
    }
    const mailerResponse = await sendAppointmentRequest(values, fileFormData);
    if (mailerResponse.success) {
      setFormSubmitted(true);
    } else {
      alert("Something went wrong when requesting an appointment");
    }
    setPending(false);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input type="tel" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="CT Scan">CT Scan</SelectItem>
                    <SelectItem value="Ultrasound">Ultrasound</SelectItem>
                    <SelectItem value="X-ray">X-Ray</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="preferredTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred time</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a preferred time" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Morning (9AM-12PM)">
                      Morning (9AM-12PM)
                    </SelectItem>
                    <SelectItem value="Early Afternoon (12PM-3PM)">
                      Early Afternoon (12PM-3PM)
                    </SelectItem>
                    <SelectItem value="Late Afternoon (3PM-5PM)">
                      Late Afternoon (3PM-5PM)
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="sm:col-span-2">
            <Label htmlFor="referral">Upload a referral</Label>
            <Input
              ref={inputRef}
              id="referral"
              type="file"
              className="file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 file:border file:border-solid file:border-blue-700 file:rounded-md border-blue-600"
            />
          </div>
        </div>

        <TurnstileWidget
          sitekey="0x4AAAAAAAMNP5ZwMQ2wFh7d"
          callback={(token) => {
            form.setValue("token", token);
          }}
        />

        <SubmitButton pending={pending}>Submit</SubmitButton>
      </form>
    </Form>
  );
}

export default AppointmentForm;
