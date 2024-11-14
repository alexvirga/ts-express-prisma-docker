import { Request, Response } from "express";
import prisma from "../utils/prisma";

export const getUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
};

export const createUser = async (req: Request, res: Response) => {
  const { email, name } = req.body;
  try {
    const newUser = await prisma.user.create({
      data: { email, name },
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "User creation failed" });
  }
};
