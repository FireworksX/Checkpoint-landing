import { FC, useMemo, useState } from 'react'
import * as Styled from './styles'
import Container from 'components/Container/Container'
import Button from 'components/Button/Button'

interface DonateRouteProps {
  className?: string
}

const GOAL = {
  title: 'Собираем деньги на ЗП дизайнеру',
  needed: 40000,
  value: 25600
}

const DonateRoute: FC<DonateRouteProps> = ({ className }) => {
  const [amount, setAmount] = useState(0)
  const percent = (GOAL.value * 100) / GOAL.needed

  const overPercent = Math.min(((GOAL.value + amount) * 100) / GOAL.needed, 100)

  return (
    <Styled.Root className={className}>
      <Styled.Main>
        <Container>
          <Styled.Goal>Текущая цель</Styled.Goal>
          <Styled.GoalDescription>{GOAL.title}</Styled.GoalDescription>
          <Styled.ProgressBack>
            <Styled.ProgressInner innerValue={percent} />
            <Styled.ProgressValue overValue={overPercent} />
          </Styled.ProgressBack>
          <Styled.GoalValue>Собрано 25 560руб. из 40 000руб.</Styled.GoalValue>

          <Styled.DonateWrapper>
            <Styled.DonateText>Вы можете ускорить развитие сервиса</Styled.DonateText>
            <Styled.DonateInput
              placeholder='Любая сумма'
              value={amount}
              onChange={({ target: { value } }) => setAmount(+value)}
            />
            <Styled.DonateButton scheme='primary'>Пожертвовать</Styled.DonateButton>
          </Styled.DonateWrapper>
        </Container>
      </Styled.Main>

      <Styled.Possibility>
        <Container>
          <Styled.PossibilityTitle>Возможности спонсоров</Styled.PossibilityTitle>

          <Styled.PossibilityWrapper>
            <Styled.Cell>
              <Styled.CellTitle>🚀 Platinum</Styled.CellTitle>

              <Button scheme='primaryReverse'>50 000 руб.</Button>
            </Styled.Cell>
            <Styled.Cell>
              <Styled.CellTitle>👩‍🚀 Gold</Styled.CellTitle>

              <Button scheme='primaryReverse'>25 000 руб.</Button>
            </Styled.Cell>
            <Styled.Cell>
              <Styled.CellTitle>🦾 Silver</Styled.CellTitle>

              <Button scheme='primaryReverse'>10 000 руб.</Button>
            </Styled.Cell>
            <Styled.Cell>
              <Styled.CellTitle>🏄‍♂️ Support</Styled.CellTitle>

              <Button scheme='primaryReverse'>1 000 руб.</Button>
            </Styled.Cell>
          </Styled.PossibilityWrapper>
        </Container>
      </Styled.Possibility>
    </Styled.Root>
  )
}

export default DonateRoute
