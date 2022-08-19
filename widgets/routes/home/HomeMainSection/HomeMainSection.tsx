import { FC, useEffect } from 'react'
import Typed from 'react-typed'
import Image from 'next/image'
import * as Styled from './styles'
import Container from 'components/Container/Container'
import { reveal } from 'utils/reveal'
import ActionButton from 'components/ActionButton/ActionButton'

interface HomeMainSectionProps {
  className?: string
}

const HomeMainSection: FC<HomeMainSectionProps> = ({ className }) => {
  useEffect(() => {
    reveal('.RevealBottom', {
      distance: '20px',
      origin: 'bottom'
    })
  }, [])

  return (
    <Styled.Root className={className}>
        <Styled.CursorSearch className='RevealBottom'>Cool! Let me find a cafe in this area</Styled.CursorSearch>
        <Styled.CursorAdd className='RevealBottom' scheme='green' direction='right' avatarType={2}>
          I just added another day to our tags
        </Styled.CursorAdd>
        <Styled.CursorCheck className='RevealBottom' scheme='orange' direction='right' avatarType={3}>
          Heya, I just saved this lodge, check it
        </Styled.CursorCheck>

      <Container>
        <Styled.Heart>
          <Image src='/images/heart.png' width={125} height={125} />
        </Styled.Heart>
        <img src='/dist/images/heart.png' alt='' className='main__heart' />
        <Styled.Title>Узнайте лучшее</Styled.Title>

        <Styled.Typing>
          <Typed strings={['в любом городе', 'вместе с друзьями', 'для себя']} typeSpeed={100} backSpeed={100} loop />
        </Styled.Typing>
        <Styled.Description>Самый простой способ делиться с друзьями </Styled.Description>

        <Styled.ButtonWrapper>
          <ActionButton>⚡️ Начать сейчас</ActionButton>
        </Styled.ButtonWrapper>

        <Styled.Cover />
      </Container>
    </Styled.Root>
  )
}

export default HomeMainSection
