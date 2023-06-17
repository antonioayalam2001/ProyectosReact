import { Card } from "./Card";
import { useState } from "react";

export const Loading = () => {
      const [ show , setShow ] = useState ( false )

      return (
          <>
                <h1>Loading App</h1>
                <button onClick={ e => {
                      setShow ( !show )
                } }>Show / Hide
                </button>
                { show && <Card/> }

          </>
      )
}