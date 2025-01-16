"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const ContactFormSchema = z.object({
  fullName: z.string().min(2).max(50),
  email: z.string().email(),
  phoneNumber: z.string().optional(),
  message: z.string().min(1),
});

function ContactForm() {
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof ContactFormSchema>) {
    console.log(values);
  }

  return (
    <div className="mt-5">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col space-y-4"
        >
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="border-0 border-gold focus:border-0 active:border-0 bg-transparent border-b-2 rounded-none font-display text-gold placeholder:text-gold"
                    placeholder="Full Name*"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex md:flex-row flex-col gap-5 w-full">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      className="border-0 border-gold focus:border-0 active:border-0 bg-transparent border-b-2 rounded-none font-display text-gold placeholder:text-gold"
                      type="email"
                      placeholder="Email Address*"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      className="border-0 border-gold focus:border-0 active:border-0 bg-transparent border-b-2 rounded-none font-display text-gold placeholder:text-gold"
                      placeholder="phone Number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="border-0 border-gold focus:border-0 active:border-0 bg-transparent border-b-2 rounded-none font-display text-gold placeholder:text-gold"
                    placeholder="Message"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 self-end"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default ContactForm;
