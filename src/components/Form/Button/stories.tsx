import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";
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
  args: {
    size: "md",
    color: "primary",
    fullSize: false
  }
} as Meta;

export const Basic: Story<ComponentProps<typeof Button>> = ({ ...props }) => (
  <Button {...props}>Enter</Button>
);

export const WithIcon: Story<ComponentProps<typeof Button>> = ({
  ...props
}) => <Button {...props}>Buy now</Button>;

WithIcon.args = {
  icon: <TiShoppingCart />
};
