import { z } from "zod";

export const loginValidationSchema = z
  .object({
    email: z.string().email({ message: "Неверная почта" }),
    password: z
      .string()
      .trim()
      .min(4, { message: "Минимальная длина 4 символа" }),
  })
  .required();
