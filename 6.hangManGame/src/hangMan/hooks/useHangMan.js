import {useEffect, useState} from "react";
import {WORDS} from "../WORDS.js";

export const useHangMan = () => {
    const [randomIndex, setRandomIndex] = useState(0);
    const [word, setWord] = useState([]);
    const [guessedLetter, setGuessedLetter] = useState([]);
    const [incorrectWords, setIncorrectWords] = useState([]);
    const [correctWords, setCorrectWords] = useState([]);
    const [tries, setTries] = useState(1);

    const alphabetArray = 'abcdefghijklmnñopqrstuvwxyz'.split("");

    useEffect(() => {
        setRandomIndex(Math.floor(Math.random() * (WORDS.length - 1)));
    }, [])

    useEffect(() => {
        setWord(WORDS[randomIndex].word.split(""));
    }, [randomIndex]);


    const addToCorrectWords = (letter) =>{
        setCorrectWords([...correctWords, letter]);
    }

    const addToIncorrectWords = (letter) =>{
        setIncorrectWords([...incorrectWords, letter]);
        setTries(tries + 1);
    }

    const addToGuessedLetters = (letter) =>{
        setGuessedLetter([...guessedLetter,letter])
    }


    return{
        randomIndex,
        word,
        guessedLetter,
        incorrectWords,
        correctWords,
        tries,
        alphabetArray,

        addToCorrectWords,
        addToIncorrectWords,
        addToGuessedLetters

    }
}