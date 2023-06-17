export const Button = ({appendLetter, className, value, disabled = false}) => {
    return (

        <button onClick={appendLetter} className={`letter__button ${className}`} value={value} disabled={disabled}>{value}</button>

    );
}