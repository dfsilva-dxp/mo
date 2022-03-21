import { ThemeProvider } from "styled-components";

import { GlobalStyles, theme } from "../src/styles";

export const parameters = {
  backgrounds: {
    default: "moapp-dark",
    values: [
      {
        name: "moapp-dark",
        value: theme.colors.background
      }
    ]
  }
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBg />
      <Story />
    </ThemeProvider>
  )
];
