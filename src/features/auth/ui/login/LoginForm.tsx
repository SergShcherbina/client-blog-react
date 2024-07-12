import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { loginThunk, userSelectors } from "../../../../entites";
import {
  ControlledInputPassword,
  CustomAlert,
  CustomLink,
  Path,
  useAppDispatch,
  useAppSelector,
} from "../../../../shared";
import type { LoginFormType } from "../../model";
import { loginValidationSchema } from "../../model";
import s from "./LoginForm.module.scss";

export const LoginForm = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const errorMessageFromServer = useAppSelector(
    userSelectors.authErrorSelectors,
  );
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<LoginFormType>({ resolver: zodResolver(loginValidationSchema) });

  const onSubmit = async (data: LoginFormType) => {
    await dispatch(loginThunk(data))
      .unwrap()
      .then(() => {
        navigate(Path.MAIN);
      })
      .catch(() => {
        setOpen(true);
      });
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
          disabled={!isValid || isSubmitting}
        >
          {"Войти"}
        </Button>

        <div>
          <Typography component="span"> {"Ещё нет аккаунта?"} </Typography>
          <CustomLink to={Path.SIGNUP}>{"Зарегистрироваться"}</CustomLink>
        </div>
      </form>

      <CustomAlert
        open={open}
        onClose={() => setOpen(false)}
        severity={"error"}
        message={errorMessageFromServer}
      />
    </div>
  );
};
