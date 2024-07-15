"use server";

import { db } from "@/lib/db";

export const createCoach = async (values: any) => {
  if (!values) return { error: "Invalids fields!" };

  const existingEmail = await db.coach.findUnique({
    where: { email: values.email },
  });
  if (existingEmail) return { error: "Invalid fields!" };

  await db.coach.create({
    data: {
      ...values,
      type: "COACH",
    },
  });

  return { success: "Successfully saved!" };
};
