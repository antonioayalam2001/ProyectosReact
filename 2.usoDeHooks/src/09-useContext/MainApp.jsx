import { Navigate , Route , Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { LoginPage } from "./LoginPage";
import { NavBar } from "./NavBar";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
      return (
          //Consumiento contexto
          <UserProvider>
                <div className={ 'container-fluid' }>
                      <NavBar/>
                      <hr/>
                      {/*      Definiendo Rutas en un HigherOrderComponent*/ }
                      <Routes>
                            <Route path={ '/' } element={ <HomePage/> }/>
                            <Route path={ 'login' } element={ <LoginPage/> }/>
                            <Route path={ 'about' } element={ <AboutPage/> }/>

                            {/*En caso de que se intente acceder a una ruta que no existe siempre
                              mandata a donde estemos especificando
                               */ }
                            {/*Navigate -> Apenas se renderiza realiza la navegación al path especificado to
                              Es como realizar una renderización
                              */ }
                            <Route path={ '/*' } element={ <Navigate to={ '/about' }/> }/>
                      </Routes>
                      <hr/>

                </div>
          </UserProvider>
      )
}