import { createContext, useContext, useState } from "react";
const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);
export const AppContext = ({ children }) => {
  const [user, setUser] = useState("hosea");
  const logout = () => {
    setUser("");
  };

  return (
    <GlobalContext.Provider value={{ user, setUser, logout }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default AppContext;
