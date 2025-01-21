import Input from "../components/Input"
import Button from "../components/Button";
import QRCode from "../components/QRCode";
import { SetStateAction, useState } from "react";
import "./MainPage.css"

const MainPage = () => {
 const [input, setInput] = useState("");
const [link, setLink] = useState("");
 const onclick = () =>{
    ("https://www.qrtag.net/api/qr_12.svg?url=https://" + input)
   //  https://www.qrtag.net/api/qr_12.svg?url=https://www.qrtag.net
   //  https://www.qrtag.net/api/qr_12.svg?url=https://google.com
 }
 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
 }
 
    return(
        <div className="movieform">
       <Input value={input} onChange={handleChange} placeholder={""}/>
       <Button onClick={onclick}></Button>
       <div className="image">
       <QRCode img={`https://www.qrtag.net/api/qr_12.svg?url=https://${input}`} ></QRCode>
       </div>
        </div>
    )
    
}

export default MainPage;