import { ChangeEventHandler, EventHandler, FC, SyntheticEvent, useState } from 'react'
import { LoginContainer } from './Login.styled'
import { LoginProps } from './interfaces'
import { Nav } from './Nav'
import { Body } from './Body'
import { Footer } from './Footer'
import { auth } from '../../../../firebase-config'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'

export const Login: FC<LoginProps> = ({ dataTestId = 'login' }) => {
  const countryCode = '+57'
  const [phoneNumber, setPhoneNumber] = useState(countryCode)
  const [expandForm, setExpandForm] = useState(false)

  const generateReCatcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      'sign-in-button',
      {
        size: 'invisible',
        callback: (response: any) => {
          console.log(response)
        },
      },
      auth,
    )
  }
  const handleSubmit = (e: SyntheticEvent): void => {
    e.preventDefault()
    if (phoneNumber.length >= 12) {
      setExpandForm(true)
      generateReCatcha()
      const appVerifier = window.recaptchaVerifier
      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then(confirmationResult => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult
          // ...









































































































































































































          
        })
        .catch(error => {
          console.log('Error :>>>>>', error)
        })
    }
  }
  return (
    <LoginContainer data-testid={dataTestId}>
      <form onSubmit={handleSubmit}>
        <input type="tel" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
        {!expandForm && <button type="submit">Log</button>}
        <div id="sign-in-button"></div>
      </form>
      {/* <Nav />
      <Body />
      <Footer /> */}
    </LoginContainer>
  )
}
