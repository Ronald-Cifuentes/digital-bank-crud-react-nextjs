import { FC } from 'react'
import { NavContainer } from './Nav.styled'
import { NavProps } from './interfaces'

export const Nav: FC<NavProps> = ({ dataTestId = 'nav' }) => {
  const brandHandle = (): void => {}
  return (
    <NavContainer data-testid={dataTestId}>
      <nav className="container-fluid">
        <ul>
          <li>
            <a href="./" className="contrast" onClick={brandHandle}>
              <strong>Brand</strong>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <details role="list" dir="rtl">
              <summary aria-haspopup="listbox" role="link" className="secondary">
                Theme
              </summary>
              <ul role="listbox">
                <li>
                  <a href="#" data-theme-switcher="auto">
                    Auto
                  </a>
                </li>
                <li>
                  <a href="#" data-theme-switcher="light">
                    Light
                  </a>
                </li>
                <li>
                  <a href="#" data-theme-switcher="dark">
                    Dark
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details role="list" dir="rtl">
              <summary aria-haspopup="listbox" role="link" className="secondary">
                Examples (v1)
              </summary>
              <ul role="listbox">
                <li>
                  <a href="../v1-preview/">Preview</a>
                </li>
                <li>
                  <a href="../v1-preview-rtl/">Right-to-left</a>
                </li>
                <li>
                  <a href="../v1-classless/">Classless</a>
                </li>
                <li>
                  <a href="../v1-basic-template/">Basic template</a>
                </li>
                <li>
                  <a href="../v1-company/">Company</a>
                </li>
                <li>
                  <a href="../v1-google-amp/">Google Amp</a>
                </li>
                <li>
                  <a href="../v1-sign-in/">Sign in</a>
                </li>
                <li>
                  <a href="../v1-bootstrap-grid/">Bootstrap grid</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </nav>
    </NavContainer>
  )
}