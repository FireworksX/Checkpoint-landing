import { FC, ReactNode } from 'react'
import Image from 'next/image'
import * as Styled from './styles'

export interface CursorProps {
  avatarType?: 1 | 2 | 3 | 4 | 5
  className?: string
  direction?: 'left' | 'right'
  scheme?: 'green' | 'blue' | 'orange' | 'pink' | ''
  children: ReactNode
}

const Cursor: FC<CursorProps> = ({ className, avatarType = 1, direction = 'left', scheme, children }) => {
  return (
    <Styled.Root className={className} direction={direction} scheme={scheme}>
      <Styled.Wrapper>
        <Styled.Arrow>
          <svg width='27' height='32' viewBox='0 0 27 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M13.3434 0.705079L0.873713 30.3373L13.7979 26.3565L26.6521 31.25L13.3434 0.705079Z'
              fill='currentColor'
            ></path>
          </svg>
        </Styled.Arrow>
        <Styled.Avatar>
          <Image src={`/images/avatar-${avatarType}.png`} width={28} height={28} alt='cursor avatar' />
        </Styled.Avatar>
        {children}
      </Styled.Wrapper>
    </Styled.Root>
  )
}

export default Cursor
