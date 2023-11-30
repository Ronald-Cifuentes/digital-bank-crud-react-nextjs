import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('<Footer />', () => {
  test('#1. Exist - Render correctly', () => {
    render(<Footer />)

    const footer = screen.getByTestId('footer')

    expect(footer).toBeInTheDocument()
  })
})
