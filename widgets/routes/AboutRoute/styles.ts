import styled from 'styled-components'
import MainLayout from 'layouts/MainLayout/MainLayout'
import { scRespondTo } from 'styles/theme/respond'

export const Root = styled(MainLayout)``

export const BaseSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 0 80px 0;

  ${scRespondTo.sm} {
    padding: 150px 0 100px 0;
  }
`

export const TitleContainer = styled.div`
  margin: 0 auto;
  text-align: center;

  ${scRespondTo.sm} {
    width: 80%;
  }
`

export const DescriptionContainer = styled.div`
  margin: 0 auto;

  ${scRespondTo.sm} {
    width: 60%;
  }
`

export const WhySection = styled(BaseSection)`
  background: ${({ theme }) => theme.colors.accent.second};
  text-align: center;
`

export const WhyImage = styled.div`
  background: ${({ theme }) => theme.colors.background.second};
  max-width: 800px;
  height: 270px;
  border-radius: 30px;
  margin: 0 auto 40px auto;

  ${scRespondTo.sm} {
    height: 470px;
  }
`

export const WhyTitle = styled(TitleContainer).attrs({ as: 'h1' })`
  font-size: 36px;
  line-height: 45px;
  color: ${({ theme }) => theme.colors.typography.first};
  font-weight: 800;
  margin-bottom: 25px;

  ${scRespondTo.sm} {
    font-size: 78px;
    line-height: 65px;
  }
`

export const WhyDescription = styled(DescriptionContainer).attrs({ as: 'p' })`
  ${({ theme }) => theme.typography.text_16_20};
  color: ${({ theme }) => theme.colors.typography.first};
  font-weight: 600;

  ${scRespondTo.sm} {
    ${({ theme }) => theme.typography.text_18_22};
  }
`

export const PurposeSection = styled(BaseSection)`
  background: ${({ theme }) => theme.colors.background.fifth};
  padding: 150px 0 70px 0;
  text-align: center;
`

export const PurposeTitle = styled.div`
  ${({ theme }) => theme.typography.text_16_20};
  color: ${({ theme }) => theme.colors.typography.first};
  margin-bottom: 15px;
`

export const PurposeValue = styled.h2`
  color: ${({ theme }) => theme.colors.typography.first};
  ${({ theme }) => theme.typography.text_26_30};
  font-weight: 800;

  ${scRespondTo.sm} {
    ${({ theme }) => theme.typography.text_48_54};
  }
`

export const SolutionSection = styled(BaseSection)`
  background: ${({ theme }) => theme.colors.accent.second};
  padding: 100px 0;
  text-align: center;
  position: relative;
`

export const SolutionCover = styled.img`
  width: 290px;
  height: 160px;
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  overflow: hidden;
  margin-bottom: 40px;

  ${scRespondTo.md} {
    display: none;
  }
`

export const SolutionTitle = styled(TitleContainer).attrs({ as: 'h2' })`
  color: ${({ theme }) => theme.colors.typography.first};
  ${({ theme }) => theme.typography.text_26_30};
  font-weight: 800;
  margin-bottom: 15px;

  ${scRespondTo.sm} {
    ${({ theme }) => theme.typography.text_48_54};
  }
`

export const SolutionDescription = styled(DescriptionContainer).attrs({ as: 'p' })`
  color: ${({ theme }) => theme.colors.typography.first};
  ${({ theme }) => theme.typography.text_16_20};
`

export const DnaSection = styled(BaseSection)`
  min-height: initial;
  background: ${({ theme }) => theme.colors.accent.first};
  padding: 100px 0 70px 0;
  text-align: center;
`

export const DnaTitle = styled(TitleContainer).attrs({ as: 'h2' })`
  color: ${({ theme }) => theme.colors.typography.fourth};
  ${({ theme }) => theme.typography.text_26_30};
  font-weight: 800;
  margin-bottom: 25px;

  ${scRespondTo.sm} {
    ${({ theme }) => theme.typography.text_48_54};
  }
`

export const DnaDescription = styled(DescriptionContainer).attrs({ as: 'p' })`
  ${({ theme }) => theme.typography.text_16_20};
  color: ${({ theme }) => theme.colors.typography.fourth};
`

export const SocialSection = styled(BaseSection)`
  background: ${({ theme }) => theme.colors.background.fifth};
  text-align: center;
  position: relative;
`

export const SocialCover = styled.img`
  width: 230px;
  height: 170px;
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  overflow: hidden;
  margin-bottom: 40px;

  ${scRespondTo.md} {
    display: none;
  }
`

export const SocialTitle = styled(TitleContainer).attrs({ as: 'h2' })`
  color: ${({ theme }) => theme.colors.typography.first};
  ${({ theme }) => theme.typography.text_26_30};
  font-weight: 800;
  margin-bottom: 25px;

  ${scRespondTo.sm} {
    ${({ theme }) => theme.typography.text_48_54};
  }
`

export const SocialDescription = styled(DescriptionContainer).attrs({ as: 'p' })`
  ${({ theme }) => theme.typography.text_16_20};
  color: ${({ theme }) => theme.colors.typography.first};
`

export const MeetSection = styled(BaseSection)`
  background: ${({ theme }) => theme.colors.accent.second};
  text-align: center;
`

export const MeetList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 20px;
`

export const MeetItem = styled.li`
  padding: 7px 0;
`

export const MeetCover = styled.img`
  width: 100%;
  height: 165px;
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  overflow: hidden;
  margin-bottom: 30px;

  ${scRespondTo.sm} {
    width: 350px;
  }
`

