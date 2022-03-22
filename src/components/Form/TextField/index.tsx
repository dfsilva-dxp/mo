import { TextFieldProps } from "./types";

import { Group, Icon, Input, Label, Wrapper } from "./styles";
import { ChangeEvent, useState } from "react";

export default function TextField({
  label = "",
  labelFor = "",
  icon,
  initialValue = "",
  iconPosition,
  disabled = false,
  onInput,
  ...props
}: TextFieldProps) {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setValue(value);

    !!onInput && onInput(value);
  };

  return (
    <Wrapper disabled={disabled}>
      {!!label && <Label htmlFor={labelFor}>{label}</Label>}
      <Group>
        {!!icon && <Icon iconPosition={iconPosition}>{icon}</Icon>}
        <Input
          type="text"
          {...props}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      </Group>
    </Wrapper>
  );
}
