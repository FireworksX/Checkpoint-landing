import { FC } from 'react'
import * as Styled from './styles'
import ReviewItem from './components/ReviewItem/ReviewItem'

interface HomeReviewsSectionProps {
  className?: string
}

const HomeReviewsSection: FC<HomeReviewsSectionProps> = ({ className }) => {
  return (
    <Styled.Root className={className}>
      <ReviewItem />
    </Styled.Root>
  )
}

export default HomeReviewsSection
