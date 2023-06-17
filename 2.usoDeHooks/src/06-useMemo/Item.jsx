import { memo , useEffect } from "react";

//Utilizamos memo para evitar la renderización de todos los items cuando se genera la
//inserción de un nuevo usuario

export const Item = memo ( ( { id , name , lastName , handleDelete } ) => {
      useEffect ( () => {
            console.log ( `Item Render ${ name }` );
      } );
      return (
          <>
                <h3>{ name }</h3>
                <h3>{ id }</h3>
                <p>{ lastName }</p>
                <button className={ 'btn btn-outline-secondary  text-center text-uppercase m-2' } onClick={ () => handleDelete ( id ) }>Delete search</button>
          </>
      )
} )