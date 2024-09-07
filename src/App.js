import "./App.css";
import { useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import {
  ClientRoutes,
  PublicRoutes,
  AdminRoutes,
  JefeRoutes,
  EmpleadoRoutes,
} from "./routes/Routes";
import { RoleChecker, ProtectedRoute } from "./middleware/RouteProtected";
import WhatComponent from "./components/pages/component/WhatComponent";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

const CurtainTransition = ({ children }) => {
  const location = useLocation();

  const variants = {
    initial: { opacity: 0, scale: 1.05 },
    enter: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.05 },
  };

  return (
    <motion.div
      key={location.pathname}
      initial="initial"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      style={{ overflow: "hidden" }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  return (
    //creamos las rutas principales de la web luego  importamos
    //el archivop de las rutas la cual contiene ya cada ruta en especifico
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" />}></Route>

        {/* estas son las rutas publicas la cual contiene el boton de whatsapp */}
        <Route
          path="*"
          element={
            <>
              <CurtainTransition>
                <PublicRoutes /> <WhatComponent />
              </CurtainTransition>
            </>
          }
        >
          {" "}
        </Route>

        {/* estas rutas estan protegidas dependiedno su rol y token */}
        <Route
          path="/cliente/*"
          element={
            <>
              <ProtectedRoute>
                <RoleChecker requiredRole={"cliente"}>
                  <ClientRoutes /> <WhatComponent />
                </RoleChecker>
              </ProtectedRoute>
            </>
          }
        ></Route>
        <Route
          path="/empleado/*"
          element={
            <ProtectedRoute>
              <RoleChecker requiredRole={"empleado"}>
                <EmpleadoRoutes />
              </RoleChecker>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/jefe/*"
          element={
            <ProtectedRoute>
              <RoleChecker requiredRole={"jefesala"}>
                <JefeRoutes />
              </RoleChecker>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute>
              <RoleChecker requiredRole="admin">
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
