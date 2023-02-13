import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
test('renders a red button', () => {
  render(<App />)
  const button = screen.getByRole("button", { name: "Click me!" })
    expect(button).toHaveStyle({backgroundColor:"red"})
});

test('when clicks button change to blue', () => { 
  render(<App />)
  const button = screen.getByRole("button", { name: "Click me!" })  
  fireEvent.click(button)
  expect(button).toHaveTextContent('I was clicked!!')
})
 
test('should display checkbox', async () => {
  render(<App />)
  const label = screen.getByLabelText('Please accept terms')
  const checkbox = screen.getByRole('checkbox')  
  expect(checkbox).toBeInTheDocument()
  expect(label).toBeInTheDocument()
})

test('should display container after click checkbox', () => { 
  render(<App />)
  //show html element
  const checkbox = screen.getByRole('checkbox') 
  //trigger click fn 
  fireEvent.click(checkbox)
  //enables container changing value for conditional
  const container = screen.getByTestId('test-container')
  //assert container
  expect(container).toBeInTheDocument()

 })