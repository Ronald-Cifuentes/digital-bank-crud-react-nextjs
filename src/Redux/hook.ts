import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import type { AppDispatch, AppState } from './store'
import { decrement, increment } from './storeSlice'
import { OutUseAppDispatch, OutUseCounter } from './types'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = (): OutUseAppDispatch => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector

export const useCounter = (): OutUseCounter => {
  const dispatch = useAppDispatch()
  const { count } = useAppSelector((state: AppState) => state.storeReducer)
  return {
    inc: () => dispatch(increment()),
    dec: () => dispatch(decrement()),
    count,
  }
}
