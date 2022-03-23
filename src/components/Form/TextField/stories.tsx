import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";
import { TiMail } from "react-icons/ti";

import TextField from ".";

export default {
  title: "Form/TextField",
  component: TextField,
  argTypes: {
    onInput: { action: "input" },
    iconPosition: {
      options: ["left", "right"],
      control: { type: "select" }
    },
    icon: {
      control: { type: "" }
    }
  },
  args: {
    label: "E-mail",
    labelFor: "email",
    id: "email",
    initialValue: "",
    placeholder: "jhon.doe@email.com",
    disabled: false,
    iconPosition: "left"
  },
  parameters: {
    layout: "centered"
  }
} as Meta;

export const Basic: Story<ComponentProps<typeof TextField>> = ({
  ...props
}) => <TextField {...props} icon={<TiMail />} />;
