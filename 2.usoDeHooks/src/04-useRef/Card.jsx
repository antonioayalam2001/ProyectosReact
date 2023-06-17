import { useEffect , useRef , useState } from "react";
import { getPost } from "./helpers/getPost.js";

export const Card = () => {
      const [ post , setPost ] = useState ( { title : 'Post Number 1' } );
      const [ loading , setLoading ] = useState ( true );
      const isMountedRef = useRef ( true );

      function updatePost () {
            getPost ().then ( ( fetchPost ) => {
                  setTimeout ( () => {
                         if ( isMountedRef ){
                              //Solo realiza la obtencion de los post en caso de que el componente este montado
                              setPost ( fetchPost );
                              setLoading ( false );
                        }

                  } , 2000 )
            } );
      }

      //Solo ocupamos que la funcion se ejecute una unica vez
      useEffect ( () => {
            updatePost ()
            return () => {
            //      CleanUp
            //      Desmontando el componente mediante una Referencia
                  isMountedRef.current = false;
            };
      } , [] );

      if ( loading ) {
            return (
                <div>
                      <h1>Loading</h1>
                </div>
            )
      }

      return (
          <div>
                <h3>{ post.title }</h3>
          </div>
      )
}