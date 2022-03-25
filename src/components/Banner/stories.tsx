import { ComponentStory, ComponentMeta } from "@storybook/react";

import Banner from ".";

export default {
  title: "Header/Banner",
  component: Banner,
  argTypes: {},
  args: {
    title: "Bem-vindo (a) ao Mo.!",
    description: "Nós te ajudamos a manter seus SONHOS...",
    short_description: "...e seu dinheiro querendo mais dinheiro!",
    image_url: "./img/personal-finance.svg"
  },
  parameters: {
    layout: "centered"
  },
  decorators: [
    (Story) => (
      <div style={{ width: "87rem", height: "24rem" }}>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof Banner>;

export const Basic: ComponentStory<typeof Banner> = ({ ...props }) => (
  <Banner {...props} />
);
