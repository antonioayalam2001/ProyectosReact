import { useForm } from "../hooks/index.js";
import { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion"

export const ToDoItem = ( { id , description , done , deleteToDo , onToggleToDo , onEditToDo } ) => {

      function completeToDo ( e ) {
            onToggleToDo ( id );
      }

      const { formField : { todo } , handleChange } = useForm ( { todo : description } )
      const [ changed , setChanged ] = useState ( false );

      const buttonVariants = {
            normalBg : {
                  backgroundColor : '#fff'  ,
                  color : 'black'
            },
            pushedBg : {
                  backgroundColor : 'rgba(255,75,155,0.87)'  ,
                  color : 'white'
            },
            tap : {
                  scale : 0.6
            } , hover : {
                  scale : 1.1
            }
      }

      function changeToDo ( e ) {
            if ( todo !== description ) {
                  const editedToDo = {
                        id ,
                        description : todo.trim ()
                  };
                  onEditToDo ( editedToDo );
                  if ( done ) {
                        onToggleToDo ( id );
                  }
                  setChanged ( true );
                  setTimeout ( () => {
                        setChanged ( false )
                  } , 1500 );
            }
      }

      return (
          <>
                <motion.li className={ 'list-group-item d-flex justify-content-between align-content-center flex-wrap' }
                           layoutId={ id }
                           initial={ { x : -300 , opacity : 0 } }
                           animate={ { x : 0 , opacity : 1 } }
                           exit={ { x : -400 , opacity : 0 } }
                >

                      <motion.input className={ `form-control align-self-center ${ done ? 'text-decoration-line-through ' : 'text-dark' }` }
                                    whileFocus={ { scale : 1.1 } }
                                    onDoubleClick={ e => completeToDo ( e ) } value={ todo } name={ 'todo' } onChange={ handleChange }
                      />

                      { !done && <button className="btn btn-dark align-self-center spacing" onClick={ e => {
                            deleteToDo ( id )
                      } }>Delete to do</button> }
                      { changed &&
                          <motion.p initial={ { opacity : 0 , y : -100 } } animate={ { opacity : 1 , y : 0 } } transition={ { type : 'tween' , delay : 0 , times : [ 0 , 0.2 ] , duration : 1.2 } }
                                    className={ 'align-self-center' }>The value has been changed</motion.p> }
                      <motion.button className="btn btn-dark align-self-center spacing"
                                     variants={ buttonVariants }
                                     animate={changed ? 'normalBg' : 'pushedBg'}
                                     whileTap="tap"
                                     whileHover="hover"
                                     transition={{duration : 0.3}}
                                     onClick={ e => {
                                           changeToDo ( e );
                                     } }>Change ToDo
                      </motion.button>

                </motion.li>
          </>
      )
}

/* +++++++++++++++++++++++++++++++++++
Marcando las propiedades como requeridas
++++++++++++++++++++++++++++++++++++*/


ToDoItem.propTypes =
    {
          id : PropTypes.number.isRequired ,
          description : PropTypes.string.isRequired ,
          done : PropTypes.bool.isRequired ,
          deleteToDo : PropTypes.func.isRequired ,
          onToggleToDo : PropTypes.func ,
          onEditToDo : PropTypes.func.isRequired ,
    }
