import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/header/Header'
import Home from './pages/home/Home'
import Footer from './Components/footer/Footer'
import UnderConstruction from './pages/underConstruction/UnderConstruction'
function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:slug' element={<UnderConstruction />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
