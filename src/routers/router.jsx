import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { UseEffectPage } from "../components/pages/UseEffectPage";

export const MyRoutes = () => (
  // General
  <BrowserRouter>
    <Routes>
      {/* path: ruta a nivel del link http://localhost:5173/ */}
      {/* Ruta del Home */}
      <Route path="/" element={<Home />} />
      {/* Ruta del login */}
      <Route path="/Login" element={<Login />} />
      {/* Ruta del UseEffectPage */}
      <Route path="/useeffect" element={<UseEffectPage />} />
      {/* Ruta para página no encontrada */}
      <Route path="*" element={<Page404 />} />
    </Routes>
  </BrowserRouter>
);
