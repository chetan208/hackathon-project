import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import SearchHospitalPage from './Pages/SearchHospital.jsx'
import HospitalInfoPage from './Pages/HospitalInfoPage.jsx'
import GenerateTokenPage from './Pages/GenerateTokenPage.jsx'
import TokenStatusPage from './Pages/TokenPage.jsx'

const router=createBrowserRouter([
    {
        path:'/',
        element:(<App/>),
        children:[
            {path:"/",element:(<Home/>)},
            {path:'/search-hospital',element:(<SearchHospitalPage/>)},
            {path:'/hospital',element:(<HospitalInfoPage/>)},
            {path:'/hospital/generate-token',element:(<GenerateTokenPage/>)},
            {path:'/token-status-page',element:(<TokenStatusPage/>)}
        ]
    }
])

createRoot(document.getElementById('root')).render(

   <RouterProvider router={router}/>

)
