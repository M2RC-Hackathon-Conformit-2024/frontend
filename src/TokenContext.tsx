import React, { createContext, useContext, useState, ReactNode } from "react";

// Définit les types pour le contexte
type TokenContextType = {
  token: string;
  setToken: (token: string) => void;
};

const TokenContext = createContext<TokenContextType | undefined>(undefined);

// Définit les props pour le TokenProvider
type TokenProviderProps = {
  children: ReactNode;
  initialToken: string;
};

export const TokenProvider: React.FC<TokenProviderProps> = ({ children, initialToken }) => {
  const [token, setToken] = useState(initialToken);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

// Hook pour utiliser le contexte du token
export const useToken = (): TokenContextType => {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error("useToken doit être utilisé à l'intérieur de TokenProvider");
  }
  return context;
};
