
import React from "react";
import './../styles/App.css';
import UserList from "./UserList";
import UserDetails from "./UserDetails";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserList/>} />
      <Route path='/users/:id' element={<UserDetails/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
