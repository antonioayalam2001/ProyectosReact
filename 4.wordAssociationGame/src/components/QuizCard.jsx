import { useState } from "react";

export const QuizCard = ( { option , quiz : [ q1 , q2 , q3 ] , correct , number , incrementC } ) => {

      const [ clicked , setClicked ] = useState ( [] );

      function checkAnswer ( e , index , option ) {
            if ( index === correct - 1 ) {
                  e.target.classList.add ( 'correct' );
                  incrementC();
            } else {
                  e.target.classList.add ( 'incorrect' );

            }
            setClicked ( [ ...clicked , option ] )
      }

      return (
          <div className={ "card" }>
                <h3>Quiz number : { number + 1 }</h3>
                <div className="clues">
                      <p className="clue">{ q1 }</p><p className="clue">{ q2 }</p><p className="clue">{ q3 }</p>
                </div>
                <div className="options">
                      { option.map ( ( option , index ) => (
                          <button key={ option } disabled={ clicked.includes ( option ) } onClick={ ( e ) => checkAnswer ( e , index , option ) }> { option } </button>
                      ) ) }
                </div>
          </div>
      )
}