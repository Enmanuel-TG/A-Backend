import { z } from "zod";

export const createTaskSchema = z.object({
  title: z.string({
    required_error: "Tittle is requiered",
  }),
  description: z
    .string({
      required_error: "Description is required and must to be a string",
    }),
  date: z.string().datetime().optional(),
});
