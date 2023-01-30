import { Navigate } from "react-router-dom";

export const RequiredAuth = ({ children }) => {
  if (!localStorage.getItem("accessToken")) {
    return <Navigate to="/login" />;
  }

  return children;
};
