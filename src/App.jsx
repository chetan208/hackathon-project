import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Signup from './componets/Button'



function App() {
  const [count, setCount] = useState(0)
  console.log("chetan")

  return (
    <>
      <div className='bg-red-500 text-white p-4' >
        hello anuj
        <Signup />
        
      </div>
    </>
  )
}

export default App
