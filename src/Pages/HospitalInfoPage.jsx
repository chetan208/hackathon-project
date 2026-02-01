import React from 'react'
import HospitalInfo from '../componets/HospitalInfo/HospitalInfo'
import Departments from '../componets/HospitalInfo/Departments'
import HospitalPolicies from '../componets/HospitalInfo/Polices'
import HospitalServices from '../componets/HospitalInfo/Services'



function HospitalInfoPage() {
  return (
    <div>
        <HospitalInfo/>
        <Departments/>
        <HospitalServices/>
        <HospitalPolicies/>
      
    </div>
  )
}

export default HospitalInfoPage
