import "./HistoryPage.css"
import "./MainPage"
import QRCode from "../components/QRCode";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import useQRStore from "../entity/QR/QR.store";
const HistoryPage = () => {
  const history = useQRStore((state) => state.history)
  return (
    <div className="history-page">
      <h1 className="h1">История ваших запросов.</h1>
      <Link to="/">Вернуться к генераций QRcoda</Link>
      <div className="mainform">
        {history.map((qr) => (
          <div className="qr">
            <h2>{qr.link}</h2>
            {qr.timestamp && (
              <p>{qr.timestamp.toString()}</p>
            )}
            <QRCode img={qr.link}/>
          </div>
          
        ))}
      </div>
    </div>

  )
}

export default HistoryPage;