import { z } from "zod";

export const registerScheme = z.object({
  username: z.string({
    required_error: "Username is requiered",
  }),
  email: z
    .string({
      required_error: "Email is requierd",
    })
    .email({
      message: "Invalid email",
    }),
  password: z
    .string({
      required_error: "password is required",
    })
    .min(4, { message: "password must to be least 4 characters" }),
});

export const loginSchema = z.object({
  email: z
    .string({ required_error: "email is required"})
    .email({ message: "invalid email" }),
  password: z
    .string({ required_error: "password is required" })
    .min(4, { message: "password must to be least 4 characters" }),
});
