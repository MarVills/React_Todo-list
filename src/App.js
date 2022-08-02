import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './components/Home'
import Todolist from './components/Todolist'

const App = () =>{
  return (
   <div className='app-main'>
    <Routes>
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="/todolist" element={<Todolist />} /> 
    </Routes>
   </div>
  )
}

export default App