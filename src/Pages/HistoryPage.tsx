import "./HistoryPage.css"
import "./MainPage"
import QRCode from "../components/QRCode";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import useQRStore from "../entity/QR/QR.store";
import List from "../../dist/qr3.png"
import Back from "../../dist/back.png"
import { createJSONStorage, persist } from "zustand/middleware";
import { create } from "zustand";


const HistoryPage = () => {
  const {history, delHistory} = useQRStore((state) => state)
  
  const BackClick =() => {
    
  }
  return (
    <div className="history-page">
      <h1 className="h1">История ваших запросов</h1>
      <Link className="list" to="/"><img src={List}/>Генерация</Link>
      <div className="mainform">
        {history.map((qr) => (
          <div className={`qr${qr.link.length > 120 ? " qr--3" : qr.link.length > 80 ? " qr--2": qr.link.length > 40 ? " qr--1" : ""}`} key={qr.link}>
            <h2>{qr.link}</h2>
            {qr.timestamp && (
              <p>{qr.timestamp.toString()}</p>
            )}
            <QRCode img={qr.link}/>
            <button className="deletehistory" onClick={() => delHistory(qr)}><img src={Back}/></button>
          </div>  
        ))}
      </div>
    </div>

  )
}

export default HistoryPage;