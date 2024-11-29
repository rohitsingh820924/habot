import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/header/Header'
import Home from './pages/home/Home'
import Footer from './Components/footer/Footer'
import UnderConstruction from './pages/underConstruction/UnderConstruction'
import PostRequirement from './pages/postRequirement/PostRequirement'
import { Button, ConfigProvider, Space } from 'antd';

function App() {

  return (
    <>
    <BrowserRouter>
    <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#00732F',
        borderRadius: 4,
      },
    }}
  >
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post-requirement' element={<PostRequirement />} />
        <Route path='/:slug' element={<UnderConstruction />} />
      </Routes>
      <Footer />
      </ConfigProvider>
    </BrowserRouter>
    </>
  )
}

export default App
