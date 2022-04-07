import React, {createContext, useContext, useRef, useState} from 'react';
import { View } from 'react-native';
import Snackbar from '../components/Snackbar';

const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {
  const [isSnackbarVisible, setIsSnackbarVisible] = useState(false);
  const snackbarData = useRef({type: 'error', text: ''});

  const showSnackbar = ({ type, text }) => {
    setIsSnackbarVisible(true);
    snackbarData.current = {type,text}
    
    setTimeout(() => setIsSnackbarVisible(false), 3000);
  }

  return (
    <NotificationContext.Provider value={{ showSnackbar }}>
      {isSnackbarVisible && <Snackbar {...snackbarData.current}/>}
      
      {children}
    </NotificationContext.Provider>
  )
}

const useNotification = () => {
  const context = useContext(NotificationContext);
  return context;
}

export { NotificationProvider, useNotification };