import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ClientRoutes, PublicRoutes, AdminRoutes } from "./routes/Routes";
import { RoleChecker, ProtectedRoute } from "./middleware/RouteProtected";
function App() {
  return (
    //creamos las rutas principales de la web luego  importamos
    //el archivop de las rutas la cual contiene ya cada ruta en especifico
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" />}></Route>
        <Route path="*" element={<PublicRoutes />}></Route>
        <Route
          path="/cliente/*"
          element={
            <ProtectedRoute>
              <RoleChecker requiredRole={"cliente"}>
                <ClientRoutes />
              </RoleChecker>
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/empleado/*"></Route>
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute>
              <RoleChecker requiredRole="admin" >
                <AdminRoutes />
              </RoleChecker>
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
