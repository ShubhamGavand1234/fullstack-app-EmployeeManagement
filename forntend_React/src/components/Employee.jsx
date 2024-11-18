import React, { useEffect, useState } from "react";
import { postEmployee, getEmployee, updateEmployee } from "../EmployeeService";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

function Employee() {
  const [employeeData, setEmployeeData] = useState();
  const [missingError, setMissingError] = useState({
    firstNameMissing: false,
    lastNameMissing: false,
    emailMissing: false,
  });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const navigator = useNavigate();
  const empId = useParams();

  const checkMising = (data) => {
    if (!data.firstName) {
      setMissingError((prev) => ({
        ...prev,
        firstNameMissing: true,
      }));
    }
    if (!data.lastName) {
      setMissingError((prev) => ({
        ...prev,
        lastNameMissing: true,
      }));
    }
    if (!data.email) {
      setMissingError((prev) => ({
        ...prev,
        emailMissing: true,
      }));
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    setMissingError({
      firstNameMissing: false,
      lastNameMissing: false,
      emailMissing: false,
    });
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());

    const hasErrors = !data.firstName || !data.lastName || !data.email;
    if (hasErrors) {
      checkMising(data);
      return;
    }
    setEmployeeData(data);
    e.target.reset();
    navigator("/employees");
  }

  function handleFocus(field) {
    setMissingError((prev) => ({ ...prev, [field]: false }));
  }

  function pageTitle() {
    // console.log(empId, empId.id);

    if (empId && empId.id) {
      return <h2 className="text-center">Update Employee</h2>;
    } else {
      return <h2 className="text-center">Add Employee</h2>;
    }
  }

  function pageButton() {
    // console.log(empId, empId.id);

    if (empId && empId.id) {
      return (
        <button type="submit" className="btn btn-danger my-2 mx-auto">
          Update
        </button>
      );
    } else {
      return (
        <button type="submit" className="btn btn-success my-2 mx-auto">
          Submit
        </button>
      );
    }
  }

  useEffect(() => {
    async function getEMployee() {
      const response = await getEmployee(empId.id);
      const resData = response.data;
      // console.log(resData);
      setFormData({
        firstName: resData.firstName || "",
        lastName: resData.lastName || "",
        email: resData.email || "",
      });
    }
    if (empId.id) {
      getEMployee();
    }
  }, [empId]);

  useEffect(() => {
    async function postEMployee() {
      try {
        const response =
          empId && empId.id
            ? await updateEmployee(empId.id, employeeData)
            : await postEmployee(employeeData);
        console.log(response.status);

        if (response.status === 200 || response.status === 201) {
          const resData = response.data;
          // console.log(  resData.firstName + " is created");
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
          {pageTitle()}
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-2">
                <label htmlFor="firstName" className="form-label">
                  First Name :
                </label>
                <input
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  type="text"
                  name="firstName"
                  className={`form-control  ${
                    missingError.firstNameMissing ? "is-invalid" : ""
                  }`}
                  placeholder="Enter first name"
                  onFocus={() => handleFocus("firstNameMissing")}
                />
                {missingError.firstNameMissing && (
                  <div className="warning-message">
                    <FontAwesomeIcon icon={faTriangleExclamation} />
                    {/* Optional icon */}
                    Please provide First Name field!
                  </div>
                )}
              </div>
              <div className="form-group mb-2">
                <label htmlFor="lastName" className="form-label">
                  Last Name :
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  className={`form-control  ${
                    missingError.lastNameMissing ? "is-invalid" : ""
                  }`}
                  placeholder="Enter last name"
                  onFocus={() => handleFocus("lastNameMissing")}
                />
                {missingError.lastNameMissing && (
                  <div className="warning-message">
                    <FontAwesomeIcon icon={faTriangleExclamation} />
                    {/* Optional icon */}
                    Please provide Last Name field!
                  </div>
                )}
              </div>
              <div className="form-group mb-2">
                {" "}
                <label htmlFor="email" className="form-label">
                  Email id :
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`form-control  ${
                    missingError.emailMissing ? "is-invalid" : ""
                  }`}
                  placeholder="Enter email id"
                  onFocus={() => handleFocus("emailMissing")}
                />
                {missingError.emailMissing && (
                  <div className="warning-message">
                    <FontAwesomeIcon icon={faTriangleExclamation} />
                    {/* Optional icon */}
                    Please provide Email id field!
                  </div>
                )}
              </div>

              {pageButton()}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employee;
