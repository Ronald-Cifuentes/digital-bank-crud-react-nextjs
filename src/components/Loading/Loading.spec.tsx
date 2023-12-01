import { cleanup, render, screen } from '@testing-library/react'
import Loading from './Loading'

describe('<Loading />', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test('#1. Exist - Render default', () => {
    render(<Loading />)

    const loading = screen.getByTestId('loading')

    expect(loading).toBeInTheDocument()
  })
})
