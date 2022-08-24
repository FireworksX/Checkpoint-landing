import { FC } from 'react'
import * as Styled from './styles'
import Button from 'components/Button/Button'

interface SponsorCardProps {
  className?: string
}

const SponsorCard: FC<SponsorCardProps> = ({ className }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Avatar />
      <Styled.FullName>Arthur Abeltinsh</Styled.FullName>
      <Styled.Username>fireworks</Styled.Username>
      <Styled.Description>Software engineer 👨‍💻 CTO of Checkpoint</Styled.Description>

      <Button scheme='primary'>Профиль</Button>
    </Styled.Root>
  )
}

export default SponsorCard
