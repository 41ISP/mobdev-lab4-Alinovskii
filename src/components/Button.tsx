import "./Button.css";
const Button = (handleClick: ()=>void) => {
    
    return(
      <button className="button" onClick={handleClick}>Генерировать</button>            
    )
    
}

export default Button;