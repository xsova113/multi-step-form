"use server";

import { prisma } from "@/prisma/client";
import { UserForm } from "@prisma/client";

const createForm = async (data: UserForm) => {
  try {
    await prisma.userForm.create({
      data,
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default createForm;
