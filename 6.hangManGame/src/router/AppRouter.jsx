import {Route, Routes} from "react-router-dom";
import {HangMan} from "../hangMan/pages/HangMan.jsx";
import {HangManProvider} from "../hangMan/context/HangManProvider.jsx";
import {Win} from "../hangMan/components/Win.jsx";
import {End} from "../hangMan/components/End.jsx";
import {HangManGame} from "../hangMan/components/HangManGame.jsx";
import '../App.css'
function AppRouter() {


    return (
        <HangManProvider>
            <div className={'container'}>
                <h1>Hangman Game</h1>
                <Routes>
                    <Route path={'/'} element={<HangMan/>}/>
                    <Route path={'/win'} element={<Win/>}/>
                    <Route path={'/end'} element={<End/>}/>
                    <Route path={'/game'} element={<HangManGame/>}/>
                </Routes>
            </div>
        </HangManProvider>
    )
}

export default AppRouter
