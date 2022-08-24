import { FC, useMemo, useState } from 'react'
import * as Styled from './styles'
import Container from 'components/Container/Container'
import Button from 'components/Button/Button'
import { Features, FeaturesDescription, FeaturesList, Sponsors, SponsorsWrapper } from './styles'
import SponsorCard from './components/SponsorCard/SponsorCard'

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
            <a href='https://sponsr.ru/check_point' target='_blank'>
              <Styled.DonateButton scheme='primary'>❤️ Пожертвовать</Styled.DonateButton>
            </a>
          </Styled.DonateWrapper>
        </Container>
      </Styled.Main>

      <Styled.Motivation>
        <Container>
          <Styled.MotivationDescription>
            Наш проект создан для того, чтобы <b>сделать нашу жизнь удобней и ярче!</b> Благодаря нашему приложению вы
            будете тратить намного меньше времени для обмена локациями с друзьями. Также вы привнесете{' '}
            <i>свое, лучшее и именно то</i>, что поможет другим. Помогая нам, <b>вы экономите свое время </b> - наш
            главный ресурс. Мы предлагаем каждому поучаствовать в создании <b>нового и классного!</b> Поддержите нас и
            откройте для себя еще больше удобных функций в приложении.
          </Styled.MotivationDescription>

          <Styled.DonateButtonWrapper>
            <a href='https://sponsr.ru/check_point' target='_blank'>
              <Styled.DonateButton scheme='primaryReverse'>❤️ Пожертвовать</Styled.DonateButton>
            </a>
          </Styled.DonateButtonWrapper>
        </Container>
      </Styled.Motivation>

      <Styled.Features>
        <Container>
          <Styled.FeaturesTitle>Преимущейтва спонсоров</Styled.FeaturesTitle>
          <Styled.FeaturesDescription>
            Мы будем благорадны любой поддержке, но если вы задонатите больше{' '}
            <b>500руб., то вы получите Premium подписку.</b> В неё входит много всего прикольного
          </Styled.FeaturesDescription>

          <Styled.FeaturesList>
            <Styled.FeaturesItem>⚡️ Отображение “премиум”-статуса на аватарке</Styled.FeaturesItem>
            <Styled.FeaturesItem>🌇 Анимированная аватарка</Styled.FeaturesItem>
            <Styled.FeaturesItem>
              🏡 Совместное обсуждение новых идей в ТГ-чате с создателями проекта
            </Styled.FeaturesItem>
            <Styled.FeaturesItem>☄️ Отображение секретных мест</Styled.FeaturesItem>
            <Styled.FeaturesItem>🦾 Добавление новых полей в конструкторе мест</Styled.FeaturesItem>
            <Styled.FeaturesItem>📈 Сбор и аналитика статистики</Styled.FeaturesItem>
            <Styled.FeaturesItem>🪄 Возможность организовать онлайн-продажи</Styled.FeaturesItem>
            <Styled.FeaturesItem>🤑 Кэшбэк за покупки внутри приложения</Styled.FeaturesItem>
          </Styled.FeaturesList>

          <Styled.DonateButtonWrapper>
            <a href='https://sponsr.ru/check_point' target='_blank'>
              <Styled.DonateButton scheme='primary'>🏄‍♂️ Получить премиум</Styled.DonateButton>
            </a>
          </Styled.DonateButtonWrapper>
        </Container>
      </Styled.Features>

      <Styled.Sponsors>
        <Container>
          <Styled.SponsorsTitle>Спонсоры</Styled.SponsorsTitle>

          <Styled.SponsorsWrapper>
            <SponsorCard />
            <SponsorCard />
            <SponsorCard />
            <SponsorCard />
            <SponsorCard />
            <SponsorCard />
            <SponsorCard />
            <SponsorCard />
            <SponsorCard />
            <SponsorCard />
            <SponsorCard />
            <SponsorCard />
          </Styled.SponsorsWrapper>
        </Container>
      </Styled.Sponsors>
    </Styled.Root>
  )
}

export default DonateRoute
