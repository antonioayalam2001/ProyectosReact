import { useRef , useState } from "react";

export function CopyApp () {
      const [ text , setText ] = useState ( "Let's do some Copy" );
      const [ isCopied , setIsCopied ] = useState ( false );
      const inputRef = useRef ();

      function handleChange ( { target } ) {
            setText ( target.value );
      }

      async function handleCopy  () {
            const input = inputRef.current;
            input.select();
            console.log (input.value)
            await navigator.clipboard.writeText(input.value);
            // document.execCommand ( 'copy' );
            setIsCopied ( true );

            setTimeout ( () => {
                  setIsCopied ( false )
            } , 2000 )

      }

      return (
          <>
                <h1>Copy App</h1>
                <input type="text"
                       value={ text }
                       onChange={ handleChange }
                       ref={ inputRef }
                />
                <button className={ 'btn btn-primary m-2 text-white' } onClick={ handleCopy }>Copy now</button>

                { isCopied && <h1>Text was Successfully copied </h1> }

          </>
      )
}