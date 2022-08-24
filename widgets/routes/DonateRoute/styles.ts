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
  padding: 160px 0 100px 0;
  background: ${({ theme }) => theme.colors.accent.first};
`

export const Goal = styled.div`
  ${({ theme }) => theme.typography.text_20_24};
  margin-bottom: 15px;
  text-align: center;
  color: ${({ theme }) => theme.colors.typography.fourth};
  font-weight: 800;

  ${scRespondTo.sm} {
    ${({ theme }) => theme.typography.text_26_30};
    text-align: left;
  }
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
  ${({ theme }) => theme.typography.text_14_24};
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.typography.fourth};

  ${scRespondTo.sm} {
    ${({ theme }) => theme.typography.text_20_24};
  }
`

export const DonateInput = styled.input`
  ${({ theme }) => theme.typography.text_20_24};
  border: 3px solid ${({ theme }) => theme.colors.background.third};
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  padding: 12px;
  outline: none;
  margin-bottom: 25px;
`

export const DonateButton = styled(Button)`
`

export const DonateButtonWrapper = styled.div`
  text-align: center;
  margin-top: 35px;
`

export const Motivation = styled.section`
  padding: 120px 0 100px 0;
  background: ${({ theme }) => theme.colors.background.first};
`

export const MotivationDescription = styled.p`
  ${({ theme }) => theme.typography.text_20_24};
  color: ${({ theme }) => theme.colors.typography.first};
  text-align: center;

  ${scRespondTo.sm} {
    width: 60%;
    margin: 0 auto;
  }
`

export const Features = styled.section`
  padding: 120px 0 100px 0;
  background: ${({ theme }) => theme.colors.accent.second};
  min-height: 100vh;
`

export const FeaturesTitle = styled.h2`
  ${({ theme }) => theme.typography.text_32_38};
  color: ${({ theme }) => theme.colors.typography.first};
  text-align: center;
  font-weight: 800;
`

export const FeaturesDescription = styled.p`
  ${({ theme }) => theme.typography.text_20_24};
  color: ${({ theme }) => theme.colors.typography.first};
  text-align: center;
  margin-bottom: 100px;

  ${scRespondTo.sm} {
    width: 50%;
    margin: 0 auto 100px auto;
  }
`

export const FeaturesList = styled.ul`
  padding: 0;
  list-style-type: none;

  ${scRespondTo.sm} {
    width: 50%;
    margin: 0 auto;
  }
`

export const FeaturesItem = styled.li`
  padding: 10px 0;
  ${({ theme }) => theme.typography.text_20_24};
  color: ${({ theme }) => theme.colors.typography.first};
`

export const Sponsors = styled.section`
  padding: 120px 0 100px 0;
  background: ${({ theme }) => theme.colors.accent.fifth};
  min-height: 100vh;
`

export const SponsorsTitle = styled.h2`
  ${({ theme }) => theme.typography.text_32_38};
  color: ${({ theme }) => theme.colors.typography.first};
  text-align: center;
  font-weight: 800;
  margin-bottom: 50px;
`

export const SponsorsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 40px;

  ${scRespondTo.sm} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${scRespondTo.md} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${scRespondTo.xl} {
    grid-template-columns: repeat(4, 1fr);
  }
`
