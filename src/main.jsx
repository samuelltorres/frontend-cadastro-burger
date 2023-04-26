import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './globalStyles.js'
import MyRoutes from './routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyRoutes/>
    <GlobalStyles />
  </React.StrictMode>,
)
