import {
  FieldValues,
  PathValue,
  useController,
  UseControllerProps,
} from "react-hook-form";

import {
  InputPassword,
  IPropsInputPassword,
} from "./InputPassword/InputPassword";

type Props<T extends FieldValues> = UseControllerProps<T> &
  Omit<IPropsInputPassword, "onChange" | "onBlur" | "value" | "ref">;

export const ControlledInputPassword = <T extends FieldValues>({
  name,
  control,
  defaultValue,
  ...fieldProps
}: Props<T>) => {
  //TODO: fix
  const defaultV: PathValue<IPropsInputPassword, "defaultValue"> = "";

  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
    defaultValue: defaultV,
  });

  return (
    <InputPassword
      {...fieldProps}
      defaultValue={defaultValue}
      name={name}
      onChange={onChange}
      value={value}
    />
  );
};
