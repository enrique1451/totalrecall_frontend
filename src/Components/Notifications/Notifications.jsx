import React from 'react';
import { Alert } from 'reactstrap';
import "./Notifications.css"



function Notifications({message, type}){

return(
     (
      <div>
        <Alert color={type} toggle={function noRefCheck(){}}>
          {message}
        </Alert>
      </div>
    )
  )
  
}

export default Notifications