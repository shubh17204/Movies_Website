import React, { useContext, useState } from "react";
import Ufetch from "./Ufetch";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("hacker");
  const { loading, error, movie } = Ufetch(`&s=${query}`);

  return (
    <AppContext.Provider value={{ query, movie, setQuery, loading, error }}>
      {children}
    </AppContext.Provider>
  );
};

const GetContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, GetContext };
