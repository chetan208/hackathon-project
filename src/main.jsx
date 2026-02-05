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

import Layout from './componets/DepartmentRegisteration/mainLayout.jsx'
import RegisterUserPage from './Pages/RegisterUserPage.jsx'
import { Provider } from "react-redux";

import store from './store/store.js'
import SignInPage from './Pages/SignIn.jsx'

const router=createBrowserRouter([
    {
        path:'/',
        element:(<App/>),
        children:[
            {path:"/",element:(<Home/>)}, //done-f
            {path:'/search-hospital',element:(<SearchHospitalPage/>)}, //done-f
            {path:'/hospital',element:(<HospitalInfoPage/>)}, // done-f
            {path:'/hospital/generate-token',element:(<GenerateTokenPage/>)}, //done-f
            {path:'/token-status-page',element:(<TokenStatusPage/>)}, //done-f

            {path:'/super-admin',element:(<SuperAdmin/>)}, //done-50%
            {path:'/department-admin',element:(<DepartmentAdminPanalPage/>)},//done-f

            {path:'/hospital-registration',element:(<HospitalSignup/>)}, //done-f

            {path:'/department-registration',element:(<Layout/>)},

            {path:'/register-user',element:(<RegisterUserPage/>)},

            {path:'/login',element:(<SignInPage/>)}
        ]
    }
])


createRoot(document.getElementById('root')).render(

    <Provider store ={store}>
  <RouterProvider router={router}/>
    </Provider>

 

)


