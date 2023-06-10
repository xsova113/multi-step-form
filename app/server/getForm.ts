"use server";

import { prisma } from "@/prisma/client";

const getForm = async () => {
  try {
    return await prisma.userForm.findMany();
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

export default getForm;
