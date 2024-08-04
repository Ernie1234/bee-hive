"use server";

import { launchFormSchema } from "@/lib/data";
import { db } from "@/lib/db";
import * as z from "zod";

export const lauchAction = async (values: z.infer<typeof launchFormSchema>) => {
  const validatedValues = launchFormSchema.safeParse(values);
  if (validatedValues.error) return { error: "Invalids fields!" };

  await db.launch.create({
    data: {
      ...validatedValues.data,
    },
  });

  return { success: "Your application was success!" };
};
