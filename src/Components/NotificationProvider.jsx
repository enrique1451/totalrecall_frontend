import React, { useState, useCallback } from 'react';
import { NotificationContext } from './NotificationContext';
import Routes from '../Routes';


function NotificationProvider({children}) {
  const [type, setType] = useState(null);
  const removeNotification = () => setType(null);
  const addNotification = (message, type) => setType({message, type})

  const contextValue =  {
    type, 
    addType: useCallback((message, type) => addNotification(message, type), []),
    removeNotification: useCallback(()=> removeNotification(), [])
  };

  return (
    <NotificationContext.Provider value={{ contextValue }}>
      {/* <Routes /> */}
    </NotificationContext.Provider>
  );
};

export default { NotificationProvider};