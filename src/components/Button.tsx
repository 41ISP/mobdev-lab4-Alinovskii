import "./Button.css";
interface BButton {
  onClick: () => void
}
const Button = ({onClick}: BButton) => {

    return(
      <button className="button" onClick={onClick}>Генерировать</button>            
    )
    
}

export default Button;