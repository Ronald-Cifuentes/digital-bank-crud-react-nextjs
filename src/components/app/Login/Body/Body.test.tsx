import { render, screen } from '@testing-library/react'
import { Body } from './Body'

describe('<Body />', () => {
  test('#1. Exist - Render correctly', () => {
    render(<Body />)

    const body = screen.getByTestId('body')

    expect(body).toBeInTheDocument()
  })
})
