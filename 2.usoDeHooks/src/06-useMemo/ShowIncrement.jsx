import React , { memo } from "react";

export const ShowIncrement = memo ( ( { increment} ) => {
      console.log ( 'Show increment rendered again because of the function' )
      return (
          <>
                <button className={ 'btn btn-outline-secondary  text-center text-uppercase' } onClick={ ()=>{increment()}  }>Counter plus 1</button>
          </>
      )
} )