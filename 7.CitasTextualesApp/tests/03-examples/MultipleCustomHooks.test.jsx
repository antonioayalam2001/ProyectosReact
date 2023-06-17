import { fireEvent , render , screen } from "@testing-library/react";
import MultipleCustomHooks from "../../src/03-Examples/MultipleCustomHooks.jsx";
import { useCounter , useFetch } from "../../src/hooks/index.js";

jest.mock ( "../../src/hooks/useFetch.js" );
jest.mock ( '../../src/hooks/useCounter' );

describe ( 'Test in Multiple Custom Hooks' , function () {
      //Simulando una función
      const mockIncrement = jest.fn ();
      /* +++++++++++++++++++++++++++++++++++
      Nuestro Hook nos retorna el valor del contador, así como la función de incremento
      a la cual pasamos como parametro nuestra función simulada
      ++++++++++++++++++++++++++++++++++++*/
      useCounter.mockReturnValue ( { counter : 1 , increment : mockIncrement } );

      /* +++++++++++++++++++++++++++++++++++
      Resetear pruebas
      Limpiando nuestro Mock
      ++++++++++++++++++++++++++++++++++++*/
      beforeEach( () => {
            jest.clearAllMocks();
      })

      test ( 'Must show the default component' , () => {
            useFetch.mockReturnValue ( { data : null , isLoading : true , hasError : null } );

            render ( <MultipleCustomHooks/> );

            expect ( screen.getByText ( 'Is Loading please wait ...' ) );
            // expect ( screen.getByText ( 'Inspirational Quotes for the Day' ) );

            //Name : Es aquel texto que contiene dentro nuestro button
            /* +++++++++++++++++++++++++++++++++++
            <button className="btn btn-light p-3 m-2"
            onClick={ () => increment () }
             disabled={ isLoading }>
             Next Quote                                 ----------------->NAME
             </button>
            ++++++++++++++++++++++++++++++++++++*/
            const nextButton = screen.getByRole ( 'button' , { name : 'Next Quote' } )
            // console.log (nextButton);
            // console.log (nextButton.className.split(' '));

            expect ( nextButton.disabled ).toBe ( true );
            // screen.debug ();

      } )

      test ( 'Must show a quote' , () => {
            //
            useFetch.mockReturnValue ( {
                  data : [ { author : 'Tunas' , quote : 'Life is easy bitch' } ] , isLoading : false , hasError : null
            } );

            render ( <MultipleCustomHooks/> );

            //La quote debe existir
            expect ( screen.getByText ( 'Life is easy bitch' ) ).toBeTruthy ();
            //      Autor debe existir

            const nextButton = screen.getByRole ( 'button' , { name : 'Next Quote' } )
            // console.log (nextButton);
            // console.log (nextButton.className.split(' '));

            expect ( nextButton.disabled ).toBe ( false );
            screen.debug ();
      } );

      test ( 'Must call the increment function' , () => {

            useFetch.mockReturnValue ( {
                  data : [ { author : 'Tunas' , quote : 'Life is easy bitch' } ] , isLoading : false , hasError : null
            } );

            render ( <MultipleCustomHooks/> );

            const nextButton = screen.getByRole ( 'button' , { name : 'Next Quote' } )
            fireEvent.click ( nextButton );

            expect ( mockIncrement ).toHaveBeenCalled ()

      } )
} )