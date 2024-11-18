import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8084/api/employees";

export const listEmployees = () => {
  return axios.get(REST_API_BASE_URL);
};

export const postEmployee = (empData) => {
  return axios.post(REST_API_BASE_URL, empData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getEmployee = (empId) => {
  return axios.get(REST_API_BASE_URL + "/" + empId);
};

export const updateEmployee = (empId, empData) => {
  return axios.put(REST_API_BASE_URL + "/" + empId, empData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const deleteEmployee = (empId) => {
  return axios.delete(REST_API_BASE_URL + "/" + empId);
};
