import { FC, useEffect } from 'react'
import * as Styled from './styles'
import Container from 'components/Container/Container'
import { reveal } from 'utils/reveal'
import ActionButton from "components/ActionButton/ActionButton";

interface HomeFeaturesProps {
  className?: string
}

const HomeFeatures: FC<HomeFeaturesProps> = () => {
  useEffect(() => {
    reveal('.section_save, .section_organize, .section_friends', {
      distance: '200px',
      origin: 'bottom'
    })

    reveal('.fragmentOne', {
      delay: 300,
      distance: '20px',
      origin: 'right'
    })

    reveal('.fragmentTwo', {
      delay: 400,
      distance: '20px',
      origin: 'left'
    })

    reveal('.fragmentThree', {
      delay: 400,
      distance: '20px',
      origin: 'right'
    })

    reveal('.cursorSave', {
      distance: '20px',
      origin: 'right'
    })

    reveal('.cursorOrganize', {
      distance: '20px',
      origin: 'bottom'
    })
  }, [])

  return (
    <>
      <Styled.Section className='section_save'>
        <Styled.CursorSave className='cursorSave' scheme='pink' avatarType={3}>
          Just saved this directly from Insta 😉
        </Styled.CursorSave>

        <Styled.FragmentOne className='fragmentOne' src='/images/line-1.svg' alt='' />
        <Container>
          <Styled.Wrapper scheme='save'>
            <div>
              <Styled.Title>Лучшее место для сохранения локаций</Styled.Title>
              <Styled.List>
                <Styled.Item>
                  - <span>Находи</span> города и места как в Google Maps
                </Styled.Item>
                <Styled.Item>
                  - <span>Добавляй</span> точки на личную карту
                </Styled.Item>
                <Styled.Item>
                  - <span>Делись</span> с друзьями рекомендациями и получай лучшее от них
                </Styled.Item>
              </Styled.List>
              <Styled.ButtonWrapper>
                <ActionButton>️️⚡️ Найти лучшее</ActionButton>
              </Styled.ButtonWrapper>
            </div>
            <Styled.Image />
          </Styled.Wrapper>
        </Container>
      </Styled.Section>

      <Styled.Section className='section_organize'>
        <Styled.CursorOrganize className='cursorOrganize' scheme='green' avatarType={4}>
          New here, anyone got <br /> recommendations in Santiago?
        </Styled.CursorOrganize>

        <Styled.FragmentTwo className='fragmentTwo' src='/images/line-2.svg' alt='' />
        <Container>
          <Styled.Wrapper scheme='organize'>
            <Styled.Image />
            <div>
              <Styled.Title>Спланируй визиты просто</Styled.Title>
              <Styled.List>
                <Styled.Item>
                  - <span>Подпишись</span> на друзей
                </Styled.Item>
                <Styled.Item>
                  - <span>Добавь</span> их любимыке точки к себе
                </Styled.Item>
                <Styled.Item>
                  - <span>Напиши</span> заметки
                </Styled.Item>
              </Styled.List>
              <Styled.ButtonWrapper>
                <ActionButton>️️⚡️ Добавить друзей</ActionButton>
              </Styled.ButtonWrapper>
            </div>
          </Styled.Wrapper>
        </Container>
      </Styled.Section>

      <Styled.Section className='section_friends'>
        <Styled.FragmentThree className='fragmentThree' src='/images/line-3.svg' alt='' />
        <Container>
          <Styled.Wrapper scheme='friends'>
            <div>
              <Styled.Title>Создай свой план</Styled.Title>
              <Styled.List>
                <Styled.Item>
                  - <span>Найди</span> идеи на общей карте
                </Styled.Item>
                <Styled.Item>
                  - <span>Получай</span> регулярные рекомендации
                </Styled.Item>
                <Styled.Item>
                  - <span>Ставь реакции</span>, потому что всем нужны смайлики 😍
                </Styled.Item>
              </Styled.List>
              <Styled.ButtonWrapper>
                <ActionButton>️️⚡️ Начать сейчас</ActionButton>
              </Styled.ButtonWrapper>
            </div>
            <Styled.Image />
          </Styled.Wrapper>
        </Container>
      </Styled.Section>
    </>
  )
}

export default HomeFeatures
