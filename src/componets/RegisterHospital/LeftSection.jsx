import React from 'react'
import hospitalsvg from '../../assets/hospitalsvg.png'

function LeftSection() {
  return (
    <div>
              <div className="bg-[#00ffde] h-full  text-black p-8 flex flex-col ">
                <img src={hospitalsvg} 
                className ='h-67 w-100 mt-10'
                alt="" />
          <h1 className="text-3xl font-bold mt-10 pl-5 leading-tight">
            Register Your 
            Hospital
          </h1>
          <p className="mt-5 text-black pl-5">
            Join our smart queue management platform and help patients
            avoid long waiting lines.
          </p>

 
        </div>
    </div>
  )
}

export default LeftSection
