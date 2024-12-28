import { GameAppError } from "../App"

interface AddErrorAction {
  type: "ADD",
  error: GameAppError
}

interface RemoveErrorAction {
  type: "REMOVE",
  ident: "GL" | "PS" | "GG"
}

interface ResetErrorAction {
  type: "RESET"
}

export type ErrorReducerAction = AddErrorAction | RemoveErrorAction | ResetErrorAction

const errorReducer = (
  state:GameAppError[], 
  action:ErrorReducerAction
):GameAppError[] => {
  switch (action.type) {
    case "ADD":
      return [...state, action.error]
    case "REMOVE":
      return state.filter(item => item.ident !== action.ident)    
    case "RESET":
        return []         
    default:
      return state
  }
}

export default errorReducer;