import "./HistoryPage.css"
import "./MainPage"
import QRCode from "../components/QRCode";
import { Link } from "react-router-dom";
import Input from "../components/Input";
const HistoryPage = () => { 
return(
    <div className="history-page">
    <h1>История ваших запросов.</h1>
    <Link to="/">Вернуться к генераций QRcoda</Link>
    <div className="mainform">
     <h2></h2>
      <QRCode img={""}></QRCode>
    </div>     
    </div>
   
)
}

export default HistoryPage;