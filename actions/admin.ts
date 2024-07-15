"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const getAllForm = async () => {
  const coach = await db.coach.findMany({
    orderBy: { createdAt: "desc" },
  });

  revalidatePath("/auth/admin");

  return coach;
};
