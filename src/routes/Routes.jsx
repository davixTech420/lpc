import React from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "../components/pages/publicPages/Welcome";
import Condiciones from "../components/pages/publicPages/Condiciones";
import Teatros from "../components/pages/publicPages/Teatros";
import PublicLogin from "../components/pages/publicPages/PublicLogin";

//aca se manejan todas las rutas publica donde todo el mundo puede ver
export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/welcome" element={<Welcome />}></Route>
      <Route path="/condiciones" element={<Condiciones />}></Route>
      <Route path="/teatros" element={<Teatros />}></Route>
      <Route path="/loginPublic" element={<PublicLogin />}></Route>
      
    </Routes>
  );
};

export const ClientRoutes = () => {
  return(
    <Routes>
      <Route path="/login"></Route>
    </Routes>

  );

};
