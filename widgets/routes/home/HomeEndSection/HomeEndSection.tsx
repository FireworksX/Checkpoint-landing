import { FC, useEffect } from 'react'
import * as Styled from './styles'
import { reveal } from 'utils/reveal'
import ActionButton from "components/ActionButton/ActionButton";

interface HomeEndSectionProps {
  className?: string
}

const HomeEndSection: FC<HomeEndSectionProps> = ({ className }) => {
  useEffect(() => {
    reveal('.endWrapper', {
      distance: '200px',
      origin: 'bottom'
    })
  }, [])

  return (
    <Styled.Root className={className}>
      <Styled.CoverMobile src='/images/footer-illustration-sm.png' alt='' />
      <Styled.Cover src='/images/footer-illustration.png' alt='' className='section-end__cover' />
      <Styled.Wrapper className='endWrapper'>
        <Styled.Title>Сделай жизнь яркой</Styled.Title>
        <Styled.ButtonWrapper>
          <ActionButton>️️⚡️ Начать сейчас</ActionButton>
        </Styled.ButtonWrapper>
      </Styled.Wrapper>
    </Styled.Root>
  )
}

export default HomeEndSection
