import React from 'react'
import AdminLayout from '../componets/SuperAdmin/Dashboard'
import checkAuth from '../services/auth'
import { useDispatch } from 'react-redux'

function SuperAdmin() {

  const dispatch = useDispatch();

  React.useEffect (()=>{
    checkAuth(dispatch)
  },[])

  return (
    <div>
        <AdminLayout/>
      
    </div>
  )
}

export default SuperAdmin
