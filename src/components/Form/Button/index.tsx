import { ButtonProps } from "./types";

import { Btn } from "./styles";

export default function Button({
  children,
  size = "md",
  fullSize = false,
  color = "primary",
  icon,
  ...props
}: ButtonProps) {
  return (
    <Btn size={size} fullSize={fullSize} color={color} {...props}>
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </Btn>
  );
}
