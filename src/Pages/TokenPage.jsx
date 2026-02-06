import React, { useState, useEffect } from "react";
import { CheckCircle, Clock, Users, RefreshCw, X, UserPlus, Activity, Phone, Calendar, Kanban } from "lucide-react";
import axios from "axios";
import { useParams } from "react-router-dom";
import TokenConfirm from "../componets/TokenStatus/TokenConfirm";
import PatientDashboard from "../componets/TokenStatus/PatientDashboard";


const tokenStatusPage = () => {
 

  return (
    <div className="pt-15">
      <PatientDashboard />
    </div>
  );
};

export default tokenStatusPage;