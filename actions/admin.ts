"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

//GET ALL COACH DETAILS
export const getAllCoach = async () => {
  const coach = await db.coach.findMany({
    orderBy: { createdAt: "desc" },
  });

  revalidatePath("/auth/admin");

  return coach;
};
//GET A COACH DETAILS BY ID
export const getCoachById = async (id: string) => {
  const coach = await db.coach.findUnique({
    where: { id },
  });

  return coach;
};
//GET ALL ENTREPRENEUR DETAILS
export const getAllEntrepreneur = async () => {
  const entre = await db.entrepreneur.findMany({
    orderBy: { createdAt: "desc" },
  });

  return entre;
};
//GET A ENTREPRENEUR DETAILS BY ID
export const getEntrepreneurById = async (id: string) => {
  const entre = await db.entrepreneur.findUnique({
    where: { id },
  });

  return entre;
};
