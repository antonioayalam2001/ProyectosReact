import { useCounter } from "../hooks/index.js";
import { Small } from "./Small";
import { useState } from "react";

export const Memorize = () => {
      const { counter , increment , decrement , reset } = useCounter ( 10 );
      const [ show , setShow ] = useState ( true );
      return (
          <>
                <div className={ 'container' }>
                      <h1>Memorize</h1>
                      {/*Si no utilizamos useMemo en el componente de Small provocamos que el
                      boton de Switch redibuje el componente y eso no debe suceder
                      */}

                      <h3>Counter <Small value={ counter }/></h3>

                      <button className={ 'btn btn-primary m-1' } onClick={ () => increment ( 1 ) }>Increment</button>
                      <button className={ 'btn btn-primary' } onClick={ () => decrement ( 1 ) }>Decrement</button>


                      <h3>Show : { JSON.stringify ( show ) }</h3>

                      <button className={ 'btn btn-secondary' } onClick={ () => setShow ( !show ) }>Toggle Show</button>

                </div>
          </>
      )
}