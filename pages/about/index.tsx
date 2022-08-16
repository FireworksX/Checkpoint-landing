import { useEffect } from 'react'
import { NextPage } from 'next'
import * as Styled from './styles'
import Container from 'components/Container/Container'
import { reveal } from 'utils/reveal'
import ActionButton from 'components/ActionButton/ActionButton'

const About: NextPage = () => {
  useEffect(() => {
    reveal('.WhyImage')

    reveal('.BottomReveal', {
      origin: 'bottom',
      distance: '60px'
    })
  }, [])

  return (
    <Styled.Root>
      <Styled.WhySection>
        <Container>
          <Styled.WhyImage className='WhyImage' />
          <Styled.WhyTitle className='BottomReveal'>"Почему CheckPoint?"</Styled.WhyTitle>

          <Styled.WhyDescription className='BottomReveal'>
            CheckPoint расшифровывается как «Проверь точку» — это утверждение, которое может означать разные вещи для
            разных людей. И это мышление про новые эмоции - близкие или далекие новые места, ощущение новых ароматов,
            общение с новыми людьми и познавание новых вещей способом, который уникален для вас.
          </Styled.WhyDescription>
        </Container>
      </Styled.WhySection>

      <Styled.PurposeSection>
        <Container>
          <Styled.PurposeTitle className='BottomReveal'>Наша цель</Styled.PurposeTitle>
          <Styled.PurposeValue className='BottomReveal'>
            Дать возможность быстро обмениваться рекомендациями и получать новые эмоции.
          </Styled.PurposeValue>
        </Container>
      </Styled.PurposeSection>

      <Styled.SolutionSection>
        <Styled.GifCartoon />
        <Styled.GifBaby />
        <Styled.GifStop />
        <Container>
          <Styled.SolutionCover src='/images/angry_cartoon.gif' />
          <Styled.SolutionTitle className='BottomReveal'>
            Но почему так мучительно трудно искать новые места для посещения?
          </Styled.SolutionTitle>
          <Styled.SolutionDescription className='BottomReveal'>
            Между картами Яндекс и Google, 5 отзовиками, 15 скриншотами, 10 рекомендациями друзей в мессенджере - поиск
            локаций кажется скорее рутиной, чем радостью. Но что интересного в том, чтобы искать новую точку для
            посещения в одиночку?
          </Styled.SolutionDescription>
        </Container>
      </Styled.SolutionSection>

      <Styled.DnaSection>
        <Container>
          <Styled.DnaTitle className='BottomReveal'>Изучение — часть нашей ДНК 🧬</Styled.DnaTitle>
          <Styled.DnaDescription className='BottomReveal'>
            В мире, где 84% представителей поколения Z и миллениалов полагаются на рекомендации, чтобы решить, куда
            пойти и что делать... Ясно одно: изучение нового — неотъемлемая часть нашей жизни.
          </Styled.DnaDescription>
        </Container>
      </Styled.DnaSection>

      <Styled.SocialSection>
        <Styled.GifStoneAge />
        <Styled.GifFallingHole />
        <Container>
          <Styled.SocialCover src='/images/stone_age_cartoon.gif' />
          <Styled.SocialTitle className='BottomReveal'>Дилемма социальных сетей и мессенджеров</Styled.SocialTitle>
          <Styled.SocialDescription className='BottomReveal'>
            Любой, кто пытался спланировать места для посещений с помощью социальных сетей или мессенджеров, знает, что
            это глубокая “кроличья нора” контента без функциональности, которая действительно нужна всем нам. В итоге мы
            не нашли приложение, которое действительно работало бы для того, чтобы поколения Z и миллениалы сегодня
            легко находили новые локации и быстро обменивались лучшими из них. Поэтому мы решили создать его сами.
          </Styled.SocialDescription>
        </Container>
      </Styled.SocialSection>

      <Styled.MeetSection>
        <Container>
          <Styled.MeetCover src='/images/minion.gif' />
          <Styled.MeetTitle className='BottomReveal'>
            Познакомьтесь с CheckPoint. Мы поможем вам найти новые крутые места для посещения.
          </Styled.MeetTitle>
          <Styled.MeetDescription className='BottomReveal'>
            <Styled.MeetList>
              <Styled.MeetItem>⚡️ Доступ к уникальным инструментам</Styled.MeetItem>
              <Styled.MeetItem>⚡️ Подписывайтесь на людей, которым нравится то, что любите вы.</Styled.MeetItem>
              <Styled.MeetItem>
                ⚡️ Получите информацию, чтобы решить, на что потратить свое время и деньги
              </Styled.MeetItem>
              <Styled.MeetItem>⚡️ Соберите все в одном месте</Styled.MeetItem>
            </Styled.MeetList>
            <div>
              Мы не просто <b>еще одно</b> приложение с картой.
            </div>
          </Styled.MeetDescription>
        </Container>
      </Styled.MeetSection>

      <Styled.FactsSections>
        <Container>
          <Styled.FactsTitle className='BottomReveal'>
            Вот несколько вещей, которые, по нашему мнению, изменят будущее к лучшему.
          </Styled.FactsTitle>
          <Styled.FactsWrapper className='BottomReveal'>
            <Styled.FactsGroup>
              <Styled.FactsHead>🌟 Амбассадоры</Styled.FactsHead>
              <Styled.FactsText>
                Амбассадоры будут продолжать играть решающую роль в том, чтобы вдохновлять и показывать миру, что
                хорошо. Мы стремимся предоставить инструменты, которые позволяют амбассадорам и создателям легко
                делиться своим опытом.
              </Styled.FactsText>
            </Styled.FactsGroup>

            <Styled.FactsGroup>
              <Styled.FactsHead>🌏 Коллективное разнообразие</Styled.FactsHead>
              <Styled.FactsText>
                Нам лучше вместе. Единого способа исследовать новое не существует, и мы приветствуем людей разных
                культур, полов, происхождения, бюджетов и предпочтений, чтобы обогатить наше глобальное сообщество.
              </Styled.FactsText>
            </Styled.FactsGroup>

            <Styled.FactsGroup>
              <Styled.FactsHead>👀 Любопытные перспективы</Styled.FactsHead>
              <Styled.FactsText>
                Мы верим, что жизнь открывает перед вами новые возможности, о которых вы, возможно, и не подозревали. Мы
                верим в передачу этих историй, чтобы вдохновить следующего человека открыть для себя новые локации,
                людей и впечатления.
              </Styled.FactsText>
            </Styled.FactsGroup>

            <Styled.FactsGroup>
              <Styled.FactsHead>😎 Непрерывное обучение</Styled.FactsHead>
              <Styled.FactsText>
                Мы переосмысливаем то, как новый опыт вписываются в нашу повседневную жизнь и как мы взаимодействуем с
                технологиями, чтобы мечтать и исследовать места впервые. Мы постоянно открыты для ваших отзывов и
                предложений, чтобы мы могли продолжать совершенствовать наш продукт.
              </Styled.FactsText>
            </Styled.FactsGroup>
          </Styled.FactsWrapper>
        </Container>
      </Styled.FactsSections>

      <Styled.TeamSection>
        <Container>
          <Styled.TeamTitle className='BottomReveal'>Знакомтесь с командой</Styled.TeamTitle>
          <Styled.TeamDescription className='BottomReveal'>
            Мы создаем цифровые инструменты для поколения Z и миллениалов, чтобы они могли планировать их следующие
            лучшие посещения новых мест с помощью интегрированных карт и рекомендаций реальных людей.
          </Styled.TeamDescription>

          <Styled.TeamsWrapper className='BottomReveal'>
            <Styled.TeamsCell>
              <Styled.TeamAvatar src='/images/arthur_avatar.png' />
              <Styled.TeamName>Артур Абелтиньш</Styled.TeamName>
              <Styled.TeamRole>Founder, CTO</Styled.TeamRole>
              <Styled.TeamText>
                Технологический лидер и опытный разработчик. Работает front-end девелопером больше 5-ти лет, 2 года
                занимался разработкой туристического портала goru.travel.
              </Styled.TeamText>
            </Styled.TeamsCell>
            <Styled.TeamsCell>
              <Styled.TeamAvatar src='/images/alex_avatar.png' />
              <Styled.TeamName>Пономарев Александр</Styled.TeamName>
              <Styled.TeamRole>Со-Founder</Styled.TeamRole>
              <Styled.TeamText>
                Опытный руководитель. Более 10 лет в сфере продаж. 2 года работает в Skillbox руководителем продаж в
                разных направлениях.
              </Styled.TeamText>
            </Styled.TeamsCell>
          </Styled.TeamsWrapper>
        </Container>
      </Styled.TeamSection>

      <Styled.ReadySection>
        <Container>
          <Styled.ReadyTitle className='BottomReveal'>Ваши следующие лучшие идеи вы возьмете здесь.</Styled.ReadyTitle>
          <Styled.ButtonWrapper className='BottomReveal'>
            <ActionButton>⚡️ Начать сейчас</ActionButton>
          </Styled.ButtonWrapper>
        </Container>
      </Styled.ReadySection>
    </Styled.Root>
  )
}

export default About
