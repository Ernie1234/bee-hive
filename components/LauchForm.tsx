"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Info } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

import { launchFormSchema } from "@/lib/data";
import { toast } from "./ui/use-toast";
import { useTransition } from "react";
import { lauchAction } from "@/actions/lauchAction";

export default function LauchForm() {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof launchFormSchema>>({
    resolver: zodResolver(launchFormSchema),
    defaultValues: {
      howMany: "",
    },
  });

  function onSubmit(values: z.infer<typeof launchFormSchema>) {
    startTransition(() => {
      console.log(values);
      lauchAction(values).then((data) => {
        if (data?.error) {
          toast({
            description: data.error,
            variant: "destructive",
          });
        } else {
          toast({
            description: data.success,
            variant: "default",
          });
        }
      });
      form.reset();
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Full Name<span className="text-red-400">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    className="bg-gray-800 border-gray-900 focus:border-gray-700 focus:ring-gray-700 focus-visible:ring-0 ring-offset-0 active:bg-gray-900"
                    placeholder="Enter your full name"
                    {...field}
                  />
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
                <FormLabel>
                  Email address<span className="text-red-400">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    className="bg-gray-800 border-gray-900 focus:border-gray-700 focus:ring-gray-700 focus-visible:ring-0 ring-offset-0 active:bg-gray-900"
                    placeholder="Enter your Email address"
                    {...field}
                  />
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
                <FormLabel>
                  Phone Number<span className="text-red-400">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    className="bg-gray-800 border-gray-900 focus:border-gray-700 focus:ring-gray-700 focus-visible:ring-0 ring-offset-0 active:bg-gray-900"
                    placeholder="Enter your phone address"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age</FormLabel>
                <Select
                  disabled={isPending}
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="bg-gray-800 border-gray-900 focus:border-gray-700 focus:ring-gray-700 focus-visible:ring-0 ring-offset-0 active:bg-gray-900">
                      <SelectValue placeholder="Select an age range from the options" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-gray-900 text-white">
                    <SelectItem value="16-24">16-24</SelectItem>
                    <SelectItem value="25-29">25-29</SelectItem>
                    <SelectItem value="30-34">30-34</SelectItem>
                    <SelectItem value="35+">35+</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="businessName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business Name (if any)</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    className="bg-gray-800 border-gray-900 focus:border-gray-700 focus:ring-gray-700 focus-visible:ring-0 ring-offset-0 active:bg-gray-900"
                    placeholder="Enter your business name"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="businessResidence"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>
                  Is your Business Resident in Akure?
                  <span className="text-red-400">*</span>
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    disabled={isPending}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem
                          className="border-background text-background"
                          value="yes"
                        />
                      </FormControl>
                      <FormLabel className="font-normal">Yes</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem
                          className="border-background text-background"
                          value="no"
                        />
                      </FormControl>
                      <FormLabel className="font-normal">No</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="businessIdea"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Describe your business idea in a few sentences
                  <span className="text-red-400">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    className="bg-gray-800 border-gray-900 focus:border-gray-700 focus:ring-gray-700 focus-visible:ring-0 ring-offset-0 active:bg-gray-900"
                    placeholder="Enter your business idea"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="businessAim"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  What problem does your business aim to solve?
                  <span className="text-red-400">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    className="bg-gray-800 border-gray-900 focus:border-gray-700 focus:ring-gray-700 focus-visible:ring-0 ring-offset-0 active:bg-gray-900"
                    placeholder="Enter your business aim"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="unique"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  What is unique about your business or idea?
                  <span className="text-red-400">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    className="bg-gray-800 border-gray-900 focus:border-gray-700 focus:ring-gray-700 focus-visible:ring-0 ring-offset-0 active:bg-gray-900"
                    placeholder="Enter what makes your business unique..."
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="problemSolving"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Who are you solving the problem for?
                  <span className="text-red-400">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    className="bg-gray-800 border-gray-900 focus:border-gray-700 focus:ring-gray-700 focus-visible:ring-0 ring-offset-0 active:bg-gray-900"
                    placeholder="Enter the problem your business is solving..."
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="teamMember"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>
                  Do you have any team members?
                  <span className="text-red-400">*</span>
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    disabled={isPending}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem
                          className="border-background text-background"
                          value="yes"
                        />
                      </FormControl>
                      <FormLabel className="font-normal">Yes</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem
                          className="border-background text-background"
                          value="no"
                        />
                      </FormControl>
                      <FormLabel className="font-normal">No</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="businessPlan"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>
                  Do you have a business plan?
                  <span className="text-red-400">*</span>
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    disabled={isPending}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem
                          className="border-background text-background"
                          value="yes"
                        />
                      </FormControl>
                      <FormLabel className="font-normal">Yes</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem
                          className="border-background text-background"
                          value="no"
                        />
                      </FormControl>
                      <FormLabel className="font-normal">No</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="howMany"
            render={({ field }) => (
              <FormItem>
                <FormLabel>If Yes How many</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    className="bg-gray-800 border-gray-900 focus:border-gray-700 focus:ring-gray-700 focus-visible:ring-0 ring-offset-0 active:bg-gray-900"
                    placeholder="Enter the your team member if any..."
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="businessCurrently"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex justify-between items-center">
                  <p className="flex">
                    What stage is your business currently at?
                    <span className="text-red-400">*</span>
                  </p>
                  <HoverCard>
                    <HoverCardTrigger>
                      <Info />
                    </HoverCardTrigger>
                    <HoverCardContent className="max-w-[35rem] w-[28rem] bg-gray-800 text-background/80">
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          <h4 className="text-base font-semibold">
                            Idea Stage:
                          </h4>
                          <p className="text-xs">
                            Developing the initial business concept and
                            assessing its feasibility through market research.
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <h4 className="text-base font-semibold">
                            Proof of Concept/ Prototype:
                          </h4>
                          <p className="text-xs">
                            Creating a minimal version of the product to test
                            core features and gather initial feedback.
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <h4 className="text-base font-semibold">
                            Early Growth/ Revenue:
                          </h4>
                          <p className="text-xs">
                            Launching the product, generating initial sales, and
                            focusing on customer acquisition and scaling
                            operations.
                          </p>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="bg-gray-800 border-gray-900 focus:border-gray-700 focus:ring-gray-700 focus-visible:ring-0 ring-offset-0 active:bg-gray-900">
                      <SelectValue placeholder="Select an the stage your business is currently at." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-gray-900 text-white">
                    <SelectItem value="Idea Stage">Idea Stage</SelectItem>
                    <SelectItem value="Proof of Concept/ Prototype">
                      Proof of Concept/ Prototype
                    </SelectItem>
                    <SelectItem value="Early Growth/ Revenue">
                      Early Growth/ Revenue
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="remainInAkure"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>
                  Do you agree to remain in Akure for the duration of the
                  Incubator? (6 Months)
                  <span className="text-red-400">*</span>
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem
                          className="border-background text-background"
                          value="yes"
                        />
                      </FormControl>
                      <FormLabel className="font-normal">Yes</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem
                          className="border-background text-background"
                          value="no"
                        />
                      </FormControl>
                      <FormLabel className="font-normal">No</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={isPending}
            className="bg-[#ffba00] hover:bg-[#f9c22a] text-gray-900"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
