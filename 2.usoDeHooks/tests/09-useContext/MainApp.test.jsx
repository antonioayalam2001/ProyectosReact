import { render , screen } from "@testing-library/react";
import { MainApp } from "../../src/09-useContext/MainApp.jsx";
import { MemoryRouter } from "react-router-dom";

describe ( 'Tests in component MainApp' , function () {
      
      test ( 'Must show home page when you are in the /' , () => {
            //Las pruebas en rutas deben ser realizadas con MemoryRouter
            render (
                <MemoryRouter>
                      <MainApp/>
                </MemoryRouter>
            );

            expect(screen.getByText('Welcome to the Main Page')).toBeTruthy();

      } );

      test ( 'Must show the login Page page when you are in the /' , () => {
            /* +++++++++++++++++++++++++++++++++++
            initialEntries={[]} Espera un arreglo con la
            simulación de la ruta a la que debe llegar
            ++++++++++++++++++++++++++++++++++++*/
            render (
                <MemoryRouter initialEntries={['/login']}>
                      <MainApp/>
                </MemoryRouter>
            );
            // screen.debug()
            expect(screen.getByText('LoginPage')).toBeTruthy();

      } );
} );