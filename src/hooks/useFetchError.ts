import { AxiosError } from "axios";
import { useEffect } from "react";
import { AlertReducerAction, GroupAlertOptions, SystemAlertItem } from "../components/SystemAlert/SystemAlertProvider";

interface useErrorProps {
  error:AxiosError<unknown, any> | null, 
  alertDispatcher:React.Dispatch<AlertReducerAction>,
  info: string,
  group: GroupAlertOptions
}

const useFetchError = ({error, alertDispatcher, info, group} : useErrorProps) => {

  useEffect(() => {
    if (error) {
      const alertObj:SystemAlertItem = {
        id: Date.now(),
        alertType: "error",
        group: group ,
        message: error.message, 
        info,
        code: error.code
      }
      alertDispatcher({type: "ADD", alert: alertObj})
    } else {
      alertDispatcher({type: "REMOVE-BY-GROUP", group})
    }
  }, [error])

}

export default useFetchError;