export const MeetTitle = styled(TitleContainer).attrs({ as: 'h2' })`
  color: ${({ theme }) => theme.colors.typography.first};
  ${({ theme }) => theme.typography.text_26_30};
  font-weight: 800;
  margin-bottom: 25px;

  ${scRespondTo.sm} {
    ${({ theme }) => theme.typography.text_48_54};
  }
`

export const MeetDescription = styled(DescriptionContainer).attrs({ as: 'div' })`
  ${({ theme }) => theme.typography.text_16_20};
  color: ${({ theme }) => theme.colors.typography.first};
`

export const FactsSections = styled(BaseSection)`
  background: ${({ theme }) => theme.colors.background.fifth};
`

export const FactsTitle = styled(TitleContainer).attrs({ as: 'h2' })`
  color: ${({ theme }) => theme.colors.typography.first};
  margin-bottom: 50px;
  ${({ theme }) => theme.typography.text_26_30};
  font-weight: 800;

  ${scRespondTo.sm} {
    ${({ theme }) => theme.typography.text_48_54};
  }
`

export const FactsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 60px;
  grid-column-gap: 80px;
  justify-content: center;

  ${scRespondTo.sm} {
    grid-template-columns: repeat(2, minmax(300px, 400px));
    grid-row-gap: 80px;
  }
`

export const FactsGroup = styled.div`
  text-align: center;
`

export const FactsHead = styled.div`
  ${({ theme }) => theme.typography.text_18_22};
  color: ${({ theme }) => theme.colors.typography.first};
  font-weight: 800;
  margin-bottom: 15px;
`

export const FactsText = styled.p`
  ${({ theme }) => theme.typography.text_16_20};
  color: ${({ theme }) => theme.colors.typography.first};
`

export const TeamSection = styled(BaseSection)`
  background: ${({ theme }) => theme.colors.accent.first};
  text-align: center;
`

export const TeamTitle = styled(TitleContainer).attrs({ as: 'h2' })`
  color: ${({ theme }) => theme.colors.typography.fourth};
  margin-bottom: 25px;
  ${({ theme }) => theme.typography.text_26_30};
  font-weight: 800;

  ${scRespondTo.sm} {
    ${({ theme }) => theme.typography.text_48_54};
  }
`

export const TeamDescription = styled(DescriptionContainer).attrs({ as: 'p' })`
  ${({ theme }) => theme.typography.text_16_20};
  color: ${({ theme }) => theme.colors.typography.fourth};
  margin-bottom: 50px;
`

export const TeamsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  grid-gap: 100px;

  ${scRespondTo.sm} {
    grid-template-columns: repeat(2, minmax(200px, 300px));
  }
`

export const TeamsCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TeamAvatar = styled.img`
  height: 150px;
  margin-bottom: 40px;
`

export const TeamName = styled.div`
  ${({ theme }) => theme.typography.text_18_22};
  color: ${({ theme }) => theme.colors.typography.fourth};
  font-weight: 800;
  margin-bottom: 10px;
`

export const TeamRole = styled.div`
  ${({ theme }) => theme.typography.text_18_22};
  color: ${({ theme }) => theme.colors.typography.fourth};
  font-weight: 800;
  margin-bottom: 20px;
`

export const TeamText = styled.p`
  ${({ theme }) => theme.typography.text_14_24};
  color: ${({ theme }) => theme.colors.typography.fourth};
`

export const ReadySection = styled(BaseSection)`
  background: ${({ theme }) => theme.colors.accent.first};
  text-align: center;
  min-height: initial;
`

export const ReadyTitle = styled(TitleContainer).attrs({ as: 'h2' })`
  color: ${({ theme }) => theme.colors.typography.fourth};
  font-weight: 800;
  margin-bottom: 25px;
  ${({ theme }) => theme.typography.text_26_30};

  ${scRespondTo.sm} {
    ${({ theme }) => theme.typography.text_48_54};
  }
`

export const ButtonWrapper = styled.div`
  text-align: center;
`

export const GifLayout = styled.img`
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  overflow: hidden;
`

export const GifCartoon = styled(GifLayout).attrs({ src: '/images/angry_cartoon.gif' })`
  position: absolute;
  right: 20%;
  top: 10%;
  width: 290px;
  height: 160px;
  display: none;

  ${scRespondTo.md} {
    display: block;
  }
`

export const GifBaby = styled(GifLayout).attrs({ src: '/images/annoyd_baby.gif' })`
  position: absolute;
  left: 18%;
  top: 25%;
  width: 215px;
  height: 215px;
  display: none;

  ${scRespondTo.md} {
    display: block;
  }
`

export const GifStop = styled(GifLayout).attrs({ src: '/images/making_it_stop.gif' })`
  position: absolute;
  right: 18%;
  top: 65%;
  width: 290px;
  height: 160px;
  display: none;

  ${scRespondTo.md} {
    display: block;
  }
`

export const GifStoneAge = styled(GifLayout).attrs({ src: '/images/stone_age_cartoon.gif' })`
  position: absolute;
  left: 18%;
  top: 25%;
  width: 230px;
  height: 170px;
  display: none;

  ${scRespondTo.md} {
    display: block;
  }
`

export const GifFallingHole = styled(GifLayout).attrs({ src: '/images/falling_into_hole.gif' })`
  position: absolute;
  right: 20%;
  top: 65%;
  width: 290px;
  height: 160px;
  display: none;

  ${scRespondTo.md} {
    display: block;
  }
`
