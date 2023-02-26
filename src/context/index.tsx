import React, { useContext, useState } from "react";

type IContextProps = {
  username: string;
  setUsername: (name: string) => void;
};

const Context = React.createContext<IContextProps | null>(null);

export const ContextProvider: React.FunctionComponent<React.PropsWithChildren> = ({ children }) => {
  const [username, setUsername] = useState<string>("");

  const contextProps = {
    username,
    setUsername,
  };

  return <Context.Provider value={contextProps}>{children}</Context.Provider>;
};

export const useAppContext = () => {
  const context = useContext(Context);

  return context;
};
