import React from 'react'
import qrCode from '../assets/image-qr-code.png'

const Index=()=>{
    
    return(
    <div className="outline">
    <img src={qrCode} alt="qr-code" width="100%" />
    <h2>Improve your front-end skills by building projects</h2>
    
    <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
  </div>
    )
}
export default Index
