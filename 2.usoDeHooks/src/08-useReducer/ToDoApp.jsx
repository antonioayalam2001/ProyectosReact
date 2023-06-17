import { ToDoList } from "./ToDoList";
import { FormAdd } from "./FormAdd";
import { useTodo } from "../hooks/useTodo.js";
import { motion } from "framer-motion"


const initialState = [];

export const ToDoApp = () => {
      /* +++++++++++++++++++++++++++++++++++
      dispatch -> Cuando solamente tenemos un Reducer
      dispatchToDo -> En caso de que tuviéramos más Reducers para no confundir
      ++++++++++++++++++++++++++++++++++++*/
      // const [ todos , dispatch ] = useReducer ( todoReducer , initialState , init );
      const {
            todos , handleCompleteToDo ,
            handleOnNewTodo , handleDeleteToDo ,
            handleEditToDo , pendingTasks , totalTodos
      } = useTodo ();

      return (
          <motion.div className={ 'container ' } initial={ { opacity : 0 } } animate={ { opacity : 1 } } transition={ { duration : 3 } }>
                <h1>ToDoApp { totalTodos } <br/> <small>pending tasks : { pendingTasks } </small></h1>
                <hr/>

                <div className="row d-sm-flex flex-sm-column flex-sm-column-reverse align-items-center gap-5">
                      <motion.div className="col-sm-12 col-md-7 " animate={ { scale : [ 0 , 1 ] , } } transition={ {
                            duration : 4 , ease : [ 0 , 0.71 , 0.2 , 1.01 ]
                      } }>

                            <ToDoList todos={ todos } onDeleteToDo={ handleDeleteToDo } onToggleToDo={ handleCompleteToDo } onEditToDo={ handleEditToDo }/>

                      </motion.div>
                      <div className="col-sm-12 col-md-5 ">
                            <h4>Add to Do</h4>
                            <hr/>

                            <FormAdd addTodo={ ( value ) => handleOnNewTodo ( value ) }/>

                      </div>
                </div>

          </motion.div>
      )
}