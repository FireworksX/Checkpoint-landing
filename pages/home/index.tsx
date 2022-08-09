import { NextPage } from 'next'
import MainLayout from 'layouts/MainLayout/MainLayout'
import HomeMainSection from 'components/routes/home/HomeMainSection/HomeMainSection'
import HomeReviewsSection from 'widgets/routes/home/HomeReviewsSection/HomeReviewsSection'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <HomeMainSection />
      <HomeReviewsSection />
    </MainLayout>
  )
}

export default Home
