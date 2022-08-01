import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './components/Home'
import Todolist from './components/Todolist'

const App = () =>{
  return (
   <div className='app-main'>
    <Routes>
      <Route path="/home">
        <Home/>
      </Route>
      <Route path="/todolist">
        <Todolist/>
      </Route>
      <Route path="/" >
        <Home/>
      </Route>
    </Routes>
   </div>
  )
}

export default App