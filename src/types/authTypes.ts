import { users } from "@prisma/client";

export type SignUpBody = Omit<users, "id">;