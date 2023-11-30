import { FC } from 'react'
import { CounterContainer } from './Counter.styled'
import { CounterProps } from './interfaces'
import { useCounter } from 'src/Redux/hook'

export const Counter: FC<CounterProps> = ({ dataTestId = 'counter' }) => {
  const { inc, dec, count } = useCounter()
  return (
    <CounterContainer data-testid={dataTestId}>
      <button onClick={dec}>-</button>
      <span>{count}</span>
      <button onClick={inc}>+</button>
    </CounterContainer>
  )
}
