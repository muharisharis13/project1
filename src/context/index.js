import React, { createContext, useReducer } from "react"
import { reducer } from "./reducer"
import { initialState } from "./state"




export const Context = createContext()


export const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { ...initialState })

  return (
    <Context.Provider value={{ ...state, dispatch }}>
      {children}
    </Context.Provider>
  )

}