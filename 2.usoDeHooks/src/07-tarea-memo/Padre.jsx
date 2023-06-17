import React , { useCallback , useState } from 'react'
import { Hijo } from './Hijo'

export const Padre = () => {

      const numeros = [ 2 , 4 , 6 , 8 , 10 ];
      const [ valor , setValor ] = useState ( 0 );

      const incrementar = useCallback ( ( num ) => {
            setValor ( (current )=> current + num );
      } , [] )


      const initialTodos = {
            id:1,
            todo:'Learn React',
            done:false
      }

      const todoReducer = (estadoInicial = initialTodos , action) => {
            return estadoInicial;
      }

      let todos = todoReducer();
      console.log (todos)
      

      return (
          <div>
                <h1>Padre</h1>
                <p> Total: { valor } </p>

                <hr/>

                {
                      numeros.map ( n => (
                          <Hijo
                              key={ n }
                              numero={ n }
                              incrementar={ incrementar }
                          />
                      ) )
                }
                {/* <Hijo /> */ }
          </div>
      )
}
