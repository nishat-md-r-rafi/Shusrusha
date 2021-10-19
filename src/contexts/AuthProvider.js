import React, { createContext } from "react";
import useFirebase from "../components/hooks/useFirebase";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const allContexts = useFirebase();
  console.log(allContexts);
  return (
    <AuthContext.Provider value={allContexts}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
