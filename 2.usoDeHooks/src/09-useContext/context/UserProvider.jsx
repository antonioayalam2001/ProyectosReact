import { UserContext } from "./UserContext";
import { useState } from "react";

export const UserProvider = ( { children } ) => {
      const [ user , setUser ] = useState ();
      return (
          //Podemos seguir insertando mas código, se visualiza en todas las páginas
          //value : Todos podran acceder a ese valor
          //Generalmente se retorna un objeto
          <UserContext.Provider value={ { user ,setUser } }>
                { children }
          </UserContext.Provider>
      )
}