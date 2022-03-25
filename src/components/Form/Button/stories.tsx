import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TiShoppingCart } from "react-icons/ti";

import Button from ".";

export default {
  title: "Form/Button",
  component: Button,
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "select" }
    },
    color: {
      options: ["primary", "darkgray", "lightgray"],
      control: { type: "select" }
    },
    icon: {
      control: { type: "" }
    }
  },
  parameters: {
    layout: "centered"
  },
  args: {
    size: "md",
    color: "primary",
    fullSize: false
  },
  decorators: [
    (Story) => (
      <div style={{ width: "37rem" }}>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof Button>;

export const Basic: ComponentStory<typeof Button> = ({ ...props }) => (
  <Button {...props}>Enter</Button>
);

export const WithIcon: ComponentStory<typeof Button> = ({ ...props }) => (
  <Button {...props}>Buy now</Button>
);

WithIcon.args = {
  icon: <TiShoppingCart />
};
