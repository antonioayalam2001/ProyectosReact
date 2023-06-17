import React from 'react';
import useCounter from "../hooks/useCounter.js";

CounterWithCustomHook.propTypes = {};

function CounterWithCustomHook ( props ) {

      const { counter , increment , decrement , reset } = useCounter (20);

      return (
          <div>
                <h1 >Counter with Hook { counter }</h1>
                <hr/>
                <button className={ "btn btn-primary m-4" } onClick={ (event)=>{increment(10)} }>1</button>
                <button className={ "btn btn-primary m-4" } onClick={ reset}>Reset</button>
                <button className={ "btn btn-primary m-4" } onClick={ (event)=> decrement(10) }>-1</button>
          </div>
      );
}

export default CounterWithCustomHook;