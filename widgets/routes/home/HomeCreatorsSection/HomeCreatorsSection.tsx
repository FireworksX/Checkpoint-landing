import { FC, useEffect } from 'react'
import * as Styled from './styles'
import Container from 'components/Container/Container'
import Button from 'components/Button/Button'
import { reveal } from 'utils/reveal'

interface HomeCreatorsSectionProps {
  className?: string
}

const HomeCreatorsSection: FC<HomeCreatorsSectionProps> = ({ className }) => {
  useEffect(() => {
    reveal('.creatorsWrapper, .creatorsTitle, .creatorsDescription', {
      distance: '200px',
      origin: 'bottom'
    })
  }, [])

  return (
    <Styled.Root className={className}>
      <Container>
        <Styled.Image />
        <Styled.Title className='creatorsTitle'>Мощные инструменты для любителей нового.</Styled.Title>
        <Styled.Description className='creatorsDescription'>
          Поделитесь прекрасными впечатлениями с друзями. Простой визуальный формат, Автоматическая интеграция точек.
          Интеграция с загрузкой из Instagram.
        </Styled.Description>
        <Styled.ButtonWrapper className='creatorsWrapper'>
          <Button scheme='primary'>Посмотреть функции авторов</Button>
        </Styled.ButtonWrapper>
      </Container>
    </Styled.Root>
  )
}

export default HomeCreatorsSection
