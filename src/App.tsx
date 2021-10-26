import { BrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";

import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Dashboard />
    </BrowserRouter>
  );
}

export default App;
