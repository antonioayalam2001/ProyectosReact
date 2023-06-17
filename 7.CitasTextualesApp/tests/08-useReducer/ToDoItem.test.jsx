import { ToDoItem } from "../../src/08-useReducer/ToDoItem";
import { fireEvent , render , screen } from "@testing-library/react";

describe ( 'Tests in component Item' , function () {
      const deleteToDo = jest.fn ();
      const onToggleToDo = jest.fn ();
      const onEditToDo = jest.fn ();
      test ( 'Testing the funciont are being received by the props' , () => {

            //Pasando props a nuestro componente
            render ( <ToDoItem description={ 'Description of the assignment' } id={ 1 } done={ false } onEditToDo={ onEditToDo } onToggleToDo={ onToggleToDo } deleteToDo={ deleteToDo }/> )

      } )

      test ( 'Must show the todo pending to complete' , () => {
            render ( <ToDoItem description={ 'Pending action number 1' } id={ 1 } done={ false } onEditToDo={ onEditToDo } onToggleToDo={ onToggleToDo } deleteToDo={ deleteToDo }/> )
            expect ( screen.getByRole ( 'textbox' ).value ).toBe ( 'Pending action number 1' );

      } );

      test ( 'ToDo must appear with a line trough id completed ' , () => {
            render ( <ToDoItem description={ 'Pending action number 1' } id={ 1 } done={ true } onEditToDo={ onEditToDo } onToggleToDo={ onToggleToDo } deleteToDo={ deleteToDo }/> )
            // screen.debug()
            const liElement = screen.getByRole('listitem');
            expect(liElement.className).toBe('list-group-item d-flex justify-content-between align-content-center flex-wrap');
            const input = screen.getByRole('textbox');
            expect(input.className).toContain('text-decoration-line-through');
      } )


      test('Input must call onToggleToDo when a click has been made on itself', () => {
            const id = 1;

            render ( <ToDoItem description={ 'Pending action number 1' } id={ id } done={ true } onEditToDo={ onEditToDo } onToggleToDo={ onToggleToDo } deleteToDo={ deleteToDo }/> )

            const input = screen.getByRole('textbox');
            fireEvent.doubleClick(input);

            expect(onToggleToDo).toHaveBeenCalledWith(id);
      })

      test('Button must call the deleteToDo whit the correct id', () => {
            const id = 1;

            render ( <ToDoItem description={ 'Pending action number 1' } id={ id } done={ false } onEditToDo={ onEditToDo } onToggleToDo={ onToggleToDo } deleteToDo={ deleteToDo }/> )

            const button = screen.getByRole('button',{name: 'Delete to do'});
            fireEvent.click(button);
            expect(deleteToDo).toHaveBeenCalledWith(id);
      })

} );