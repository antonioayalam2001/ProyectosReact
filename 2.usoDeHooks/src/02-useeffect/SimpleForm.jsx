import React , { useEffect , useState } from 'react';
import Message from "./Message.jsx";

SimpleForm.propTypes = {};

function SimpleForm ( props ) {
      const [ inputValue , setInputValue ] = useState ( {
            username : "Antonio" ,
            email : "antonioayalam2001@gmail.com"
      } )

      const { username , email } = inputValue;

      function handleChange ( { target } ) {
            const { name , value } = target;
            setInputValue ( {
                  ...inputValue ,
                  [ name ] : value
            } );
      }

      useEffect ( () => {
            // console.log ("use Effect when email changes");
      } , [ email ] )
      useEffect ( () => {
            // console.log ("use Effect executed");
            return () => {
                  // console.log ('Component unmounted')
            }
      } , [] )

      function confirmInformation ( e ) {
            e.preventDefault ();
      }

      return (
          <>
                <h1>Simple form</h1>
                <hr/>
                <form action="">

                      <input type="text"
                             className={ "form-control" }
                             placeholder={ "Username" }
                             name={ "username" }
                             value={ username }
                             onChange={ handleChange }
                      />
                      <input type="email"
                             className={ "form-control mt-4" }
                             placeholder={ "antonioayalam2001@gmail.com" }
                             name={ "email" }
                             value={ email }
                             onChange={ handleChange }
                      />
                      <button type={ "submit" } onClick={ confirmInformation }>Confirm information</button>
                </form>
                <hr/>
                <hr/>
                { username === 'Antonio' && <Message/> }

          </>
      );
}

export default SimpleForm;