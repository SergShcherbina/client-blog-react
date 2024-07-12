import { z } from "zod";

export const signUpValidationSchema = z
  .object({
    email: z.string().email({ message: "Неверная почта" }),
    password: z
      .string()
      .trim()
      .min(4, { message: "Минимальная длина 4 символа" }),
    confirmPassword: z
      .string()
      .trim()
      .min(4, { message: "Минимальная длина 4 символа" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароль не совпадает",
    path: ["confirmPassword"],
  });
