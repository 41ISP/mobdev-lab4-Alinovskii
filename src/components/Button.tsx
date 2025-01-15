import "./Button.css";
import Input from "../components/Input"
const Button = (onClick) => {
    const Hendlecklick = () => {
         onClick()
    }
    return(
      <button className="button" onClick={Hendlecklick}>Генерировать</button>            
    )
    
}

export default Button;