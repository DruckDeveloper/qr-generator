import { Route, Routes } from 'react-router-dom'
import { Header } from './components/header/Header'
// Import pages
import { Generator } from './pages/generator/Generator'
import { Scanner } from './pages/scaner/Scanner'

function App () {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route element={<Generator />} path='/' />
        <Route element={<Scanner />} path='/scanner' />
      </Routes>
    </div>
  )
}

export default App
