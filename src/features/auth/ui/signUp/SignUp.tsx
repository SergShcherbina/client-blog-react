import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { signUpThunk, userSelectors } from "../../../../entites";
import {
  ControlledInputPassword,
  CustomAlert,
  CustomLink,
  Path,
  useAppDispatch,
  useAppSelector,
} from "../../../../shared";
import type { SignUpFormType } from "../../model";
import { signUpValidationSchema } from "../../model/";
import s from "./SignUp.module.scss";

export const SignUp = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const errorMessageFromServer = useAppSelector(
    userSelectors.authErrorSelectors,
  );

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<SignUpFormType>({
    resolver: zodResolver(signUpValidationSchema),
  });

  const onSubmit = (data: SignUpFormType) => {
    const { email, password } = data;
    //чтобы работала isSubmitting нужно возвращать promise
    return dispatch(signUpThunk({ email, password }))
      .unwrap()
      .then(() => {
        navigate(Path.LOGIN);
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

        <ControlledInputPassword
          name={"confirmPassword"}
          label={"Повторите пароль"}
          control={control}
          errorMessage={errors.confirmPassword?.message}
        />

        <Button
          color={isSubmitting ? "success" : "primary"}
          variant={"contained"}
          size={"large"}
          type={"submit"}
          disabled={!isValid || isSubmitting}
        >
          {"Зарегистрироваться"}
        </Button>

        <div>
          <Typography component="span"> {"Уже зарегистрированы?"} </Typography>
          <CustomLink to={Path.LOGIN}>{"Войти"}</CustomLink>
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
