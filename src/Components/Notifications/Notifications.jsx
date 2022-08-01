import React, { useState } from 'react';
import { Alert } from 'reactstrap';
import "./Notifications.css"



function Notifications({message, type}){
  const [visible, setVisible] = useState(true)
  const onDismiss = () => setVisible(false);

return(
     (
      <div>
        <Alert className='notification' fade={true} type={type} isOpen={visible} toggle={onDismiss}>
          {message}
        </Alert>
      </div>
    )
  )
  
}

export default Notifications;