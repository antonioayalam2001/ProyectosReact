import { useCallback , useEffect , useMemo , useRef , useState } from "react";
import { List } from "./List";

const initialUsers = [
      { id : 1 , name : 'Antonio' , lastName : 'Mora' } ,
      { id : 2 , name : 'Tony' , lastName : 'Ayala' } ];

export const MainApp = () => {
      const inputRef = useRef ();
      const input = inputRef.current;
      const [ users , setUsers ] = useState ( initialUsers );
      const [ search , setSearch ] = useState ( "" );
      const [ text , setText ] = useState ( "" );

      useEffect ( () => {
            console.log ( 'MainApp render' )
      } );

      const printUsers = useCallback ( () => {
            //Dado que manipula un estado debemos implementarlo en un useCallback
            //[] -> Memoriza el estado de users de la primera vez
            //[users] -> Mandandolo como dependencia podra cambiar tambien conforme cambia el estado
            console.log ( 'changed Users' , users )
      } , [users] );

      useEffect ( () => {
            // console.log ( 'changed Users' )
            printUsers ();
      } , [ users , printUsers ] );


      function handleAdd () {
            const newUser = {
                  id : Date.now () ,
                  name : input.value , lastName : 'Ayala'
            };
            setUsers ( [ ...users , newUser ] );
      }

      function handleSearch () {
            setSearch ( text );
      }

      const filteredUsersMemo = useMemo ( () => users.filter ( user => {
            //esta implementación hace que al momento de que hay un cambio en el input se realice
            // solo la renderización del componente y no la ejecución del proceso
            // console.log ( 'filtered Process' )
            return user.name.toLowerCase ().includes ( search.toLowerCase ().trim () )
            //      Debemos agregar esas dependencias, dado que si no no habra cambio en el componente
      } ) , [ search , users ] );

      // const handleDelete = ( userId ) => {
      //       setUsers ( users.filter ( user => user.id !== userId ) );
      // }

      const handleDeleteCallback = useCallback ( ( userId ) => {
            setUsers ( users.filter ( user => user.id !== userId ) );
            //En las dependencias indicamos los estados en los cuales debe volver a
            //memorizar la definition de la function
      } , [ users ] );


      return (
          <div className={ 'container mt-5' }>
                <input ref={ inputRef } type="text" value={ text } onChange={ e => setText ( e.target.value ) } placeholder={ 'Name' }/>
                <button className={ 'btn btn-outline-secondary  text-center text-uppercase m-2' } onClick={ handleAdd }>Add new user</button>
                <button className={ 'btn btn-outline-secondary  text-center text-uppercase m-2' } onClick={ handleSearch }>Handle search</button>
                {/*<List usersList={ filteredUsers }/>*/ }
                {/*Nuestro input genera la renderización constante del componente, por lo que handleDelete cambia
                de direction de memoria siempre que hay una renderización, recordemos que es como un apuntador
                */ }
                {/*<List usersList={ filteredUsersMemo } handleDelete={ handleDelete }/>*/ }
                <List usersList={ filteredUsersMemo } handleDelete={ handleDeleteCallback }/>
          </div>
      )
}

