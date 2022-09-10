import { users } from "@prisma/client";

export type authBody = Omit<users, "id">;