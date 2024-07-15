"use server";

import { db } from "@/lib/db";

export const getAllForm = async () => {
  const coach = await db.coach.findMany({
    orderBy: { createdAt: "desc" },
  });
  return coach;
};
