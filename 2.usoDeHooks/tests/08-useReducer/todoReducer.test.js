import { todoReducer } from "../../src/08-useReducer/todoReducer.js";

describe ( 'Tests in todo Reducer' , function () {
      const initialState = [{id:1,description:'test in todo reducer',done:false}];

      test ( 'Must return initial state' , () => {
            const newState = todoReducer(initialState,{});
            expect(newState).toBe(initialState);
      } );

      test('Add todo', () => {
            const newTodo = {id:2,description:'Add a new todo',done:false};
            const action = {type:'[TODO] Add',payload:newTodo}

            const result = todoReducer(initialState,action);

            expect(result.length).toBeGreaterThan(1);

            //Verificando que nuestro nuevo estado tenga el payload que mandamos
            expect(result).toContain(action.payload);
      })

      test('Delete todo', () => {
            const newTodo = {id:2,description:'Add a new todo',done:false};
            const actionAdd = {type:'[TODO] Add',payload:newTodo}
            const actionDelete = {type:'[TODO] Delete',payload:1}

            let result = todoReducer(initialState,actionAdd);
            // console.log (result)

            result = todoReducer(result,actionDelete);

            // console.log (result)

            expect(result.length).toBeLessThan(2);

      })

      test('Toggle todo', () => {
            const actionToggle = {type:'[TODO] Complete',payload:1}

            let result = todoReducer(initialState,actionToggle);
            console.log (result)

            expect(result.length).toBeLessThan(2);

      })

} )