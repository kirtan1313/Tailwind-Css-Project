
import { Route, Router, Routes } from 'react-router'
import './App.css'
import User from './Componets/User/User'
import Wraper from './Componets/Wraper/Wraper'
import Cart from './Componets/Cart/Cart'


function App() {


  return (
    <>
      
      <Routes>
        <Route path='/' element={<Wraper />}/>
        <Route path='/user' element={<User />} />
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App
