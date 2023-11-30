import { render, screen } from '@testing-library/react'
import { Nav } from './Nav'

describe('<Nav />', () => {
  test('#1. Exist - Render correctly', () => {
    render(<Nav />)

    const nav = screen.getByTestId('nav')

    expect(nav).toBeInTheDocument()
  })
})
