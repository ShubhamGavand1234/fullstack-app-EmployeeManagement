import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8084/api/employees";

export const listEmployees = () => {
  return axios.get(REST_API_BASE_URL, {
    auth: {
      username: "user",
      password: "fb99552d-9bc5-46a0-a5c5-89ca4b7fb773",
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
        password: "fb99552d-9bc5-46a0-a5c5-89ca4b7fb773",
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
      password: "fb99552d-9bc5-46a0-a5c5-89ca4b7fb773",
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
        password: "fb99552d-9bc5-46a0-a5c5-89ca4b7fb773",
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
      password: "fb99552d-9bc5-46a0-a5c5-89ca4b7fb773",
    },
  });
};
