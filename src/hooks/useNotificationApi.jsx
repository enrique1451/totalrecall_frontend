import { useContext } from 'react';
import { NotificationContext } from '../Components/NotificationContext';

function useNotificationAPI(key, firstValue = null) {
  const {type, addNotification, removeNotification} = useContext(NotificationContext);
  return { type, addNotification, removeNotification}
}


export default useNotificationAPI;