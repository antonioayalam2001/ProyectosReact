import { ToDoItem } from "./ToDoItem";
import { AnimatePresence, motion } from "framer-motion";


export const ToDoList = ( { todos = [] , onDeleteToDo , onToggleToDo , onEditToDo } ) => {
      return (
          <>
                <motion.ul className={ 'list-group  ' } transition={ { duration : 0.5 , delayChildren:0.4 }}>
                      <AnimatePresence>
                            { todos.map ( todo => <ToDoItem key={ todo.id } { ...todo } deleteToDo={ id => onDeleteToDo ( id ) } onToggleToDo={ onToggleToDo } onEditToDo={ onEditToDo }/> ) }
                      </AnimatePresence>
                </motion.ul>
          </>
      )
}