import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8084/api/employees";

export const listEmployees = () => {
  return axios.get(REST_API_BASE_URL, {
    auth: {
      username: "user",
      password: "47b1a841-3f91-407e-98d1-832004904b7a",
    },
  });
};

export const postEmployee = (empData) => {
  return axios.post(
    REST_API_BASE_URL,
    empData,
    {
      auth: {
        username: "user",
        password: "47b1a841-3f91-407e-98d1-832004904b7a",
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const getEmployee = (empId) => {
  return axios.get(REST_API_BASE_URL + "/" + empId, {
    auth: {
      username: "user",
      password: "47b1a841-3f91-407e-98d1-832004904b7a",
    },
  });
};

export const updateEmployee = (empId, empData) => {
  return axios.put(
    REST_API_BASE_URL + "/" + empId,
    empData,
    {
      auth: {
        username: "user",
        password: "47b1a841-3f91-407e-98d1-832004904b7a",
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const deleteEmployee = (empId) => {
  return axios.delete(REST_API_BASE_URL + "/" + empId, {
    auth: {
      username: "user",
      password: "47b1a841-3f91-407e-98d1-832004904b7a",
    },
  });
};
