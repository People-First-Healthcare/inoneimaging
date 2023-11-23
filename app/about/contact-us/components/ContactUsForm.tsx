"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { sendEnquiry } from "@/app/actions/send-enquiry";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ContactUsFormDataSchema as FormSchema } from "@/lib/schema";
import { useState } from "react";
import SubmitButton from "../../../../components/SubmitButton";
import TurnstileWidget from "../../../../components/TurnstileWidget";
import { Textarea } from "../../../../components/ui/textarea";

type Props = {
  setFormSubmitted: (isSubmitted: boolean) => void;
};

function ContactUsForm({ setFormSubmitted }: Props) {
  const [pending, setPending] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      token: "",
    },
  });

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    setPending(true);
    const mailerResponse = await sendEnquiry(values);
    if (mailerResponse.success) {
      setFormSubmitted(true);
    } else {
      alert(mailerResponse.message);
    }
    setPending(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 gap-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
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
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="" className="resize-none" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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

export default ContactUsForm;
