import { FC } from 'react'
import { FooterContainer } from './Footer.styled'
import { FooterProps } from './interfaces'

export const Footer: FC<FooterProps> = ({ dataTestId = 'footer' }) => (
  <FooterContainer data-testid={dataTestId}>
    <footer className="container-fluid">
      <small>
        Built with{' '}
        <a href="https://picocss.com" className="secondary">
          Pico
        </a>{' '}
        •
        <a href="https://github.com/picocss/examples/tree/master/v1-sign-in/" className="secondary">
          Source code
        </a>
      </small>
    </footer>
  </FooterContainer>
)
