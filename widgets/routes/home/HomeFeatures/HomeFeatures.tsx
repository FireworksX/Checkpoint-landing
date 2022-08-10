import { FC } from 'react'
import * as Styled from './styles'
import Container from '../../../../components/Container/Container'
import Button from '../../../../components/Button/Button'
import {FragmentOne} from "./styles";

interface HomeFeaturesProps {
  className?: string
}

const HomeFeatures: FC<HomeFeaturesProps> = ({ className }) => {
  return (
    <>
      <Styled.Section>
        <Styled.CursorSave scheme='pink' avatarType={3}>
          Just saved this directly from Insta 😉
        </Styled.CursorSave>

        <Styled.FragmentOne src='/images/line-1.svg' alt='' />
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
              <Button scheme='primary'>️️⚡️ Найти лучшее</Button>
            </div>
            <div>
              <Styled.Image />
            </div>
          </Styled.Wrapper>
        </Container>
      </Styled.Section>

      <Styled.Section>
        <Styled.CursorOrganize scheme='green' avatarType={4}>
          New here, anyone got recommendations in Santiago?
        </Styled.CursorOrganize>

        <Styled.FragmentTwo src='/images/line-2.svg' alt=''/>
        <Container>
          <Styled.Wrapper scheme='organize'>
            <div>
              <Styled.Image />
            </div>
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
              <Button scheme='primary'>️️⚡️ Добавить друзей</Button>
            </div>
          </Styled.Wrapper>
        </Container>
      </Styled.Section>

      <Styled.Section className='friends'>
        <Styled.FragmentThree src='/images/line-3.svg' alt='' />
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
              <Button scheme='primary'>️️⚡️ Начать сейчас</Button>
            </div>
            <div>
              <Styled.Image />
            </div>
          </Styled.Wrapper>
        </Container>
      </Styled.Section>
    </>
  )
}

export default HomeFeatures
