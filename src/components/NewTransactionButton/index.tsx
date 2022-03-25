import { NewTransactionButtonProps } from "./types";

import { Button, Wrapper } from "./styles";

export default function NewTransactionButton({
  label,
  description,
  icon,
  ...props
}: NewTransactionButtonProps) {
  return (
    <Button {...props}>
      {icon}
      <Wrapper>
        {label}
        <span>{description}</span>
      </Wrapper>
    </Button>
  );
}
