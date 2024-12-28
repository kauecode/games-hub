import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/react'
import { GameAppError } from '../App'

interface SystemAlertProps {
  errorList: GameAppError[]
}

const SystemAlert = ({errorList} : SystemAlertProps) => {

  return (
    <>
      {errorList.map((error, index) => 
      <Alert key={index} status='error'>
        <AlertIcon />
        <AlertTitle>{error.message}</AlertTitle>       
        <AlertDescription>
          {error.code && "(" + error.code + ") "} 
          {error.info && error.info}          
        </AlertDescription>
      </Alert>    
      )}
    </>
  )
}

export default SystemAlert