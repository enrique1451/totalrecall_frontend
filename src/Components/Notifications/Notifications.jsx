import React, { useState } from 'react';
import { Alert } from 'reactstrap';
import "./Notifications.css"



function Notifications({message, type}){
  const [visible, setVisible] = useState(true)
  const onDismiss = () => setVisible(false);

  let color=""


  if (type === "success") color = "success"
    color = "danger"
  



return(
     (
      <div>
        <Alert fade={true} color={color} isOpen={visible} toggle={onDismiss}>
          {message}
        </Alert>
      </div>
    )
  )
  
}

export default Notifications