import { fireEvent, render, screen } from '@testing-library/react'

import { Button } from './Button'

describe('Passes props', () => {
  it('passes children prop', () => {
    const mockChildren = 'Button'

    render(<Button>{mockChildren}</Button>)
    const buttonElement = screen.getByText(mockChildren)
    expect(buttonElement).toBeInTheDocument()
  })

  it('passes id prop', () => {
    const mockId = 'button'

    render(<Button id={mockId} />)
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toHaveAttribute('id', mockId)
  })
})

describe('disabled', () => {
  it('renders disabled <button>', () => {
    render(<Button disabled />)
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toHaveAttribute('disabled')
  })

  it('button is disabled when loading prop passes', () => {
    render(<Button disabled />)
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toHaveAttribute('disabled')
  })

  it('onClick is not called when the button is disabled', () => {
    const onClickSpy = jest.fn()

    render(<Button disabled onClick={onClickSpy} />)
    expect(onClickSpy).toHaveBeenCalledTimes(0)
  })
})

describe('loading', () => {
  it('renders a spinner when loading prop passed', () => {
    render(<Button loading />)
    const buttonSpinner = screen.getAllByTestId('button-spinner')
    expect(buttonSpinner[0]).toBeInTheDocument()
  })
})

describe('events', () => {
  it('onClick', () => {
    const onClickSpy = jest.fn()

    render(<Button onClick={onClickSpy} />)
    fireEvent.click(screen.getByRole('button'))
    expect(onClickSpy).toHaveBeenCalledTimes(1)
  })

  it('onFocus', () => {
    const onFocusSpy = jest.fn()

    render(<Button onFocus={onFocusSpy} />)
    fireEvent.focus(screen.getByRole('button'))
    expect(onFocusSpy).toHaveBeenCalledTimes(1)
  })

  it('onBlur', () => {
    const onBlurSpy = jest.fn()

    render(<Button onBlur={onBlurSpy} />)
    fireEvent.blur(screen.getByRole('button'))
    expect(onBlurSpy).toHaveBeenCalledTimes(1)
  })
})
