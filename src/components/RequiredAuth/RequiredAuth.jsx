import { Navigate } from "react-router-dom";

import { useAuth } from "../../utils/auth";

export const RequiredAuth = ({ children }) => {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/login" />;
  }

  return children;
};
