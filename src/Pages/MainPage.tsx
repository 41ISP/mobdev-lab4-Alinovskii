import Input from "../components/Input"
import Button from "../components/Button";
import QRCode from "../components/QRCode";
import { SetStateAction, useState } from "react";
import "./MainPage.css"
import { data, Link } from "react-router-dom";
import { URLs } from "../app/URLs";
import useQRStore from "../entity/QR/QR.store"

const MainPage = () => {
  const [input, setInput] = useState("");
  const [link, setLink] = useState("");
  const appendHistory = useQRStore((state) => state.appendHistory)
  const onclick = () => {
    const newLink = "https://quickchart.io/qr?text=" + encodeURIComponent(input)
    setLink(newLink);
    appendHistory({link: newLink, timestamp: (new Date).getTime()})
    //  https://www.qrtag.net/api/qr_12.svg?url=https://www.qrtag.net
    //  https://www.qrtag.net/api/qr_12.svg?url=https://google.com
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setInput.length <= 10) {
      setInput(inputValue);
    }
    setInput(e.target.value)
    
  }

  return (
    <div className="movieform">
      <Input value={input} onChange={handleChange} placeholder={""} />
      <Button onClick={onclick}></Button>
      <div className="image">
        <QRCode img={link} ></QRCode>
      </div>
      <Link className="Link" to={URLs.historyPage} >История генераций.</Link>
    </div>
  )

}

export default MainPage;