import { useContext } from "react";
import { UserContext } from "./context/UserContext.jsx";

export const HomePage = () => {
      const { user } = useContext ( UserContext );

      return (
          <>
                <h1>Welcome to the Main Page { user?.username }</h1>
                <pre aria-label={'preTest'}>{JSON.stringify(user,null,3)}</pre>
          </>
      )
}