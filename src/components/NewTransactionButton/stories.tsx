import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";
import { TiPlus } from "react-icons/ti";

import NewTransactionButton from ".";

export default {
  title: "NewTransactionButton",
  component: NewTransactionButton,
  argTypes: {},
  parameters: {
    layout: "centered"
  },
  args: {
    label: "Gerar nova transação",
    description: "Movimentações de entradas e saídas",
    icon: <TiPlus />
  }
} as Meta;

export const Basic: Story<ComponentProps<typeof NewTransactionButton>> = ({
  ...props
}) => (
  <div style={{ width: "37rem" }}>
    <NewTransactionButton {...props} />
  </div>
);
