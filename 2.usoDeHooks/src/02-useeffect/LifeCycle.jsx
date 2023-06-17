import { useEffect , useState } from "react";

console.log ( 'Pre Render -> Solo se ejecuta una vez ' )

export const LifeCycle = () => {
      console.log ( 'Logic Render' )

      const [ counter1 , setCounter1 ] = useState ( 0 );
      const [ counter2 , setCounter2 ] = useState ( 0 );

      useEffect ( () => {
            console.log ( 'Use Effect Sin dependencias -> Siempre se ejecuta' )
            return () => {
                  console.log ( 'Cleanup useEffect Sin Dependencias' )
            }
      } );

      useEffect ( () => {
            console.log ( 'Use effect con dependencia vacía [] Solo una vez ' )
            return () => {
                  //Solo se limpia hasta que sea desmontado completamente
                  console.log ( 'CleanUp useEffect []' )

            };
      } , [] );

      useEffect ( () => {
            console.log ( 'UseEffect con dependencia de counter1' )
            return () => {
                  console.log ( 'Cleanup useEffect Counter1' )
            }
      } , [ counter1 ] )
      useEffect ( () => {
            console.log ( 'UseEffect con dependencia de counter2' );
            return () => {
                  console.log ( 'Cleanup useEffect Counter 2' )
            }
      } , [ counter2 ] )


      console.log ( 'Return render (Dibujando el DOM)' )
      return (
          <>
                <h3>counter 1 : { counter1 }</h3>
                <h3>counter 2 : { counter2 }</h3>
                <button
                    className={ 'btn btn-secondary text-white p-3 m-2' }
                    onClick={ e => {
                          setCounter1 ( counter1 + 1 )
                    } }> Add 1 to the counter 1
                </button>
                <button
                    className={ 'btn btn-primary text-white p-3 m-2' }
                    onClick={ e => {
                          setCounter2 ( counter2 + 1 )
                    } }>Add 1 to the counter 2
                </button>

          </>
      )
}