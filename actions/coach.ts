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
export const createEntre = async (values: any) => {
  if (!values) return { error: "Invalids fields!" };

  console.log(values);

  try {
    const existingEmail = await db.entrepreneur.findUnique({
      where: { email: values.email },
    });
    if (existingEmail) return { error: "Invalid fields!" };
    await db.entrepreneur.create({
      data: {
        ...values,
        type: "ENTREPRENEUR",
      },
    });
    return { success: "Successfully saved!" };
  } catch (error) {
    console.log(error);
    return { error: "Sorry! Something went wrong" };
  }
};
