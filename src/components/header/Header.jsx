import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <h1 className='header__title'>QR Code Generator</h1>
      <p className='header__text'>Generate your own qr codes easily</p>
      <nav className='header__nav'>
        <Link to='/' className='header__nav--link'>Generate QR</Link>
        <Link to='/scanner' className='header__nav--link'>Scan QR</Link>
      </nav>
    </header>

  )
}

export { Header }
