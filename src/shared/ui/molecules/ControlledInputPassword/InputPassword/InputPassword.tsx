import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  FilledInput,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import type { FilledInputProps } from "@mui/material/FilledInput/FilledInput";
import IconButton from "@mui/material/IconButton";
import { ChangeEventHandler, FC, useState } from "react";
import { Noop } from "react-hook-form";

export type IPropsInputPassword = {
  name: string;
  label?: string;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  value: string;
  onBlur?: Noop;
  errorMessage?: string;
  defaultValue?: string;
} & FilledInputProps;

export const InputPassword: FC<IPropsInputPassword> = ({
  label,
  errorMessage,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <FormControl variant="filled">
      <InputLabel
        htmlFor={`filled-adornment-${rest.name}`}
        error={!!errorMessage}
      >
        {label}
      </InputLabel>
      <FilledInput
        {...rest}
        id={`filled-adornment-${rest.name}`}
        type={showPassword ? "text" : "password"}
        error={!!errorMessage}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        // label={label}
      />
      <FormHelperText
        id={`filled-adornment-${rest.name}`}
        error={!!errorMessage}
      >
        {errorMessage?.toString()}
      </FormHelperText>
    </FormControl>
  );
};
