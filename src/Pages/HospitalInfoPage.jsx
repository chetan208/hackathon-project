import React from 'react'
import HospitalInfo from '../componets/HospitalInfo/HospitalInfo'
import Departments from '../componets/HospitalInfo/Departments'
import HospitalPolicies from '../componets/HospitalInfo/Polices'



function HospitalInfoPage() {
  return (
    <div>
        <HospitalInfo/>
        <Departments/>
        <HospitalPolicies/>
      
    </div>
  )
}

export default HospitalInfoPage
