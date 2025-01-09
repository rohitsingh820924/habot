import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import './App.css'
import Header from './Components/header/Header'
import Home from './pages/home/Home'
import Footer from './Components/footer/Footer'
import UnderConstruction from './pages/underConstruction/UnderConstruction'
import PostRequirement from './pages/postRequirement/PostRequirement'
import { ConfigProvider } from 'antd';
import Requirements from './pages/requirements/Requirements'
import { checkAuthStatus, setProfile } from './libs/store/features/authSlice';
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import AboutUs from './pages/aboutUs/AboutUs'
import FAQ from './pages/faq/FAQ'
import DataPrivacy from './pages/dataPrivacy/DataPrivacy'
import Terms from './pages/terms/Terms'
import Accessibility from './pages/accessibility/Accessibility'
import Feedback from './pages/feedback/Feedback'
import { Profile } from './pages/profile/Profile'
import { EditProfile } from './pages/editProfile/EditProfile'

function App() {
  const dispatch = useDispatch()
    useEffect(() => {
      dispatch(checkAuthStatus());
      dispatch(setProfile());
    },[])
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
     <SnackbarProvider maxSnack={3} 
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    preventDuplicate />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post-requirement' element={<PostRequirement />} />
        <Route path='/:slug' element={<UnderConstruction />} />
        <Route path='/requirements/:slug' element={<Requirements />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/data-privacy' element={<DataPrivacy />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/accessibility' element={<Accessibility />} />
        <Route path='/feedback' element={<Feedback />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/edit-profile' element={<EditProfile />} />
      </Routes>
      <Footer />
      </ConfigProvider>
    </BrowserRouter>
    </>
  )
}

export default App
