import { useCounter } from "../hooks/index.js";
import { useMemo , useState } from "react";

function heavyProcess ( numberIterations ) {
      for ( let i = 0 ; i < numberIterations ; i++ ) {
            console.log ( 'Current Process in work' )
      }
      return <h4>Returning the number of times we have make this {numberIterations }</h4>
}

export const MemoHook = () => {

      const { counter , increment , decrement , reset } = useCounter ( 10 );
      const [ show , setShow ] = useState ( true );
      const useMemo1 = useMemo ( () => {
      //      Memoriza lo que sea que retorne a menos que las dependencias cambien
            return heavyProcess(counter);
      } , [counter] )
      //Arreglo vacio -> Solo memoriza la primera vez


      return (
          <>
                <div className={ 'container' }>
                      <h1>Memorize</h1>
                      <h3>Counter <small>{ counter }</small></h3>

                      <button className={ 'btn btn-primary m-1' } onClick={ () => increment ( 1 ) }>Increment</button>
                      <button className={ 'btn btn-primary' } onClick={ () => decrement ( 1 ) }>Decrement</button>

                      <div>Valor de { useMemo1 }</div>

                      <h3>Show : { JSON.stringify ( show ) }</h3>

                      <button className={ 'btn btn-secondary' } onClick={ () => setShow ( !show ) }>Toggle Show</button>

                </div>
          </>
      )
}