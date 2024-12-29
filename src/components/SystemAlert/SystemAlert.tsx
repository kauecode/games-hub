import { Alert, AlertDescription, AlertIcon, AlertTitle, Button } from '@chakra-ui/react'
import { useContext } from 'react';
import { SystemAlertContext } from '.';
import { IoCloseCircle } from 'react-icons/io5';

const SystemAlert = () => {

  const {state:alertList, dispatch} = useContext(SystemAlertContext);

  if (alertList.length < 1) return null

  return (
    <>
      {alertList.map((alert, index) => 
      <Alert key={index} status={alert.alertType}>
        <AlertIcon />
        <AlertTitle>{alert.message}</AlertTitle>       
        <AlertDescription>
          {alert.code && "(" + alert.code + ") "} 
          {alert.info && alert.info}          
        </AlertDescription>
        <Button       
          position="absolute"
          right="0"
          variant='ghost'
          marginLeft={2}   
          paddingX={0}
          fontSize={'small'}
          borderRadius="full"
          aria-label="Clear Message"
          onClick={() => dispatch({type: "REMOVE-BY-ID", id: alert.id})}
          >
            <IoCloseCircle fontSize={20}/>
        </Button>        
      </Alert>    
      )}
    </>
  )
}

export default SystemAlert