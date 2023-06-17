import {useCallback, useEffect} from "react";
import {WORDS} from '../WORDS';
import {useNavigate} from "react-router-dom";
import {Button} from "./Button.jsx";
import {useHangMan} from "../hooks/useHangMan.js";


export const HangManGame = () => {
    const navigate = useNavigate();
    const {
        randomIndex,
        word,
        myLetters,
        incorrectWords,
        correctWords,
        tries,
        alphabetArray,
        guessedLetter,
        addToCorrectWords,
        addToIncorrectWords,
        addToGuessedLetters
    } = useHangMan();

    const appendLetter = useCallback(
        ({target}) => {
            const letter = target.value;
            if (word.includes(letter.toUpperCase())) {
                console.log('hoa')
                addToCorrectWords(letter);
            } else {
                addToIncorrectWords(letter)

            }
            addToGuessedLetters(letter);
        },
        [word, addToCorrectWords, addToIncorrectWords, addToGuessedLetters],
    );


    useEffect(() => {
        let notFound = 0;
        word.map(letter => {
            if (guessedLetter.find(myLetter => myLetter.toUpperCase() === letter) === undefined) {
                notFound++;
            }
        })

        console.log(notFound)

        if (notFound === 0 && correctWords.length > 0) {
            navigate('/win');
        }

        if (tries === 7) {
            navigate('/end');
        }

    }, [correctWords]);

    return (
        <>
            <div className="question__container">
                <h3>{WORDS[randomIndex].question}</h3>
            </div>
            <div className="word__container">
                {word.map((letter, index) => (
                    guessedLetter.indexOf(letter.toLowerCase()) === -1 ?
                        <div key={index} className={"hidden__letter"}>_</div> :
                        <div className={"not__hidden__letter"} key={index}>{letter.toUpperCase()}</div>
                ))}
            </div>
            <div className="buttons__container">
                {alphabetArray.map((letter, index) => (
                        correctWords.includes(letter) ?
                            <Button key={letter} disabled={true} value={letter} className={'letter__button__correct'} appendLetter={appendLetter}/> :
                            incorrectWords.includes(letter) ?
                                <Button key={letter} disabled={true} value={letter} className={'letter__button__incorrect'} appendLetter={appendLetter}/> :
                                <Button key={letter} value={letter} className={'letter__button'} appendLetter={appendLetter}/>
                    )
                )}
            </div>
            <div className="img__container">
                <img src={`../assets/el_ahorcado${(tries === 6 ? tries - 1 : tries)}.png`} alt=""/>
            </div>
        </>
    );
}