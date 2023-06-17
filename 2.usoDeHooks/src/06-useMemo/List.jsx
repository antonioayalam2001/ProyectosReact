import { Item } from "./Item.jsx";
import React , { useEffect } from "react";

//memo -> Memoriza un componente con base en sus propiedades
//Soluciona el problema de la renderización en caso de que el input de Main cambie
//Si damos click al boton estamos mandando nuevas propiedades por lo que si hay render nuevo

export const List = React.memo ( ( { usersList , handleDelete } ) => {
      useEffect ( () => {
            console.log ( 'UsersList render' );
      } );
      return (
          <div>
                { usersList.map ( user => <Item key={ user.id } { ...user } handleDelete = {handleDelete}/> ) }
          </div>
      )
} )