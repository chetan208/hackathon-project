import React, { useState, useEffect } from "react";
import { CheckCircle, Clock, Users, RefreshCw, X, UserPlus, Activity, Phone, Calendar, Kanban } from "lucide-react";
import axios from "axios";
import { useParams } from "react-router-dom";
import TokenConfirm from "../componets/TokenStatus/TokenConfirm";
import PatientDashboard from "../componets/TokenStatus/PatientDashboard";
import socket from "../services/socket"


const tokenStatusPage = () => {


  const {id} = useParams()

  useEffect(()=>{

    const fetchDepartmentId = async() => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/users/token-details/${id}`, {withCredentials: true});
        const departmentId = res.data.tokenDetails.departmentId._id;
        console.log(departmentId)
        socket.connect();
        socket.emit("join-department", departmentId);
        
      } catch (error) {
        console.log("error fetching department id for token status page", error);
        
      }
    }

    fetchDepartmentId()

    return () => {
      socket.disconnect();
    }

  },[])

 

  return (
    <div className="pt-15">
      <PatientDashboard />
    </div>
  );
};

export default tokenStatusPage;