"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { sendAppointmentRequest } from "@/app/actions/request-appointment";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RequestAppointmentFormDataSchema as FormSchema } from "@/lib/schema";
import { strBoolToBoo } from "@/lib/utils";
import { useRef, useState } from "react";
import SubmitButton from "../../../components/SubmitButton";
import TurnstileWidget from "../../../components/TurnstileWidget";

type Props = {
  setFormSubmitted: (isSubmitted: boolean) => void;
};

function AppointmentForm({ setFormSubmitted }: Props) {
  const [pending, setPending] = useState(false);
  const [hasReferral, setHasReferral] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      hasReferral: "false",
      token: "",
      referral: undefined,
    },
  });

  const fileRef = form.register("referral");

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    values.hasReferral = `${hasReferral}`;
    setPending(true);

    const fileFormData = new FormData();

    if (inputRef.current?.files?.[0]) {
      fileFormData.append("referral", inputRef.current?.files?.[0]);
    }

    const mailerResponse = await sendAppointmentRequest(values, fileFormData);
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

          <FormField
            control={form.control}
            name="hasReferral"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Would you like to upload a referral?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={(e) => setHasReferral(strBoolToBoo(e))}
                    defaultValue={field.value}
                    className="flex space-x-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="true" />
                      </FormControl>
                      <FormLabel className="font-normal">Yes</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="false" />
                      </FormControl>
                      <FormLabel className="font-normal">No</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="referral"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="file"
                  accept=".pdf, .jpg, .jpeg, .png"
                  {...fileRef}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
