import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='generator__header'>
      <h1 className='generator__header--title'>QR Code Generator</h1>
      <p className='generator__header--text'>Generate your own qr codes easily</p>
      <nav>
        <Link to='/'>Generate QR</Link>
        <Link to='/scanner'>Scan QR</Link>
      </nav>
    </header>

  )
}

export { Header }
