import { useAuth } from "./contexts/authContext";
import { Navigate, Outlet } from "react-router-dom";
export default function ProtectedRouter() {
  const { loading, isAuthenticated } = useAuth();

  if (loading) {
    return (
    <h1>Loading...</h1>
    )
   }
  if (!loading && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
