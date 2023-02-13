import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { firebaseContext } from './Store/FirebaseContext'
import Context from './Store/FirebaseContext'
import { firebaseAuth, db } from './Firebase/config'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(

  <firebaseContext.Provider value={{ firebaseAuth, db }}>
    <Context>
      <App />
    </Context>

  </firebaseContext.Provider>

);
