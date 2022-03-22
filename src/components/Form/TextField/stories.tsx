import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";
import { TiMail } from "react-icons/ti";

import TextField from ".";

export default {
  title: "Form/TextField",
  component: TextField,
  argTypes: {
    onInput: { action: "input" }
  },
  args: {
    id: "email",
    placeholder: "john.doe@gmail.com",
    disabled: false
  },
  parameters: {
    layout: "centered"
  }
} as Meta;

export const Basic: Story<ComponentProps<typeof TextField>> = ({
  ...props
}) => <TextField {...props} />;

export const WithoutIcon: Story<ComponentProps<typeof TextField>> = ({
  ...props
}) => <TextField {...props} />;

WithoutIcon.argTypes = {
  iconPosition: {
    options: ["left", "right"],
    control: { type: "select" }
  }
};

WithoutIcon.args = {
  label: "Without Icon",
  labelFor: "withoutIcon",
  id: "withoutIcon",
  placeholder: "Your placeholder"
};

export const WithIcon: Story<ComponentProps<typeof TextField>> = ({
  ...props
}) => <TextField {...props} icon={<TiMail />} />;

WithIcon.argTypes = {
  iconPosition: {
    options: ["left", "right"],
    control: { type: "select" }
  }
};

WithIcon.args = {
  iconPosition: "left",
  label: "With Icon",
  labelFor: "withIcon",
  id: "withIcon",
  placeholder: "Your placeholder"
};
