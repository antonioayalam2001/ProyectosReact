import { render , screen } from "@testing-library/react";
import { ToDoApp } from "../../src/08-useReducer/ToDoApp";
import { useTodo } from "../../src/hooks/useTodo.js";

jest.mock ( '../../src/hooks/useTodo.js' );


describe ( 'Tests in ToDoApp component' , function () {
      test ( 'Must show the component in the correct way' , () => {

            useTodo.mockReturnValue ( {
                  todos : [
                        { id : 1 , description : 'Complete the test section in the component' , done : false } ,
                        { id : 2 , description : 'Complete the section' , done : true }
                  ] ,
                  handleCompleteToDo : jest.fn () ,
                  handleOnNewTodo : jest.fn () ,
                  handleDeleteToDo : jest.fn () ,
                  handleEditToDo : jest.fn () ,
                  pendingTasks : 1 ,
                  totalTodos : 2
            } )

            render ( <ToDoApp/> )
            // screen.debug ();

            const input = screen.getAllByRole ( 'textbox' );
            const element = input.filter ( input => input.value === 'Complete the test section in the component' )[ 0 ];

            expect ( element.value ).toBeTruthy ();


      } )
} );