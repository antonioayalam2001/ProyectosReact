import {useContext} from "react";
import {HangManContext} from "../context/HangManContext.jsx";
import {Link} from "react-router-dom";

export const HangMan = () => {

    const {user} = useContext(HangManContext);
    return (
        <>
            <h1>Welcome to the Game {user}</h1>
            <Link className={'start__button'} to={'/game'}>Start Game for Free</Link>
        </>
    );
}