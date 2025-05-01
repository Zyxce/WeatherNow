import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import './styles/base/normalize.css'
import './styles/base/variables.css'
import App from './App'
import { Provider } from 'react-redux'
import store from './store/store'
import './i18n'

const rootElement = document.getElementById('root') as HTMLElement

const root = ReactDOM.createRoot(rootElement)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
