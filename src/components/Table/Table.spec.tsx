import { cleanup, render, screen } from '@testing-library/react'
import Table from './Table'

describe('<Table />', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test('#1. Exist - Render default', () => {
    render(<Table />)

    const table = screen.getByTestId('table')

    expect(table).toBeInTheDocument()
  })
})
