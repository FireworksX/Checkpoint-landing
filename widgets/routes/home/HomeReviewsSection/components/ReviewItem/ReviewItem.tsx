import { FC } from 'react'
import Image from 'next/Image'
import * as Styled from './styles'

interface ReviewItemProps {
  className?: string
}

const ReviewItem: FC<ReviewItemProps> = ({ className }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Rates>
        <Styled.Rate src='/images/star-filled.svg' alt='' />
        <Styled.Rate src='/images/star-filled.svg' alt='' />
        <Styled.Rate src='/images/star-filled.svg' alt='' />
        <Styled.Rate src='/images/star-filled.svg' alt='' />
        <Styled.Rate src='/images/star-filled.svg' alt='' />
      </Styled.Rates>
      <Styled.Text>
        “My wife and I are going on honeymoon, Travis allows us to plan trips together, finally!”
      </Styled.Text>
      <Styled.User>
        <Styled.Avatar>
            <Image/>
        </Styled.Avatar>
        <div>
          <Styled.Name>Lawrence R.</Styled.Name>
          <Styled.Deal>Recently married who doesn't normally plan</Styled.Deal>
        </div>
      </Styled.User>
    </Styled.Root>
  )
}

export default ReviewItem
