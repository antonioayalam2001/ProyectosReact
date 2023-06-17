const initialState = [ {
      id : 1 , todo : 'Get soul stone' , done : false
} ];


//Siempre debe recibir una accion
//En caso de no pasar un estado, le asignamos el inicial
//@action -> Forma en que deseamos modificar nuestro Reducer
const todoReducer = ( state = initialState , action = {} ) => {
      if ( action.type === '[TODO] add todo' ) {
            return [ ...state , action.payload ];
      } else if (action.type === '[TODO] delete one Todo'){
            return [state.filter(todo => todo.id !== action.payload)]
      } else{
            //Siempre debe retornar un estado
            return state;
      }
};


let todos = todoReducer ();
const newToDo = {
      id : 2 , todo : 'Get power stone' , done : false
};
const newToDo1 = {
      id : 3 , todo : 'Get power stone' , done : false
};
const newToDo2 = {
      id : 4 , todo : 'Get power stone' , done : false
};
const newToDo3 = {
      id : 5 , todo : 'Get power stone' , done : false
};
/* +++++++++++++++++++++++++++++++++++
Las acciones tienen como proposito modificar
el estado de nuestro Reducer
++++++++++++++++++++++++++++++++++++*/
const addTodoAction = {
      type : '[TODO] add todo' ,
      //El pppayload no siempre ese manda dado que en ocasiones no es requerido
      payload : newToDo ,
};
const addTodoAction2 = {
      type : '[TODO] add todo' ,
      //El pppayload no siempre ese manda dado que en ocasiones no es requerido
      payload : newToDo1 ,
};

todos = todoReducer ( todos , addTodoAction );
todos = todoReducer ( todos , addTodoAction2 );

console.log ( { state : todos } );

const deleteTodoAction = {
      type:'[TODO] delete one Todo',
      payload : 2
}

todos = todoReducer(todos,deleteTodoAction);

console.log (todos);

console.log (initialState)