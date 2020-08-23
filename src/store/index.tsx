import React, {createContext, useContext, useReducer, Dispatch} from 'react'
import {LyricDetail} from '../types'

export enum Actions {
  UpdateHistory,
}
interface UpdateHistoryAction {
  type: Actions.UpdateHistory
  payload: LyricDetail
}

interface ContextProps {
  historyState: LyricDetail[]
  dispatch: Dispatch<AuthReducerActions>
}

type AuthReducerActions = UpdateHistoryAction

const initialState: LyricDetail[] = []
const StoreContext = createContext({} as ContextProps)

const reducer = (historyState: LyricDetail[], action: AuthReducerActions) => {
  switch (action.type) {
    case Actions.UpdateHistory:
      return [...historyState, action.payload]
    default:
      return historyState
  }
}

export const StoreProvider = ({children}: any) => {
  const [historyState, dispatch] = useReducer(reducer, initialState)
  return (
    <StoreContext.Provider value={{historyState, dispatch}}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => useContext(StoreContext)
