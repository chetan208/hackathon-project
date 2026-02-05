import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Outlet } from 'react-router-dom'
import Navbar from './componets/Header/Navbar'
import Footer from './componets/Footer/Footer'
import { useDispatch } from 'react-redux'
import checkAuth from './services/auth'



function App() {

const dispatch = useDispatch();

useEffect (()=>{
  checkAuth(dispatch)
},[])

  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
