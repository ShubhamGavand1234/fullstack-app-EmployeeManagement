import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8084/api/employees";
const passwordCred = "36dd6dcc-a7f2-4160-8648-c4bef20d7f1c";

export const listEmployees = () => {
  return axios.get(REST_API_BASE_URL, {
    auth: {
      username: "user",
      password: passwordCred,
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
        password: passwordCred,
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
      password: passwordCred,
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
        password: passwordCred,
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
      password: passwordCred,
    },
  });
};
