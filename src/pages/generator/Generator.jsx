import { useState } from 'react'
import QRCode from 'react-qr-code'

export const Generator = () => {
  const [formData, setFormData] = useState('')
  const [qrCode, setQrCode] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setQrCode(formData)
  }

  const handleChange = (e) => {
    setFormData(e.target.value)
  }

  return (
    <section className='generator'>
      {qrCode && <QRCode value={qrCode} />}
      <form onSubmit={handleSubmit} className='generator__form'>
        <textarea
          className='generator__form--textarea'
          type='text'
          value={formData}
          cols='20'
          onChange={handleChange}
        />
        <button type='submit' className='generator__form--submit'>GENERATE</button>
      </form>
    </section>
  )
}
