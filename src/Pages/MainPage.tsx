import Input from "../components/Input"
import Button from "../components/Button";
import QRCode from "../components/QRCode";
import { SetStateAction, useState } from "react";
import "./MainPage.css"
import { data, Link } from "react-router-dom";
import { URLs } from "../app/URLs";
import useQRStore from "../entity/QR/QR.store"
import List from "../../dist/spisok.png"

const MainPage = () => {
  const [input, setInput] = useState("");
  const [link, setLink] = useState("");
  const appendHistory = useQRStore((state) => state.appendHistory)
  const onclick = () => {
    if(input.length > 0 && input.trim()){
      const newLink = "https://quickchart.io/qr?text=" + encodeURIComponent(input)
      setLink(newLink);
      appendHistory({link: newLink, timestamp: (new Date).getTime()})
    } 
    //  https://www.qrtag.net/api/qr_12.svg?url=https://www.qrtag.net
    //  https://www.qrtag.net/api/qr_12.svg?url=https://google.com
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value)
  }

  return (
    <div className="movieform">
      <Input value={input} onChange={handleChange} placeholder={""} />
      <Button onClick={onclick}></Button>
      <div className="image">
        <QRCode img={link} ></QRCode>
      </div>
      <Link className="Link" to={URLs.historyPage}><img src={List}/>История генераций.</Link>
    </div>
  )

}

export default MainPage;