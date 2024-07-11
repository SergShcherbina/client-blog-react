import { zodResolver } from "@hookform/resolvers/zod";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { ControlledInputPassword, CustomLink, Path } from "../../../shared";
import { signUpSchema } from "../model/signUpSchema.ts";
import s from "./SignUp.module.scss";

type SignUpType = z.infer<typeof signUpSchema>;

export const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpType>({ resolver: zodResolver(signUpSchema) });

  const onSubmit = (data: FormDataType) => {
    console.log("SignUp:", data);
  };

  return (
    <div className={s.wrapperForm}>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name={"email"}
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <TextField
              {...field}
              helperText={errors.email?.message}
              error={!!errors.email?.message}
              label={"эл. почта"}
              variant={"filled"}
            />
          )}
        />

        <ControlledInputPassword
          name={"password"}
          label={"Пароль"}
          control={control}
          errorMessage={errors.password?.message}
        />

        <ControlledInputPassword
          name={"confirmPassword"}
          label={"Повторите пароль"}
          control={control}
          errorMessage={errors.confirmPassword?.message}
        />

        <Button
          color={"primary"}
          variant={"contained"}
          size={"large"}
          type={"submit"}
        >
          {"Войти"}
        </Button>

        <div>
          <Typography component="span"> {"Уже зарегистрированы?"} </Typography>
          <CustomLink to={Path.LOGIN}>{"Войти"}</CustomLink>
        </div>
      </form>
    </div>
  );
};
