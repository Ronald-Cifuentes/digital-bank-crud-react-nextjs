import { render, screen } from '@testing-library/react'
import { Login } from './Login'

describe('<Login />', () => {
  test('#1. Exist - Render correctly', () => {
    render(<Login />)

    const login = screen.getByTestId('login')

    expect(login).toBeInTheDocument()
  })
})
