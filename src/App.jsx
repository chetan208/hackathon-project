import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Outlet } from 'react-router-dom'
import Navbar from './componets/Header/Navbar'
import Footer from './componets/Footer/Footer'



function App() {
  const [count, setCount] = useState(0)
  console.log("chetan")

  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
