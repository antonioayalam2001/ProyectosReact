import { useForm } from "../hooks/index.js";
import { motion } from "framer-motion"
export const FormAdd = ( { addTodo } ) => {
      const { formField : { todo } , handleChange , onResetForm } = useForm ( { todo : '' } )

      const onFormSubmit = ( e ) => {
            e.preventDefault ()
            if ( todo.trim () !== '' && todo.length !== 0 ) {
                  const newTodo = {
                        id : new Date ().getTime () * 3 ,
                        description : todo ,
                        done : false
                  };
                  addTodo ( newTodo )
                  onResetForm(e);
            }
      };

      return (
          <>
                <form>
                      <motion.input type="text" name={ 'todo' }   whileTap={{ scale: 0.9 }}
                                    placeholder={ 'What to do' } className={ 'form-control-sm form-control' } onChange={ handleChange } value={ todo }/>
                      <button className="btn btn-outline-light mt-3 text-bg-primary text-white" type={ "submit" } onClick={ onFormSubmit }>Add New To Do
                      </button>
                </form>
          </>
      )
}