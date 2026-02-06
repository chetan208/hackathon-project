import React,{useState,useEffect} from 'react'
import HospitalInfo from '../componets/TokenGeneration/Hospital-Info'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function GenerateTokenPage() {

   const { id } = useParams();

  const [hospital, setHospital] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  console.log(hospital)

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const fetchHospitalInfo = async () => {
      try {
        setLoading(true);
        
        
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/hospitals/hospital-info/${id}`
        );
        
        setHospital(response.data.hospital);
      } catch (error) {
        console.error('Error fetching hospital information:', error);
        
      } finally {
        setLoading(false);
      }
    };

    fetchHospitalInfo();
  }, [id]);

  return (
    <div>
        <HospitalInfo hospital={hospital}/>
      
    </div>
  )
}

export default GenerateTokenPage
