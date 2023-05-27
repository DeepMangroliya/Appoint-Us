import React from "react";
import { Link } from "react-router-dom";
import DoctorNavbar from "./DoctorNavbar";
const DoctorPatient = () => {
  return (
    <>
      {/* <DoctorNavbar /> */}
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 mt-3">
              <Link to="/doctor-view-patient">
                <div className="card text-white bg-primary mb-3">
                  <div className="card-header">Header</div>
                  <div className="card-body">
                    <h5 className="card-title">All Patient Record</h5>
                    <p className="card-text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,
                    </p>
                    <h5 className="card-text">5</h5>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-sm-6 mt-3">
              <Link to="/doctor-view-appointment">
                <div className="card text-white bg-warning mb-3">
                  <div className="card-header">Header</div>
                  <div className="card-body">
                    <h5 className="card-title">Discharged Patient Record</h5>
                    <p className="card-text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,
                    </p>
                    <h5 className="card-text">5</h5>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-sm-6 mt-3">
              <Link to="/doctor-view-discharge-patient">
                <div className="card text-white bg-success mb-3">
                  <div className="card-header">Header</div>
                  <div className="card-body">
                    <h5 className="card-title">Discharged new Patient</h5>
                    <p className="card-text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,
                    </p>
                    <h5 className="card-text">5</h5>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorPatient;
