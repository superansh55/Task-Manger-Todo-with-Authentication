import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TasksContextProvider } from './context/TaskContext.jsx';
import { AuthContextProvider } from './context/AuthContext';

createRoot(document.getElementById('root')).render(
<React.StrictMode>
   <AuthContextProvider>
  <TasksContextProvider>
    <App />
    </TasksContextProvider>
    </AuthContextProvider>
 </React.StrictMode>
 
)
