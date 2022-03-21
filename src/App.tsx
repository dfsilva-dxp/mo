import { ThemeProvider } from "styled-components";

import { GlobalStyles, theme } from "styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <h1>Mo app</h1>
    </ThemeProvider>
  );
}

export default App;
