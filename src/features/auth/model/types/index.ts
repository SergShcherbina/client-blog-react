import { z } from "zod";

import { loginValidationSchema, signUpValidationSchema } from "../validation";

//Form
export type LoginFormType = z.infer<typeof loginValidationSchema>;

export type SignUpFormType = z.infer<typeof signUpValidationSchema>;
