import { useState } from "react";

const Input = () => {
    const [text, setText] = useState("");
return(
<div>
    <input  className="input-txt" type="text" value={text}
                        onChange={(e) => setText(e.target.value)}
            placeholder="Введите текст для генераций QRcode"
        ></input>
</div>
)
} 

export default Input;