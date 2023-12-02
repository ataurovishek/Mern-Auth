import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ReduxStore } from './Redux_toolkit/store.js'
import './index.css'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ReduxStore} >
      <App />
    </Provider>
  </React.StrictMode>,
)
