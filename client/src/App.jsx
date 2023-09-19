import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPages from "./pages/RegisterPage";
import LoginPages from "./pages/LoginPage";
import { AuthProvider } from "./contexts/authContext";
import TasksPage from "./pages/TasksPage";
import TaskFormPage from "./pages/TaskFormPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRouter from "./ProtectedRouter";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/*Si pones  un * en el path cual url que no existe te  lleva a ese elemento "Es como si fuera  un valor por default" */}
          <Route path="/register" element={<RegisterPages />} />
          <Route path="/login" element={<LoginPages />} />
          <Route element={<ProtectedRouter />}>
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/add-tasks" element={<TaskFormPage />} />
            <Route path="/tasks/:id" element={<TaskFormPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
