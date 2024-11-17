import React, { useEffect, useState } from "react";
import { postEmployee } from "../EmployeeService";

function Employee() {
  const [employeeData, setEmployeeData] = useState();
  const [missingError, setMissingError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    console.log();
    if (!data.firstName || !data.lastName || !data.email) {
      setMissingError("Field Missing");
      return;
    }
    setEmployeeData(data);
    e.target.reset();
  }

  function handleFocus() {
    setMissingError("");
  }

  useEffect(() => {
    async function postEMployee() {
      try {
        const response = await postEmployee(employeeData);
        if (response.status === 201) {
          const resData = response.data;
          console.log(resData.firstName + " is created");
          setEmployeeData();
        } else {
          console.log("Error in creating employee");
        }
      } catch (error) {
        console.error("Error while posting employee:", error);
      }
    }

    if (employeeData && Object.keys(employeeData).length > 0) {
      postEMployee();
    }
  }, [employeeData]);

  return (
    <div className="container ">
      <div className="row">
        <div className="card col-md-6 offset-md-3">
          <h2 className="text-center">Add Employee</h2>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-2">
                <label htmlFor="firstName" className="form-label">
                  First Name :
                </label>
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  placeholder="Enter first name"
                  onFocus={handleFocus}
                />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="lastName" className="form-label">
                  Last Name :
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  placeholder="Enter last name"
                  onFocus={handleFocus}
                />
              </div>
              <div className="form-group mb-2">
                {" "}
                <label htmlFor="email" className="form-label">
                  Email id :
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter email id"
                  onFocus={handleFocus}
                />
              </div>

              <button type="submit" className="btn btn-success my-2 mx-auto">
                Submit
              </button>
            </form>
          </div>

          {missingError && (
            <p className="text-danger bg-warning">{missingError}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Employee;
