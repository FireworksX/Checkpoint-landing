import styled from 'styled-components'
import MainLayout from 'layouts/MainLayout/MainLayout'
import Button from 'components/Button/Button'
import { scRespondTo } from 'styles/theme/respond'

interface Props {
  innerValue?: number
  overValue?: number
}

export const Root = styled(MainLayout)``

export const Main = styled.section`
  padding: 120px 0 100px 0;
  background: ${({ theme }) => theme.colors.accent.first};
`

export const Goal = styled.div`
  ${({ theme }) => theme.typography.text_26_30};
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.typography.fourth};
  font-weight: 800;
`

export const GoalDescription = styled.div`
  ${({ theme }) => theme.typography.text_14_24};
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.typography.fourth};
`

export const GoalValue = styled.div`
  ${({ theme }) => theme.typography.text_14_24};
  color: ${({ theme }) => theme.colors.typography.fourth};
`

export const ProgressBack = styled.div`
  height: 60px;
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusThird};
  background: ${({ theme }) => theme.colors.background.fourth};
  padding: 4px;
  position: relative;
`

export const ProgressInner = styled.div<Props>`
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusThird};
  background: ${({ theme }) => theme.colors.accent.fourth};
  width: ${({ innerValue }) => innerValue || 0}%;
  height: 100%;
  position: relative;
  z-index: 2;
  transition: all ${({ theme }) => theme.animation.transitionDuration};
`

export const ProgressValue = styled.div<Props>`
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusThird};
  background: ${({ theme }) => theme.colors.accent.fifth};
  width: calc(${({ overValue }) => overValue || 0}% - 8px);
  height: 52px;
  position: absolute;
  top: 4px;
  left: 4px;
  transition: all ${({ theme }) => theme.animation.transitionDuration};
`

export const DonateWrapper = styled.div`
  margin-top: 60px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const DonateText = styled.div`
  ${({ theme }) => theme.typography.text_20_24};
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.typography.fourth};
`

export const DonateInput = styled.input`
  ${({ theme }) => theme.typography.text_20_24};
  border: 3px solid ${({ theme }) => theme.colors.background.third};
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  padding: 12px;
  outline: none;
  margin-bottom: 25px;
`

export const DonateButton = styled(Button)``

export const Possibility = styled.section`
  padding: 120px 0 100px 0;
  background: ${({ theme }) => theme.colors.background.first};
  min-height: 100vh;
`

export const PossibilityTitle = styled.h1`
  ${({ theme }) => theme.typography.text_38_44};
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.typography.first};
  font-weight: 800;
  text-align: center;
`

export const PossibilityWrapper = styled.div`
  display: grid;
  grid-gap: 60px;
  grid-template-columns: 1fr;

  ${scRespondTo.sm} {
    grid-gap: 100px;
    grid-template-columns: 1fr 1fr;
  }
`

export const Cell = styled.div`
  text-align: center;
`

export const CellTitle = styled.div`
  ${({ theme }) => theme.typography.text_18_22};
  font-weight: 800;
  color: ${({ theme }) => theme.colors.typography.first};
  margin-bottom: 15px;
`
