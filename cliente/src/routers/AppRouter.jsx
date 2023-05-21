import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../componentes/Login";
import Home from "../componentes/Home";
import Register from "../componentes/Register";
import routes from "../helpers/routes";
import Menu from "../componentes/Menu";
import PrivateRoutes from "./privateRoutes";
import NotFound from "../componentes/NotFound";
import PublicRoutes from "./publicRoutes";
import ForgotPassword from "../componentes/ForgotPassword";
import ResetPassword from "../componentes/ResetPassword";
import ResetRoutes from "./resetRoutes";
import IMCCalculator from "../componentes/IMCCalculator";
import CardList from "../componentes/CardList";
import Favoritos from "../componentes/Favoritos";
import ContactMe from "../componentes/ContactMe";
import CalculaCalorias from '../componentes/CalculaCalorias';
import PlanesEntrenamiento from "../componentes/PlanesEntrenamiento";
import Perfil from "../componentes/Perfil";
import Administracion from "../componentes/Administracion";
import PantallaNutricion from "../componentes/PantallaNutricion";
import SiteMap from "../componentes/SiteMap";


export default function AppRouter() {
  return (

    //El prop "element" se utiliza para especificar el componente que se renderizará cuando la ruta coincida.

    <Routes>
      
        {/*router dom publico , cualquiera puede acceder a estas rutas, sin que este logeado*/}
      <Route path={routes.principal} element={<PublicRoutes />}>
      
        <Route path={routes.principal} element={<Home />}></Route>
        <Route path={routes.login} element={<Login />}></Route>
        <Route path={routes.register} element={<Register />}></Route>
        <Route  path={routes.forgotpassword} element={<ForgotPassword />}></Route>

      </Route>


      {/*router dom para controlar quien acceso a resetpassword */}
      <Route path={routes.principal} element={<ResetRoutes />}>
        <Route path={routes.resetpassword} element={<ResetPassword />}></Route>
      </Route>


  {/*router dom para controlar quien acceso a parte privada de la web, se ha tenido que logear antes */}
      <Route path={routes.principal} element={<PrivateRoutes />}>

        <Route path={routes.menu} element={<Menu />}></Route>
        <Route path={routes.imcCalculator} element={<IMCCalculator/>}></Route>
        <Route path={routes.cardlist} element={<CardList/>}></Route>
        <Route path={routes.favoritos} element={<Favoritos/>}></Route>
        <Route path={routes.contactme} element={<ContactMe/>}></Route>
        <Route path={routes.calculacalorias} element={<CalculaCalorias/>}></Route>
        <Route path={routes.pantallanutricion} element={<PantallaNutricion/>}></Route>
        <Route path={routes.planesentrenamiento} element={<PlanesEntrenamiento/>}></Route>
        <Route path={routes.perfil} element={<Perfil/>}></Route>
        <Route path={routes.administracion} element={<Administracion/>}></Route>
        <Route path={routes.sitemap} element={<SiteMap/>}></Route>

      </Route>
{/*ruta publica a la que todos tienen accesso, aparte de las rutas publicas, sin estar sujetas a sus reglas */}
      <Route path={routes.home} element={<Home/>}></Route>
      <Route path="*" element={<NotFound />}></Route>

    </Routes>
  );
}
