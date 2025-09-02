import React from 'react'
import Home from './pages/Home'
import {Routes,Route} from 'react-router-dom'
import EventDetail from './pages/EventDetail'
import NotFound from './components/NotFound'
import EventForm from './components/EventForm'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/event/:id' element={<EventDetail/>}></Route>
      <Route path='/create' element={<EventForm/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
  )
}

export default App