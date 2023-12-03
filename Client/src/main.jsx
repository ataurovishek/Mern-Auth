import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { PersistStore, ReduxStore } from './Redux_toolkit/store.js'
import './index.css'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ReduxStore} >
      <PersistGate persistor={PersistStore} loading={null}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
