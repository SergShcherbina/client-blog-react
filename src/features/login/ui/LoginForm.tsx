import { zodResolver } from "@hookform/resolvers/zod";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { ControlledInputPassword, CustomLink, Path } from "../../../shared";
import { schema } from "../model/validationSchema.ts";
import s from "./LoginForm.module.scss";

type FormDataType = z.infer<typeof schema>;

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormDataType) => {
    console.log("LoginForm:", data);
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

        <Button
          color={"primary"}
          variant={"contained"}
          size={"large"}
          type={"submit"}
        >
          {"Войти"}
        </Button>

        <div>
          <Typography component="span"> {"Ещё нет аккаунта?"} </Typography>
          <CustomLink to={Path.SIGNUP}>{"Зарегистрироваться"}</CustomLink>
        </div>
      </form>
    </div>
  );
};
