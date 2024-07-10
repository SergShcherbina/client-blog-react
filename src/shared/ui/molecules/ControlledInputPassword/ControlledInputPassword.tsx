import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";

import {
  InputPassword,
  IPropsInputPassword,
} from "./InputPassword/InputPassword.tsx";

type Props<T extends FieldValues> = UseControllerProps<T> &
  Omit<IPropsInputPassword, "onChange" | "onBlur" | "value" | "ref">;

export const ControlledInputPassword = <T extends FieldValues>({
  name,
  control,
  ...fieldProps
}: Props<T>) => {
  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
  });

  return (
    <InputPassword
      {...fieldProps}
      name={name}
      onChange={onChange}
      value={value}
    />
  );
};
