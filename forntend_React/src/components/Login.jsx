import React from "react";
import UserDetailsContext from "../store/UserDetails";
import { useContext } from "react";

export default function Login() {
  const userDetailsCtx = useContext(UserDetailsContext);

  function handleSubmit(e) {
    e.preventDefault();

    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());

    console.log(data);
    userDetailsCtx.setUserName(data.username);
    userDetailsCtx.setUserPassword(data.password);
    console.log(userDetailsCtx);
  }

  return (
    <div className="login-form container">
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <label htmlFor="username" className="form-label mx-3">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="form-control"
            placeholder="username"
          />
        </div>
        <div className="input-group mb-3">
          <label htmlFor="password" className="form-label mx-3">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-success m-4">
          Login
        </button>
      </form>
    </div>
  );
}
