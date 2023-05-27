import React, { useState } from "react";
import DataContext from "./DataContext";

const DataState = (props) => {
  const [data, setData] = useState(
    {
      admin: null,
    },
    { doctor: null },
    { appointment: null },
    { ebill: null }
  );
  const setAdmin = (values) => {
    console.log(values);
    setData((prevState) => {
      return {
        ...prevState,
        admin: values,
      };
    });
  };
  const setDoctor = (values) => {
    console.log(values);

    setData((prevState) => {
      return {
        ...prevState,
        doctor: values,
      };
    });
  };
  const setAppointment = (values) => {
    console.log(values);

    setData((prevState) => {
      return {
        ...prevState,
        appointment: values,
      };
    });
  };
  const setEbill = (values) => {
    console.log(values);
    setData((prevState) => {
      return {
        ...prevState,
        ebill: values,
      };
    });
  };
  return (
    <DataContext.Provider
      value={{ data, setAdmin, setEbill, setDoctor, setAppointment }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
export default DataState;
