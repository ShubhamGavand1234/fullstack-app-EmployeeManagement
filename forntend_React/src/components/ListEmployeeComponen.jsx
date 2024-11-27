import React, { useEffect, useState } from "react";
import { listEmployees, deleteEmployee } from "../EmployeeService";
import { useNavigate } from "react-router-dom";
import UserDetailsContext from "../store/UserDetails";
import { useContext } from "react";

function ListEmployeeComponen() {
  const [employees, setEmployees] = useState([]);
  const navigator = useNavigate();
  const [deleteID, setDeleteId] = useState();

  const userDetailsCtx = useContext(UserDetailsContext);
  const loginCred = {
    username: userDetailsCtx.username,
    password: userDetailsCtx.password,
  };
  console.log(
    "before passinf cred are " + loginCred.username + " " + loginCred.password
  );

  useEffect(() => {
    async function fetchAllEmployees() {
      try {
        const response = await listEmployees(loginCred);
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

  function handleUpdate(empID) {
    navigator(`/edit-employee/${empID}`);
  }

  function handleDelete(empID) {
    setDeleteId(empID);
    navigator("/");
  }

  useEffect(() => {
    async function deleteEmployeeById() {
      if (deleteID !== undefined) {
        try {
          await deleteEmployee(deleteID, loginCred);
          // Refresh employee list after delete
          const response = await listEmployees(loginCred);
          setEmployees(response.data);
        } catch (error) {
          console.error("Error deleting employee:", error);
        }
      }
    }
    deleteEmployeeById();
  }, [deleteID]);

  useEffect(() => {
    async function refreshEmployees() {
      const response = await listEmployees(loginCred);
      setEmployees(response.data);
    }
    refreshEmployees();
  }, []);

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
              <th className="text-primary" scope="col" colSpan="2">
                Action
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
                    <td>
                      <button
                        onClick={() => handleUpdate(d.id)}
                        type="button"
                        className="btn btn-primary"
                      >
                        Update
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(d.id)}
                        type="button"
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
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
