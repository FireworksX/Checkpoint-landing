import { NextPage } from 'next'
import MainLayout from 'layouts/MainLayout/MainLayout'
import HomeMainSection from 'widgets/routes/home/HomeMainSection/HomeMainSection'
import HomeReviewsSection from 'widgets/routes/home/HomeReviewsSection/HomeReviewsSection'
import HomeFeatures from 'widgets/routes/home/HomeFeatures/HomeFeatures'
import HomeCreatorsSection from 'widgets/routes/home/HomeCreatorsSection/HomeCreatorsSection'
import HomeEndSection from 'widgets/routes/home/HomeEndSection/HomeEndSection'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <HomeMainSection />
      <HomeReviewsSection />
      <HomeFeatures />
      <HomeCreatorsSection />
      <HomeEndSection />
    </MainLayout>
  )
}

export default Home
