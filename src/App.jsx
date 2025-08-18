import React from 'react'
import './App.css'
import Index from './Components/Index'
import './Components/Style.css'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
      <Routes>
        <Route path='/' element={<Index/>} />
      </Routes>
  )
}

export default App