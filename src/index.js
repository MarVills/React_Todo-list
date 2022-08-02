import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import './styles/app.scss'


// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
//   , document.getElementById('root'))


ReactDOM.createRoot(document.getElementById('root'))
.render(
  <BrowserRouter>
  <App />
</BrowserRouter>
)
