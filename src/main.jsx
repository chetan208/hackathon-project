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
import SuperAdmin from './Pages/SuperAdmin.jsx'
import DepartmentAdminPanalPage from './Pages/DepartmentAdminPanal.jsx'
import HospitalSignup from './Pages/RegisterHospital.jsx'
import DepartmentRegistration from './componets/DepartmentRegisteration/components/DepartmentRegistration.jsx'

const router=createBrowserRouter([
    {
        path:'/',
        element:(<App/>),
        children:[
            {path:"/",element:(<Home/>)}, //done-f
            {path:'/search-hospital',element:(<SearchHospitalPage/>)},
            {path:'/hospital',element:(<HospitalInfoPage/>)}, // done-f
            {path:'/hospital/generate-token',element:(<GenerateTokenPage/>)},
            {path:'/token-status-page',element:(<TokenStatusPage/>)},

            {path:'/super-admin',element:(<SuperAdmin/>)},
            {path:'/department-admin',element:(<DepartmentAdminPanalPage/>)},//done-f

            {path:'/register-hospital',element:(<HospitalSignup/>)}, //done-f

            {path:'/department-registration',element:(<DepartmentRegistration/>)}
        ]
    }
])

createRoot(document.getElementById('root')).render(

   <RouterProvider router={router}/>

)
