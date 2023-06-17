import { useEffect , useRef , useState } from "react";

//Pre - render
//solo se ejecuta una vez
export const RenderApp = () => {

      //Logic Render

      const [ text , setText ] = useState ( "" );

      const renderRef = useRef ( 1 );    // Paso 2  render 1 ref=1


      // Paso 3 entra como 1
      useEffect ( () => {
            //useEffect []
            //paso 4 le suma 1 (no Lo muestra en pantalla hasta que se genera una nueva renderización)
            renderRef.current++

      } );

      return (
          <>
                {/*Log return render */}
                <h1>Render App</h1>
                <input type="text"
                       value={ text }
                       onChange={ ( e ) => setText ( e.target.value ) }/>
                {/*Paso 3*/}
                {/*render1 ref = 1*/}
                <h3>Renders = {renderRef.current}</h3>
          </>
      )
}