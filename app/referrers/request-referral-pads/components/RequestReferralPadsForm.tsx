"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import SubmitButton from "@/components/SubmitButton";
import TurnstileWidget from "@/components/TurnstileWidget";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RequestReferralPadsFormDataSchema as FormSchema } from "@/lib/schema";
import { useState } from "react";

import { requestReferralPads } from "@/app/actions/request-referral-pads";

type Props = {
  setFormSubmitted: (isSubmitted: boolean) => void;
};

function RequestReferralPadsForm({ setFormSubmitted }: Props) {
  const [pending, setPending] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      clinicName: "",
      clinicAddress: "",
      name: "",
      phone: "",
      token: "",
    },
  });

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    setPending(true);
    const mailerResponse = await requestReferralPads(values);
    if (mailerResponse.success) {
      setFormSubmitted(true);
    } else {
      alert(mailerResponse.message);
    }
    console.log(values);
    setPending(false);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
          <FormField
            control={form.control}
            name="clinicName"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel>Clinic Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="clinicAddress"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel>Contact Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input type="tel" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <TurnstileWidget
          sitekey="0x4AAAAAAAOy3IZPepzP3jTD"
          callback={(token) => {
            form.setValue("token", token);
          }}
        />

        <SubmitButton pending={pending}>Submit</SubmitButton>
      </form>
    </Form>
  );
}

export default RequestReferralPadsForm;
