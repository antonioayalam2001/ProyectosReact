import { useEffect , useRef , useState } from "react";

export const Scroll = () => {
      const [ background , setBackground ] = useState ( 'lightblue' );
      const divRef = useRef ()
      useEffect ( () => {
            const handleScroll = () => {
                  const div = divRef.current;
                  // console.log ( div.getBoundingClientRect () );

                  const { x , y } = div.getBoundingClientRect ();

                  y < 0 ? setBackground ( 'red' ) : setBackground ( 'lightblue' )
            }

            window.addEventListener ( 'scroll' , handleScroll );
            return () => {
                  window.removeEventListener ( 'scroll' , handleScroll );
            };
      } , [] );


      return (
          <div className={ 'container' }>

                <div className={ 'container-fluid' } style={ { height : '180vh' , background : background } } ref={ divRef }>

                      <h1>Scroll Animation </h1>

                      <button className={ 'btn btn-primary m-2 text-white' }>Play Now!!!</button>

                </div>

          </div>
      )
}