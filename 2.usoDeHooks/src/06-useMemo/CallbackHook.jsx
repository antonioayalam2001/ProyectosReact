import { useCallback , useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
    console.log('counter changed main component');
      const [ counter , setCounter ] = useState ( 10 )

      function incrementCounter () {
            setCounter ( counter + 1 )
      }
      // Memoriza funciones
      // Retorna una función que podamos ejecutar
      // La función memorizada SOLO se ejecuta cuando algo cambia
      const incrementCounterCallback = useCallback ( () => {
            setCounter ( ( current ) => current + 1 );
            //También memoriza el counter, por lo que solo se ejecutaría una vez
      } , [] );

      return (
          <div className={ 'container' }>
                <h1>Hello from Callback Hook </h1>
                <h2>Counter { counter }</h2>
                {/*<ShowIncrement increment={ () => setCounter ( counter + 1 ) }/>*/ }
                <ShowIncrement increment={ incrementCounterCallback }/>
                {/*<button className={ 'btn btn-outline-secondary  text-center text-uppercase' } onClick={ () => setCounter ( counter + 1 ) }>Counter { counter }</button>*/ }
          </div>
      )
}