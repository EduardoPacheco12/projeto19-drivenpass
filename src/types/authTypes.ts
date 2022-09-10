import { users } from "@prisma/client";

export type usersPrismaSchema = users;

export type authBody = Omit<users, "id">;