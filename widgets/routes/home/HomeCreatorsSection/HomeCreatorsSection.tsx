import { FC } from 'react'
import * as Styled from './styles'
import Container from 'components/Container/Container'
import Button from 'components/Button/Button'

interface HomeCreatorsSectionProps {
  className?: string
}

const HomeCreatorsSection: FC<HomeCreatorsSectionProps> = ({ className }) => {
  return (
    <Styled.Root className={className}>
      <Container>
        <Styled.Image />
        <Styled.Title>Мощные инструменты для любителей нового.</Styled.Title>
        <Styled.Description>
          Поделитесь прекрасными впечатлениями с друзями. Простой визуальный формат, Автоматическая интеграция точек.
          Интеграция с загрузкой из Instagram.
        </Styled.Description>
        <Styled.ButtonWrapper>
          <Button scheme='primary'>Посмотреть функции авторов</Button>
        </Styled.ButtonWrapper>
      </Container>
    </Styled.Root>
  )
}

export default HomeCreatorsSection
