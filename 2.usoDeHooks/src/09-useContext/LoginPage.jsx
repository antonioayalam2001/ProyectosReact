import { UserContext } from "./context/UserContext.jsx";
import { useContext } from "react";

export const LoginPage = () => {
      const { user,setUser } = useContext ( UserContext );
      // console.log ( user )
      //value = {{ user : { username : 'Antonio Ayala' , email : 'antonioayalam2001@gmail.com' }}
      return (
          <>
                <h1>LoginPage</h1>
                <pre aria-label={'preTest'}>{ JSON.stringify ( user , null , 3 ) }</pre>

                <button className="btn btn-primary" onClick={ () => setUser( { username : 'Tony' , email : 'antonio@gmail.com' } ) }>Set User</button>
          </>
      )
}