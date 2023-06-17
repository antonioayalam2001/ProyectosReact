import React from 'react';
import { useForm } from "../hooks/useForm.js";

FormWithCustomHook.propTypes = {};

export default function FormWithCustomHook (  props ) {
      const { formField : { username , email , password } , handleChange , onResetForm } = useForm ( {
            username : "" ,
            email : "" ,
            password : ""
      } )

      function confirmInformation ( e ) {
            e.preventDefault ();
      }

      return (
          <>
                <h1>Form with CustomHook</h1>
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
                      <input type="password"
                             className={ "form-control mt-4" }
                             placeholder={ "Password" }
                             name={ "password" }
                             value={ password }
                             onChange={ handleChange }
                      />
                      <button type={ "submit" } onClick={ onResetForm } className={ "btn btn-danger m-5" }>Reset Form</button>
                      <button type={ "submit" } onClick={ confirmInformation } className={ "btn btn-outline-success m-5" }>Confirm</button>
                </form>
                <hr/>
                <hr/>
          </>
      );
}
