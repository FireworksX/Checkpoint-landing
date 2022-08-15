import { FC, useEffect } from 'react'
import Typed from 'react-typed'
import Image from 'next/Image'
import * as Styled from './styles'
import Container from 'components/Container/Container'
import Button from 'components/Button/Button'
import { reveal } from 'utils/reveal'

interface HomeMainSectionProps {
  className?: string
}

const HomeMainSection: FC<HomeMainSectionProps> = ({ className }) => {
  useEffect(() => {
    reveal('.cursorSearch', {
      distance: '200px',
      origin: 'right'
    })

    reveal('.cursorAdd', {
      distance: '200px',
      origin: 'left'
    })

    reveal('.cursorCheck', {
      distance: '200px',
      origin: 'bottom'
    })
  }, [])

  return (
    <Styled.Root className={className}>
      <Styled.CursorSearch className='cursorSearch'>Cool! Let me find a cafe in this area</Styled.CursorSearch>
      <Styled.CursorAdd className='cursorAdd' scheme='green' direction='right' avatarType={2}>
        I just added another day to our tags
      </Styled.CursorAdd>
      <Styled.CursorCheck className='cursorCheck' scheme='orange' direction='right' avatarType={3}>
        Heya, I just saved this lodge, check it
      </Styled.CursorCheck>

      <Container>
        <Styled.Heart>
          <Image src='/images/heart.png' width={125} height={125} />
        </Styled.Heart>
        <img src='/dist/images/heart.png' alt='' className='main__heart' />
        <Styled.Title>Узнайте лучшее</Styled.Title>

        <Styled.Typing>
          <Typed
            strings={['в любом городе', 'вместе с друзьями', 'для себя']}
            typeSpeed={100}
            backSpeed={100}
            loop
          />
        </Styled.Typing>
        <Styled.Description>Самый простой способ делиться с друзьями </Styled.Description>

        <Styled.ButtonWrapper>
          <Button scheme='primary'>⚡️ Начать сейчас</Button>
        </Styled.ButtonWrapper>

        <Styled.Cover></Styled.Cover>
      </Container>
    </Styled.Root>
  )
}

export default HomeMainSection
