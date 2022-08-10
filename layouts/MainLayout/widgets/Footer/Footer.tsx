import { FC } from 'react'
import * as Styled from './styles'

interface FooterProps {
  className?: string
}

const Footer: FC<FooterProps> = ({ className }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Wrapper className='container container-md footer-wrapper'>
        <div>
          <Styled.Logo className='footer__logo' />
          <Styled.Text className='footer__text'>Copyright © 2022 Checkpoint Pty Ltd.</Styled.Text>
        </div>
        <div>
          <Styled.List className='footer__list'>
            <Styled.Text as='li' className='footer__text footer__item'>
              Travel Creators
            </Styled.Text>
            <Styled.Text as='li' className='footer__text footer__item'>
              FAQ
            </Styled.Text>
            <Styled.Text as='li' className='footer__text footer__item'>
              T&C
            </Styled.Text>
            <Styled.Text as='li' className='footer__text footer__item'>
              Privacy Policy
            </Styled.Text>
            <Styled.Text as='li' className='footer__text footer__item'>
              Careers
            </Styled.Text>
            <Styled.Text as='li' className='footer__text footer__item'>
              Contact Us
            </Styled.Text>
          </Styled.List>
        </div>
        <div>
          <Styled.Hiring className='footer__hiring'>🚀 We're hiring!</Styled.Hiring>
          <Styled.Title className='footer__title'>Contact us</Styled.Title>
          <Styled.Text as='a' href='mailto:hello@checkpoint.guide' className='footer__text'>
            hello@checkpoint.guide
          </Styled.Text>
          <Styled.Text as='a' href='https://t.me/fireworksxs' target='_blank' className='footer__text'>
            Telegram
          </Styled.Text>
        </div>
      </Styled.Wrapper>
    </Styled.Root>
  )
}

export default Footer
