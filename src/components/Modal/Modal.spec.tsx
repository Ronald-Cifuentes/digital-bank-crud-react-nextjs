import { cleanup, render, screen } from '@testing-library/react'
import Modal from './Modal'

describe('<Modal />', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test('#1. Exist - Render default', () => {
    render(<Modal />)

    const modal = screen.getByTestId('modal')

    expect(modal).toBeInTheDocument()
  })
})
