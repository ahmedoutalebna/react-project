import React, {useState, useEffect} from 'react'
import QRCode from 'qrcode.react'
const Qrcode = () => {
    const[qrData, setQrData] = useState('')
    const[input, setInput] = useState('')
    const generateQrCode = ()=>{
        setQrData(input)
    }
  return (
    <div className='qrcode-container'>
        <h1>Qr Code generator</h1>
        <div className="generator">
            <input type="text" onChange={(e)=> setInput(e.target.value)}/>
            <button onClick={generateQrCode}>Generate</button>
        </div>
        <QRCode value={qrData} size={256}/>
    </div>
  )
}

export default Qrcode