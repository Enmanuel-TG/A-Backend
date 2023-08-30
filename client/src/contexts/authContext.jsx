import { createContext, useState, useContext } from "react";
import { registerRequest, loginRequest } from "../api/auth";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe estar dentro del proveedor AuthContext");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);

  const singUp = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res.data);
      setUser(res.data.user);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
      setErrors(error.response.data);
      if (error.response.status >= 400 && error.response.status <= 500) {
        return alert("auth error " + error.response.data.message);
      } else if (error.response.status > 500) {
        alert("Error unknown " + error.response.data.message);
      }
    }
  };
  const singin = async (user) => {
    try {
      const res = await loginRequest(user);
      console.log(res);
    } catch (error) {
      setErrors(  error.response.data )
    }
  };
  return (
    <AuthContext.Provider
      value={{
        singUp,
        singin,
        user,
        isAuthenticated,
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
