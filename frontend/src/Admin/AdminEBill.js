import axios from "axios";
import React, { useState, useContext } from "react";
// import "./GenerateBill.css";
// import { DataContext } from "../context/DataContext";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../Sidebar";
const AdminEBill = () => {
  let params = useParams();
  let appointmentId = params.aid;
  let patientId = params.pid;
  let doctorId = params.did;

  const nav = useNavigate();
  const [daySpent, setDaySpent] = useState();
  const [roomCharge, setRoomCharge] = useState();
  const [medicineCost, setMedicineCost] = useState();
  const [doctorFee, setDoctorFee] = useState();
  const [otherCost, setOtherCost] = useState();
  const [total, setTotal] = useState();
  const submitHandler = (e) => {
    console.log(appointmentId);
    e.preventDefault();
    axios
      .patch(`/admin/discharge/${params.id}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error.response);
      });

    axios
      .post(`/generatebill`, {
        daySpent,
        roomCharge,
        medicineCost,
        doctorFee,
        otherCost,
        total,
        appointmentId,
        patientId,
        doctorId,
      })
      .then(function (response) {
        console.log(response);
        if (response.data.status === 200) {
          localStorage.setItem("data", JSON.stringify(response.data.data));
          toast.success("Bill Successfully Generated!!");
          setTimeout(() => {
            nav("/admin-dashboard");
          }, 2500);
        } else {
          toast.error("Invalid Credentials!");
        }
      })
      .catch(function (error) {
        console.log(error.response);
      });
  };

  return (
    <>
      {/* <AdminNavbar /> */}
      <Sidebar />
      <div className="content">
        <h1>Invoice of Patient</h1>
        <address>
          <p>Jonathan Neal</p>
          <p>
            101 E. Chapman Ave
            <br />
            Orange, CA 92866
          </p>
          <p>(800) 555-1234</p>
        </address>
        <article>
          <h1>Recipient</h1>
          <address>
            <p>
              Some Company
              <br />
              c/o Some Guy
            </p>
          </address>
          <table className="inventory">
            <thead>
              <tr>
                <th>
                  <span>Number of days spent</span>
                </th>
                <th>
                  <span>Room charge per day</span>
                </th>
                <th>
                  <span>Medicine cost</span>
                </th>
                <th>
                  <span>Doctor Fee</span>
                </th>
                <th>
                  <span>Other cost</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="number"
                    onChange={(e) => setDaySpent(e.target.value)}
                  />
                  {/* <span>Front End Consultation</span> */}
                </td>
                <td>
                  <input
                    type="number"
                    onChange={(e) => setRoomCharge(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    onChange={(e) => setMedicineCost(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    onChange={(e) => setDoctorFee(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    onChange={(e) => setOtherCost(e.target.value)}
                  />
                </td>
              </tr>
            </tbody>

            <caption>
              <button
                onClick={() =>
                  setTotal(
                    parseInt(daySpent) * parseInt(roomCharge) +
                      parseInt(medicineCost) +
                      parseInt(doctorFee) +
                      parseInt(otherCost)
                  )
                }
              >
                Generate Total
              </button>
            </caption>
          </table>
          <table className="balance">
            <tbody>
              <tr>
                <th>
                  <span>Total</span>
                </th>
                <td>
                  <span>{total}</span>
                </td>
              </tr>
              <tr>
                <th>
                  <span>Amount Paid</span>
                </th>
                <td>
                  <span data-prefix>$</span>
                  <span>0.00</span>
                </td>
              </tr>
              <tr>
                <th>
                  <span>Balance Due</span>
                </th>
                <td>
                  <span data-prefix>$</span>
                  <span>600.00</span>
                </td>
              </tr>
            </tbody>
          </table>
        </article>
        <div>
          <button style={{ justifyContent: "center" }} onClick={submitHandler}>
            Send to patient
          </button>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default AdminEBill;
