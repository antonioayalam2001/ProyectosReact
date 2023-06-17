import React , { useLayoutEffect , useRef , useState } from "react";
import PropTypes from "prop-types";

export function Quote ( { quote = 'We dont have that one ' , author = 'Unknown' } ) {
      const quoteRef = useRef ()
      const [ boxSize , setBoxSize ] = useState ( {
            width : 0 ,
            height : 0
      } );
      useLayoutEffect ( () => {
            const { width , height } = quoteRef.current.getBoundingClientRect ();

            setBoxSize ( { width , height } );

            return () => {
                  console.log ( 'cleaning' )
            }

      } , [ quote ] );


      return (
          <>
                <blockquote className={ "blockquote text-end" }>
                      <p className="mb-1 blockquote-text p-3 mb-4" ref={ quoteRef }>{ quote }</p>
                      <footer className={ 'blockquote-footer author' }>
                            <p> --- > { author }</p>
                      </footer>
                </blockquote>
          </>
      )
}

Quote.propTypes = {
      quote : PropTypes.string.isRequired ,
      author : PropTypes.string.isRequired
}