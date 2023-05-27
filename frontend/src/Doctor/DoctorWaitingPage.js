import axios from "axios";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DoctorWaitingPage = () => {
  const location = useLocation();
  // console.log(location.state);
  useEffect(() => {}, []);
  return (
    <>
      <div className="text-center">{location.state.id}</div>
      <button className="btn btn-primary m-5">Logout</button>
    </>
  );
};

export default DoctorWaitingPage;
