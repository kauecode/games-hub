import { AxiosError } from "axios";
import { useEffect } from "react";
import { ErrorReducerAction } from "../reducers/errorReducer";
import { GameAppError } from "../App";

interface useErrorProps {
  error:AxiosError<unknown, any> | null, 
  errorDispatcher:React.Dispatch<ErrorReducerAction>,
  info: string,
  ident: "GL" | "PS" | "GG"
}

const useError = ({error, errorDispatcher, info, ident} : useErrorProps) => {

  useEffect(() => {
    if (error) {
      const errorDescription = {
        ident, 
        message: error.message, 
        info,
        code: error.code
      } as GameAppError
      errorDispatcher({type: "ADD", error: errorDescription})
    } else {
      errorDispatcher({type: "REMOVE", ident})
    }
  }, [error])

}

export default useError;