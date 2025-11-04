import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import NotFoundPage from '../app/not-found'
 
describe('Testing Page', () => {
  it('renders NotFoundPage', () => {
    render(<NotFoundPage />)
 
    expect(screen.getByText("The requested page doesn't exist.")).toBeInTheDocument()
  })
})