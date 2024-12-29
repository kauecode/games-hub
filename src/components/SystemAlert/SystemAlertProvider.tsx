import React, { createContext, ReactNode, useEffect, useReducer, useRef } from 'react'

// REUSABLE TYPES

export interface SystemAlertItem {
  id: number,
  alertType: AlertTypeOptions,
  group: GroupAlertOptions,
  message: string,
  info?: string,
  code?: string
}
export type GroupAlertOptions = "GL" | "PS" | "GG"; // GenreList, PlatformSelector, GamesGrid
export type AlertTypeOptions = "error" | "info" | "warning" | "loading" | "success";


// REDUCER

interface AddAlertAction {
  type: "ADD",
  alert: SystemAlertItem
}
interface RemoveByIDAlertAction {
  type: "REMOVE-BY-ID",
  id: number
}
interface RemoveByGroupAlertAction {
  type: "REMOVE-BY-GROUP",
  group: GroupAlertOptions
}
interface ResetAlertAction {
  type: "RESET"
}
export type AlertReducerAction = 
  AddAlertAction | RemoveByIDAlertAction | RemoveByGroupAlertAction | ResetAlertAction

const systemAlertReducer = (state:SystemAlertItem[], action:AlertReducerAction):SystemAlertItem[] => {
  switch (action.type) {
    case "ADD":
      return [...state, action.alert]
    case "REMOVE-BY-ID":
      return state.filter(item => item.id !== action.id)          
    case "REMOVE-BY-GROUP":
      return state.filter(item => item.group !== action.group)    
    case "RESET":
      return []         
    default:
      return state
  }
}


// CONTEXT

interface SystemAlertContextType {
  state: SystemAlertItem[],
  dispatch: React.Dispatch<AlertReducerAction>
}

export const SystemAlertContext = createContext<SystemAlertContextType>({} as SystemAlertContextType)


// PROVIDER

interface SystemAlertProviderProps { children: ReactNode }
const SystemAlertProvider = ({children} : SystemAlertProviderProps) => {
  const [alertState, alertDispatch] = useReducer(systemAlertReducer, [])

    useEffect(() => {
    let timers:number[] = []; 
    alertState.forEach(el => {
      if (el.alertType === "warning" || el.alertType === "info") {
        const timeout = setTimeout(() => alertDispatch({type: "REMOVE-BY-ID", id: el.id}), 3000)
        timers.push(timeout)
      }
    })
    // return () => timers.forEach((el) => clearTimeout(el))
  }, [alertState])
  
  return (
    <SystemAlertContext.Provider value={{state: alertState, dispatch: alertDispatch}}>    
      {children}
    </SystemAlertContext.Provider>
  )
}
export default SystemAlertProvider