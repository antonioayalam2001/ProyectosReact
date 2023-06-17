import { render , screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe ( 'Tests in component HomePage' , function () {
      const user = {
            id : 1 ,
            username : 'Antonio'
      };

      test ( 'Must show component without user' , () => {
            render (
                <UserContext.Provider value={ { user : null } }>
                      <HomePage/>
                </UserContext.Provider> );
            // screen.debug ();
            const preTag = screen.getByLabelText ( 'preTest' );

            expect ( preTag.innerHTML ).toBe ( 'null' );

      } )

      test ( 'Must show component with the user' , () => {
            render (
                <UserContext.Provider value={ { user } }>
                      <HomePage/>
                </UserContext.Provider> );
            // screen.debug ();
            const preTag = screen.getByLabelText ( 'preTest' );

            expect ( ( JSON.parse ( preTag.innerHTML ) ) ).toEqual ( user );

      } )
} );