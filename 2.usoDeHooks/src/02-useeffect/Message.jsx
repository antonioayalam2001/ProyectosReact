import React , { useEffect , useState } from 'react';
import useLocalStorage from "../hooks/useLocalStorage.js";

Message.propTypes = {};

function Message ( props ) {
      const  [coords , setCoords ] = useLocalStorage ( 'coords'  )

      useEffect ( () => {
            const onMouseMove = ( { x , y } ) => {
                  const coords = { x , y };
                  setCoords ( coords );
            }

            window.addEventListener ( 'mousemove' , onMouseMove )

            return () => {
                  window.removeEventListener ( 'mousemove' , onMouseMove );
                  console.log ( 'Message Unmounted' )
            }
      } , [] );

      return (
          <>
                <h3>User already Exists</h3>
                <h2>Coords</h2>
                <p>{ coords.x }</p>
                <p>{ coords.y }</p>
          </>
      );
}

export default Message;