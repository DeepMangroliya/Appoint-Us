import React from "react";
import AdminNavbar from "./AdminNavbar";
import "./AdminDashboard.css";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";
const AdminAppointment = () => {
  return (
    <>
      {/* <AdminNavbar /> */}
      <Sidebar />
      <div className="content">
        <div className="row">
          <div className="col-lg-4 col-sm-6 mt-3">
            <Link to="/admin-view-appointment">
              <div className="card text-white bg-primary mb-3">
                <div className="card-header">Header</div>
                <div className="card-body">
                  <h5 className="card-title">View Appointment</h5>
                  <p className="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <h5 className="card-text">5</h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col-sm-6 mt-3">
            <Link to="/admin-add-appointment">
              <div className="card text-white bg-success mb-3">
                <div className="card-header">Header</div>
                <div className="card-body">
                  <h5 className="card-title">Book Appointment</h5>
                  <p className="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <h5 className="card-text">5</h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col-sm-6 mt-3">
            <Link to="/admin-approve-appointment">
              <div className="card text-white bg-danger mb-3">
                <div className="card-header">Header</div>
                <div className="card-body">
                  <h5 className="card-title">Approve Appointment</h5>
                  <p className="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <h5 className="card-text">5</h5>
                </div>
              </div>
            </Link>
          </div>
          {/* <div className="col-lg-4 col-sm-6 mt-3">
            <div className="card text-white bg-secondary mb-3">
              <Link to="/admin-add-appointment">
                <div className="card-header">Header</div>
                <div className="card-body">
                  <h5 className="card-title">Book Appointment</h5>
                  <p className="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <h5 className="card-text">5</h5>
                </div>
              </Link>
            </div>
          </div> */}
          {/* <div className="col-lg-4 col-sm-6 mt-3">
            <div className="card text-white bg-danger mb-3">
              <Link to="/admin-approve-appointment">
                <div className="card-header">Header</div>
                <div className="card-body">
                  <h5 className="card-title">Approve Appointment</h5>
                  <p className="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <h5 className="card-text">5</h5>
                </div>
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default AdminAppointment;
