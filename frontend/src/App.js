import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreatePost from './Pages/CreatePost'
import Feed from './Pages/Feed'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Hello</h1>} />
        <Route path='/create' element={<CreatePost />} />
        <Route path='/feed' element={<Feed />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
