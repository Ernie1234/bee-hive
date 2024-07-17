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
export const getAllEntrepreneur = async () => {
  const entre = await db.entrepreneur.findMany({
    orderBy: { createdAt: "desc" },
  });

  return entre;
};
export const getEntrepreneurById = async (id: string) => {
  const entre = await db.entrepreneur.findUnique({
    where: { id },
  });

  return entre;
};
