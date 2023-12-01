import { cleanup, render, screen } from '@testing-library/react'
import SectionHome from './SectionHome'

describe('<SectionHome />', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test('#1. Exist - Render default', () => {
    render(<SectionHome />)

    const sectionHome = screen.getByTestId('section-home')

    expect(sectionHome).toBeInTheDocument()
  })
})
