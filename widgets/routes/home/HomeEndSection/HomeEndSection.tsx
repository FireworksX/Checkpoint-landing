import { FC } from 'react'
import * as Styled from './styles'
import Button from 'components/Button/Button'

interface HomeEndSectionProps {
  className?: string
}

const HomeEndSection: FC<HomeEndSectionProps> = ({ className }) => {
  return (
    <Styled.Root className={className}>
      <img src='/images/footer-illustration.png' alt='' className='section-end__cover' />
      <Styled.Wrapper>
        <Styled.Title>Сделай жизнь яркой</Styled.Title>
        <Styled.ButtonWrapper>
          <Button scheme='primary'>️️⚡️ Начать сейчас</Button>
        </Styled.ButtonWrapper>
      </Styled.Wrapper>
    </Styled.Root>
  )
}

export default HomeEndSection
