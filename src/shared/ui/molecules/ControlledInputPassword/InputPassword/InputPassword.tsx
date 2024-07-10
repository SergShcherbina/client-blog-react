import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  FilledInput,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { ChangeEventHandler, FC, useState } from "react";
import { Noop } from "react-hook-form";

export type IPropsInputPassword = {
  name: string;
  label?: string;
  // ref: RefCallBack;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  value: string;
  onBlur?: Noop;
  errorMessage?: string;
  defaultValue?: string;
};

export const InputPassword: FC<IPropsInputPassword> = ({
  label,
  errorMessage,
  defaultValue = "",
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
      <InputLabel htmlFor="filled-adornment-password" error={!!errorMessage}>
        {label}
      </InputLabel>
      <FilledInput
        {...rest}
        defaultValue={defaultValue}
        id="filled-adornment-password"
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
      <FormHelperText id="filled-adornment-password" error={!!errorMessage}>
        {errorMessage?.toString()}
      </FormHelperText>
    </FormControl>
  );
};
