import { FC } from 'react'
import { BodyContainer } from './Body.styled'
import { BodyProps } from './interfaces'

export const Body: FC<BodyProps> = ({ dataTestId = 'body' }) => {
  const loginHandle = (): void => {}
  return (
    <BodyContainer data-testid={dataTestId}>
      <main className="container">
        <article className="grid">
          <div>
            <hgroup>
              <h1>Sign in</h1>
              <h2>A minimalist layout for Login pages</h2>
            </hgroup>
            <form>
              <input type="text" name="login" placeholder="Login" aria-label="Login" required />
              <input
                type="password"
                name="password"
                placeholder="Password"
                aria-label="Password"
                // autocomplete="current-password"
                required
              />
              <fieldset>
                <label>
                  <input type="checkbox" role="switch" id="remember" name="remember" />
                  Remember me
                </label>
              </fieldset>
              <button type="submit" className="contrast" onClick={loginHandle}>
                Login
              </button>
            </form>
          </div>
          <div></div>
        </article>
      </main>
    </BodyContainer>
  )
}
