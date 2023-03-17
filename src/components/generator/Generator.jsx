import { useState } from "react"
import QRCode from 'react-qr-code'

export const Generator = () => {
  const [userInput, setUserInput] = useState("")
  const [QrCode, setQrCode] = useState("")

  const generateQrCode = (e) =>{
    e.preventDefault()
    setQrCode(userInput)
  }

  return (
    <section>
      <form onSubmit={ generateQrCode }>
        <input 
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)} 
        />
        <button type="submit">GENERATE</button>
      </form>
      { QrCode ?
      <QRCode value={QrCode} />
      : '' }
    </section>
  )
}