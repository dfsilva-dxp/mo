import { BrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";
import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Login />
    </BrowserRouter>
  );
}

export default App;
