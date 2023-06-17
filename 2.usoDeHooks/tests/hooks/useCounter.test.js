import { act , renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/index.js";

describe ( 'Pruebas del Hook useCounter' , function () {
      test ( `Should return default values` , () => {

            //      Necesitamos una importación especial para la prueba de Hooks
            //      Retorna la información del estado del Hook
            const { result } = renderHook ( () => {
                  return useCounter ();
            } );
            const { counter , increment , decrement , reset } = result.current;

            //Valor por defecto que retorna en caso de que no sea mandado
            expect ( counter ).toBe ( 1 );
            //Comprobando que sean funciones
            expect ( increment ).toEqual ( expect.any ( Function ) );
            expect ( decrement ).toEqual ( expect.any ( Function ) );
            expect ( reset ).toEqual ( expect.any ( Function ) );
      } );

      test ( `Should return the counter with the value of 100` , () => {

            //      Necesitamos una importación especial para la prueba de Hooks
            //      Retorna la información del estado del Hook
            const { result } = renderHook ( () => {
                  return useCounter ( 100 );
            } );

            const { counter } = result.current;

            //Valor por defecto que retorna en caso de que no sea mandado
            expect ( counter ).toBe ( 100 );
      } );

      test('Counter should increment', () => {
            //      Necesitamos una importación especial para la prueba de Hooks
            //      Retorna la información del estado del Hook
            const { result } = renderHook ( () => {
                  return useCounter ();
            } );
            const { counter , increment , decrement , reset } = result.current;

            /* +++++++++++++++++++++++++++++++++++
            Cuando hagamos una prueba en un Hook que
            actualizar un estado debemos utilizar act
            ++++++++++++++++++++++++++++++++++++*/
            act( () => {
                  /* +++++++++++++++++++++++++++++++++++
                  Se esta realizando el incremento de nuestro counter
                  Pero counter es un valor const, por lo que no es actualizado
                  Debemos accder directamente al valor del result
                  counter = 1
                  result.current.counter = 1
                  increment()
                  counter = 1
                  result.current.counter = 2
                  ++++++++++++++++++++++++++++++++++++*/
                  increment()
            })

            //Valor por defecto que retorna en caso de que no sea mandado
            expect ( result.current.counter ).toBe ( 2 );
      })

      test('Counter should increment', () => {
            //      Necesitamos una importación especial para la prueba de Hooks
            //      Retorna la información del estado del Hook
            const { result } = renderHook ( () => {
                  return useCounter (10);
            } );
            const { counter , increment , decrement , reset } = result.current;

            act( () => {
                  decrement()
                  decrement()
                  decrement()
            })

            //Valor por defecto que retorna en caso de que no sea mandado
            expect ( result.current.counter ).toBe ( 7 );
      })
      test('Counter should reset to the initial value when the function is invoked', () => {
            //      Necesitamos una importación especial para la prueba de Hooks
            //      Retorna la información del estado del Hook
            const { result } = renderHook ( () => {
                  return useCounter (10);
            } );
            const { counter , increment , decrement , reset } = result.current;

            act( () => {
                  increment();
                  increment();
                  increment();
                  reset();
            });

            //Valor por defecto que retorna en caso de que no sea mandado
            expect ( result.current.counter ).toBe ( 10 );
      })
} );