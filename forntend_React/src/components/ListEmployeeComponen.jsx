import React, { useEffect, useState } from "react";
import { listEmployees } from "../EmployeeService";
import { useNavigate } from "react-router-dom";

function ListEmployeeComponen() {
  const [employees, setEmployees] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    async function fetchAllEmployees() {
      try {
        const response = await listEmployees();
        // console.log(response);
        if (response.status === 200) {
          const resData = response.data;
          setEmployees(resData);
        } else {
          console.log("Response is not ok");
        }
      } catch (error) {
        console.log("Error in fetching operation ");
      }
    }

    fetchAllEmployees();
  }, []);

  function handleAddNewEmployee() {
    navigator("/add-employee");
  }

  return (
    <div className="container">
      <h2 className="text-center ">List of Employees</h2>
      <button
        className="btn btn-primary my-4 mx-2"
        onClick={handleAddNewEmployee}
      >
        Add Employee
      </button>
      <div className="container ">
        <table className=" table table-striped table-bordered">
          <thead className="text-center">
            <tr className="table-primary">
              <th className="text-primary" scope="col">
                Id
              </th>
              <th className="text-primary" scope="col">
                First Name
              </th>
              <th className="text-primary" scope="col">
                Last Name
              </th>
              <th className="text-primary" scope="col">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {employees ? (
              employees.map((d) => {
                return (
                  <tr className="text-center table-info" key={d.id}>
                    <th>{d.id}</th>
                    <td>{d.firstName}</td>
                    <td>{d.lastName}</td>
                    <td>{d.email}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  Loading data...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListEmployeeComponen;
