import React from 'react'
import BannerSection from '../../Components/bannerSection/BannerSection'
import DiveSection from '../../Components/diveSection/DiveSection'
import VideoSection from '../../Components/videoSection/VideoSection'
import VerifiedSection from '../../Components/verifiedSection/VerifiedSection'
import WorksSection from '../../Components/worksSection/WorksSection'
BannerSection
const Home = () => {
  return (
    <main className='home-page'>
        <BannerSection />
        <DiveSection />
        <VideoSection />
        <VerifiedSection />
        <WorksSection />
    </main>
  )
}

export default Home