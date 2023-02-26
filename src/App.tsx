import { ContextProvider } from "./context";
import { GlobalStyles } from "./GlobalStyles";
import { Routes } from "./Routes";

const App: React.FunctionComponent = () => {
  return (
    <ContextProvider>
      <GlobalStyles />
      <Routes />
    </ContextProvider>
  );
};

export default App;
