import './App.css'
import { wordQuizApi } from "./api/wordQuizApi.js";
import { useCallback , useEffect , useState } from "react";
import { LevelSelector } from "./components/LevelSelector";
import { QuizCard } from "./components/QuizCard";
import { useCounter } from "./hooks/useCounter.js";

function App () {

      const [ levelSelection , setLevelSelection ] = useState ( null );
      const [ quizList = [] , setQuizList ] = useState ();
      const { counter , increment , decrement } = useCounter ( 0 )

      async function getWordsByLevel () {
            if ( !levelSelection ) return;
            try {
                  const { data } = await wordQuizApi.get ( `?level=${levelSelection}` );
                  const { level , quizlist } = data;
                  setQuizList ( quizlist );
                  console.log ( data )
                  // return data
            } catch ( e ) {
                  console.log ( 'Something went terribly wrong please try again' );
                  console.log ( e );
            }
      }

      const levelSelectedCallback = useCallback (
          ( level ) => {
                setLevelSelection ( level )
          } ,
          [] ,
      );

      useEffect ( () => {
            if ( levelSelection ) getWordsByLevel ();
            return () => {
                  console.log ( 'Cleanup useEffect' )
            }
      } , [ levelSelection ] );

      return (
          <div className="App">

                { !levelSelection && <LevelSelector level={ levelSelection } levelSelection={ levelSelectedCallback }/> }
                { levelSelection && < div className="question-area">
                      <h2>Your points currently are {counter}</h2>
                      <button onClick={ getWordsByLevel }>Get levels</button>
                      <h1>Welcome to the level number : { levelSelection }</h1>
                      <button onClick={ e => setLevelSelection ( '' ) }>Select other level</button>
                      <div className="question-box">
                            {
                                  quizList.map ( ( quiz , index ) => (
                                      <QuizCard key={ index } { ...quiz } number={ index } incrementC = {()=>increment()}/>
                                  ) )
                            }
                      </div>
                </div>
                }

          </div>
      )
}

export default App
