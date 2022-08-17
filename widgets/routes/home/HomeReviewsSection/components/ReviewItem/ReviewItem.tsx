import { FC } from 'react'
import Image from 'next/Image'
import * as Styled from './styles'

interface ReviewItemProps {
  text: string
  name: string
  deal: string
  className?: string
}

const ReviewItem: FC<ReviewItemProps> = ({ className, text, name, deal }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Rates>
        <Styled.Rate src='/images/star-filled.svg' alt='' />
        <Styled.Rate src='/images/star-filled.svg' alt='' />
        <Styled.Rate src='/images/star-filled.svg' alt='' />
        <Styled.Rate src='/images/star-filled.svg' alt='' />
        <Styled.Rate src='/images/star-filled.svg' alt='' />
      </Styled.Rates>
      <Styled.Text>“{text}”</Styled.Text>
      <Styled.User>
        <Styled.Avatar />
        <div>
          <Styled.Name>{name}</Styled.Name>
          <Styled.Deal>{deal}</Styled.Deal>
        </div>
      </Styled.User>
    </Styled.Root>
  )
}

export default ReviewItem
