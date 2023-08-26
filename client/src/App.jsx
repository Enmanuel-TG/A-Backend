import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPages from "./pages/RegisterPage";
import LoginPages from "./pages/LoginPages";
import { AuthProvider } from "./contexts/authContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          {/*Si pones  un * en el path cual url que no existe te  lleva a ese elemento "Es como si fuera  un valor por default" */}
          <Route path="/register" element={<RegisterPages />} />
          <Route path="/login" element={<LoginPages />} />
          <Route path="/tasks" element={""} />
          <Route path="/add-tasks" element={""} />
          <Route path="/tasks/:id" element={""} />
          <Route path="/profile" element={""} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
