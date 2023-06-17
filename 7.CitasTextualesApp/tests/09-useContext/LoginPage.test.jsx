import { fireEvent , render , screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/UserContext.jsx";

describe ( 'Tests in component LoginPage' , function () {
      const user = {
            id : 1 ,
            username : 'Antonio'
      };
      const setUser = jest.fn();

      test ( 'The function setUser must have been called when the button has been clicked' , () => {

            render (
                <UserContext.Provider value={{user, setUser}}>
                      <LoginPage/>
                </UserContext.Provider>
            );

            const button = screen.getByRole('button',{name:'Set User'});
            fireEvent.click(button);
            expect(setUser).toHaveBeenCalled();

      } )

      test ( 'The function should not show any user ' , () => {

            render (
                <UserContext.Provider value={{user:null, setUser}}>
                      <LoginPage/>
                </UserContext.Provider>
            );

            const preTest = screen.getByLabelText('preTest');
            expect(preTest.innerHTML).toBe('null');

      } );

} );