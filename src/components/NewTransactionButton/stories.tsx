import { ComponentStory, ComponentMeta } from "@storybook/react";
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
  },
  decorators: [
    (Story) => (
      <div style={{ width: "37rem" }}>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof NewTransactionButton>;

export const Basic: ComponentStory<typeof NewTransactionButton> = ({
  ...props
}) => <NewTransactionButton {...props} />;
