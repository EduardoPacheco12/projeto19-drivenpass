import { credentials } from "@prisma/client";

export type credentialsPrismaSchema = credentials;

export type credentialsBody = Omit<credentials, "id" | "userId">