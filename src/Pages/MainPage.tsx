import Input from "../components/Input"
import Button from "../components/Button";
import QRCode from "../components/QRCode";
import { SetStateAction, useState } from "react";
import "./MainPage.css"

const MainPage = () => {
 const [input, setInput] = useState("");
 const onclick = () =>{
    console.log("https://www.qrtag.net/api/qr_12.svg?url=https://" + input)
 }

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
 }
 
    return(
        <div className="movieform">
       <Input value={input} onChange={handleChange} placeholder={""}/>
       <Button onClick={onclick}></Button>
       <QRCode></QRCode>
        </div>
    )
    
}

export default MainPage;