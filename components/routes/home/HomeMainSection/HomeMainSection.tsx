import { FC } from 'react'
import Image from 'next/Image'
import * as Styled from './styles'
import Container from 'components/Container/Container'
import Button from 'components/Button/Button'

interface HomeMainSectionProps {
  className?: string
}

const HomeMainSection: FC<HomeMainSectionProps> = ({ className }) => {
  return (
    <Styled.Root className={className}>
      <Styled.CursorSearch>Cool! Let me find a cafe in this area</Styled.CursorSearch>
      <Styled.CursorAdd scheme='green' direction='right' avatarType={2}>
        I just added another day to our tags
      </Styled.CursorAdd>
      <Styled.CursorCheck scheme='orange' direction='right' avatarType={3}>
        Heya, I just saved this lodge, check it
      </Styled.CursorCheck>

      <Container>
        <Styled.Heart>
          <Image src='/images/heart.png' width={125} height={125} />
        </Styled.Heart>
        <img src='/dist/images/heart.png' alt='' className='main__heart' />
        <Styled.Title>Создай личную карту</Styled.Title>
        <Styled.Typing>для себя и друзей</Styled.Typing>
        <Styled.Description>CheckPoint - самый быстрый обмен рекомендациями</Styled.Description>

        <Styled.ButtonWrapper>
          <Button scheme='primary'>⚡️ Создать карту</Button>
        </Styled.ButtonWrapper>

        <Styled.Cover></Styled.Cover>
      </Container>
    </Styled.Root>
  )
}

export default HomeMainSection
