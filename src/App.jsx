import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Create from './Components/Crate/Create'
import 'bootstrap/dist/css/bootstrap.min.css';
import View from './Components/View/View';
import Edit from './Components/Edit/Edit';

function App() {
  return (
    
    <Routes>
      <Route path='/' element={<Create />} />
      <Route path='/view' element={<View />} />
      <Route path='/edit/:id' element={<Edit />} />
    </Routes>
  )
}

export default App
