import { AnyAction, Dispatch, ThunkDispatch, ThunkMiddleware } from '@reduxjs/toolkit'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'

export interface State {
  count: number
}

export type MakeStore = ToolkitStore<
  { storeReducer: State },
  AnyAction,
  [ThunkMiddleware<{ storeReducer: State }, AnyAction>]
>

export interface OutUseCounter {
  inc: () => {
    payload: undefined
    type: 'store/increment'
  }
  dec: () => {
    payload: undefined
    type: 'store/decrement'
  }
  count: number
}

export type OutUseAppDispatch = ThunkDispatch<
  {
    storeReducer: State
  },
  undefined,
  AnyAction
> &
  Dispatch<AnyAction>
