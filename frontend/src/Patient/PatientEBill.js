import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
// import "../Doctor/GenerateBill.css";
// import { DataContext } from "../context/DataContext";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { connect } from "react-redux";
import PatientNavbar from "./PatientNavbar";
// import "./PatientEBill.css";
const PatientEBill = (props) => {
  // let params = useParams();
  // let appointmentId = params.aid;
  const nav = useNavigate();
  const [daySpent, setDaySpent] = useState();
  const [roomCharge, setRoomCharge] = useState();
  const [medicineCost, setMedicineCost] = useState();
  const [doctorFee, setDoctorFee] = useState();
  const [otherCost, setOtherCost] = useState();
  const [total, setTotal] = useState();
  const { patientUser } = props.patient;
  const params = useParams();
  // console.log(patientUser);
  const id = params.id;
  useEffect(() => {
    // console.log(id);
    axios
      .get(`/getEBillByAppointmentId?id=${id}`)
      .then(function (response) {
        // console.log(response);
        if (response.data.status === 200) {
          setDaySpent(response.data.data[0].daySpent);
          setRoomCharge(response.data.data[0].roomCharge);
          setMedicineCost(response.data.data[0].medicineCost);
          setDoctorFee(response.data.data[0].doctorFee);
          setOtherCost(response.data.data[0].otherCost);
          setTotal(response.data.data[0].total);
          // toast.success("Bill Successfully Generated!!");
          // setTimeout(() => {
          //   // nav("/doctor-dashboard");
          // }, 2500);
        } else {
          toast.error("Invalid Credentials!");
        }
      })
      .catch(function (error) {
        console.log(error.response);
      });
  }, []);

  const submitHandler = (e) => {
    window.print();
  };
  const initPayment = (data) => {
    console.log(data, "data");
    const options = {
      key: "rzp_test_li6lS9WkykUxVW",
      amount: data.amount,
      currency: data.currency,
      name: "Hostpital E-Bill",
      description: "Test Transaction",
      // image: book.img,
      order_id: data.id,
      callback_url: "http://localhost:3000/patient-dashboard",
      redirect: true,

      handler: async (response) => {
        try {
          const verifyUrl = "/verify";
          const { data } = await axios.post(verifyUrl, {
            ...response,
            appointmentId: id,
          });
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#1c554b",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const paymentHandler = async () => {
    try {
      const orderUrl = "/order";
      const { data } = await axios.post(orderUrl, { amount: total });
      console.log(data);
      // alert(data.message);
      initPayment(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <PatientNavbar />
      <div id="divToPrint">
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
                  <input type="number" disabled value={daySpent || ""} />
                  {/* <span>Front End Consultation</span> */}
                </td>
                <td>
                  <input type="number" disabled value={roomCharge || ""} />
                </td>
                <td>
                  <input type="number" disabled value={medicineCost || ""} />
                </td>
                <td>
                  <input type="number" disabled value={doctorFee || ""} />
                </td>
                <td>
                  <input type="number" disabled value={otherCost || ""} />
                </td>
              </tr>
            </tbody>
          </table>
          <table className="balance">
            <thead>
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
            </thead>
          </table>
        </article>
        <div>
          <button style={{ justifyContent: "center" }} onClick={submitHandler}>
            Download Pdf
          </button>
          <button style={{ justifyContent: "center" }} onClick={paymentHandler}>
            Pay Payment
          </button>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

// export default PatientEBill;
const mapStateToProps = (state) => ({
  patient: state.patient,
});
export default connect(mapStateToProps, {
  // clearAuthResponseMsg,
  // signup,
  // adminDoctors,
  // adminPatients,
})(PatientEBill);
