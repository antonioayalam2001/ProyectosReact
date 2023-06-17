import { memo } from "react";

export const Small = memo(( { value } ) => {
      console.log ('Me volví a renderizar Small Counter')



      return (
          <>
                <small>{ value }</small>
          </>
      )
})