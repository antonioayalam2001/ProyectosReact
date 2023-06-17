import React from 'react';
import { useCounter , useFetch } from "../hooks";
import { LoadingQuote , Quote } from './index.js';


MultipleCustomHooks.propTypes = {};

function MultipleCustomHooks ( props ) {

      const { counter , increment , decrement , reset } = useCounter ( 1 );
      //Inicializar servidor de la misma carpeta
      const { data , isLoading , hasError } = useFetch ( `/quotes` );
      console.log (data)
      //Inicializar servidor de la misma carpeta
      const { q : quote , a : author } = !!data && data[ counter ];
      // const { data , isLoading  } = useFetch ( `https://www.breakingbadapi.com/api/quotes/${ counter }` );
      //Para utilizar el API de Breaking Bad
      // const { author , quote } = !!data && data[0];
      //Para utilizar el API de Breaking Bad

      //Cuando aun no hay valor
      // data = undefined
      // !data = true
      // !!data = false

      //Cuando ya hay valor
      // data = [author,quote]
      // !data = false
      // !!data = true

      // if ( isLoading ){
      //       return (
      //           <div>
      //                 <h1>Loading wait a second ...</h1>
      //           </div>
      //       )
      // }

      return (
          <>
                <div className="background">
                      <div className={ 'quotes__container' }>
                            <section className="quotes__content">

                                  <h1>Inspirational Quotes for the Day</h1>
                                  <hr/>
                                  <hr/>
                                  { isLoading ?
                                      ( <LoadingQuote/> )
                                      :
                                      (
                                          <Quote quote={ quote } author={ author }/>
                                      )
                                  }

                                  <button className="btn btn-dark p-3 m-2" onClick={ () => decrement () } disabled={ counter - 1 === 0 }>Prev Quote</button>

                                  <button className="btn btn-light p-3 m-2" onClick={ () => increment () } disabled={ isLoading }>Next Quote</button>

                                  <hr/>
                                  <hr/>
                            </section>
                      </div>
                </div>
          </>
      );
}

export default MultipleCustomHooks;
