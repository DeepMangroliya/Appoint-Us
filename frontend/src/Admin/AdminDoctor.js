import React, { useContext } from "react";
import AdminNavbar from "./AdminNavbar";
import "./AdminDashboard.css";
import DataContext from "../Context/DataContext";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";

const AdminDoctor = () => {
  // const obj = useContext(DataContext);
  // console.log(obj);
  return (
    <>
      {/* <AdminNavbar /> */}
      <Sidebar />
      <div className="content">
        <div className="row">
          <div className="col-lg-4 col-sm-6 mt-3">
            <Link to="/admin-view-doctor">
              <div className="card text-white bg-danger mb-3">
                <div className="card-header">Header</div>
                <div className="card-body">
                  <h5 className="card-title">Doctor Record</h5>
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
            <Link to="/admin-add-doctor">
              <div className="card text-white bg-primary mb-3">
                <div className="card-header">Header</div>
                <div className="card-body">
                  <h5 className="card-title">Add Doctor</h5>
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
            <Link to="/admin-approve-doctor">
              <div className="card text-white bg-success mb-3">
                <div className="card-header">Header</div>
                <div className="card-body">
                  <h5 className="card-title">Approve Doctor</h5>
                  <p className="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <h5 className="card-text">5</h5>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDoctor;
