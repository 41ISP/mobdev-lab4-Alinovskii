interface QQRcode {
    img: string
}
const QRCode = ({img}: QQRcode) => {
    return(
       <img src={img}/>
    
    )
}

export default QRCode;