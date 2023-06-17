import React , { useState } from 'react';

CounterApp.propTypes = {};

function CounterApp ( props ) {
      const [ counter , setCounter ] = useState ( {
            counter1 : 10 ,
            counter2 : 10 ,
            counter3 : 10
      } );
      const { counter1 , counter2 , counter3 } = counter
      return (
          <>
                <h1>Counter: { counter1 }</h1>
                <h1>Counter: { counter2 }</h1>
                <h1>Counter: { counter3 }</h1>
                <hr/>
                <button className={ "btn btn-dark" } onClick={ () => {
                      setCounter ( { ...counter , counter1 : counter1 + 1 } )
                } }>+
                </button>
                <button className={ "btn btn-primary m-2" }
                        onClick={ () => {
                              setCounter ( { ...counter , counter1 : counter1 - 1 } )
                        } }
                >-
                </button>
          </>
      );
}

export default CounterApp;