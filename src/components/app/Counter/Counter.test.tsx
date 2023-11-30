import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'

describe('<Counter />', () => {
  test('#1. Exist - Render correctly', () => {
    render(<Counter />)

    const counter = screen.getByTestId('counter')

    expect(counter).toBeInTheDocument()
  })
})
