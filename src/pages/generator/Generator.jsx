import { useState } from 'react'
import { QRCodeCanvas } from 'qrcode.react'

export const Generator = () => {
  const [formData, setFormData] = useState('')
  const [qrCode, setQrCode] = useState('')
  const [downloadURL, setDownloadURL] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setQrCode(formData)
  }

  const handleChange = (e) => {
    setFormData(e.target.value)
  }

  const handleDownload = () => {
    const canvas = document.querySelector('canvas')
    const pngUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
    setDownloadURL(pngUrl)
  }

  return (
    <section className='generator'>
      {qrCode && <QRCodeCanvas value={qrCode} size={200} />}
      <form onSubmit={handleSubmit} className='generator__form'>
        <textarea
          className='generator__form--textarea'
          type='text'
          value={formData}
          cols='20'
          onChange={handleChange}
        />
        <button type='submit' className='generator__form--submit'>GENERATE</button>
        {qrCode && <a href={downloadURL} download='qrcode.png' onClick={handleDownload}>Download</a>}
      </form>
    </section>
  )
}
