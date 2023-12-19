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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RequestLoginFormDataSchema as FormSchema } from "@/lib/schema";
import { useState } from "react";

import { requestLogin } from "@/app/actions/request-login";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

type Props = {
  setFormSubmitted: (isSubmitted: boolean) => void;
};

function RequestLoginForm({ setFormSubmitted }: Props) {
  const [pending, setPending] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      patientName: "",
      service: "",
      providerNum: "",
      clinicName: "",
      token: "",
    },
  });

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    setPending(true);

    const mailerResponse = await requestLogin(values);
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
            name="patientName"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel>Patient Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="patientDOB"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel>Patient Date of Birth</FormLabel>
                <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button variant={"outline"}>
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      captionLayout="dropdown-buttons"
                      selected={field.value}
                      fromYear={1900}
                      toYear={new Date().getFullYear()}
                      onSelect={(e) => {
                        field.onChange(e);
                        setIsCalendarOpen(false);
                      }}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem className="sm:col-span-2">
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
            name="providerNum"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Provider Number</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="clinicName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Clinic Name</FormLabel>
                <FormControl>
                  <Input {...field} />
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

export default RequestLoginForm;
