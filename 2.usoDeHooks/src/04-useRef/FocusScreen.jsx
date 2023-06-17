import { useRef , useState } from "react";

export const FocusScreen = () => {
      const [ name , setName ] = useState ( "" );
      const [ password , setPassword ] = useState ( "" );

      const inputRef = useRef ();
      const inputPasswordRef = useRef ();

      function focusRef ( { target } ) {
            const { innerHTML } = target;

            const input = inputRef.current;
            const inputPassword = inputPasswordRef.current;;

            innerHTML.trim() === 'Password' && inputPassword.focus ();
            innerHTML.trim() === 'Set Focus' && input.select ();
      }

      const handleChange = ({target}) => {
            const {name,value} = target;
            console.log (name)
            switch ( name ){
                  case "name":
                        setName(value);
                        break;
                  case 'password':
                        setPassword(value);
                        break;
            }
      };


      return (
          <>
                <h1>Focus Screen</h1>
                <hr/>

                <input type="text"
                       placeholder={ 'Enter your name' }
                       className={ 'form-control p-3 w-25 m-2' }
                       ref={ inputRef }
                       onChange={handleChange}
                       value={name}
                       name={'name'}
                />

                <input type="password"
                       onChange={handleChange}
                       placeholder={ 'Enter your name' }
                       className={ 'form-control p-3 w-25 m-2' }
                       ref={ inputPasswordRef }
                       name={"password"}
                       value={password}
                />


                <button className={ 'btn btn-primary m-2 text-white' } onClick={ focusRef }>
                      Set Focus
                </button>
                <button className={ 'btn btn-primary m-2 text-white' } onClick={ focusRef }>
                      Password
                </button>

          </>
      )
}