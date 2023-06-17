import {HangManContext} from "./HangManContext.jsx";

export const HangManProvider = ({children}) => {
    return (
        <HangManContext.Provider value={
            {user: "Tony"}
        }>
            {children}
        </HangManContext.Provider>
    )
}