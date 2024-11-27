import { Modal } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import UserDetailsContext from "../store/UserDetails";
import { useContext } from "react";

function Header() {
  const userDetailsCtx = useContext(UserDetailsContext);
  function handleLogout() {
    userDetailsCtx.setUserPassword("");
    userDetailsCtx.setUserName("");
  }
  return (
    <div>
      <header>
        <nav className=" navbar bg-dark mb-4">
          <Link className="navbar-brand mx-4 " href="/employees">
            Employee Management System
          </Link>
          {userDetailsCtx.username && userDetailsCtx.password ? (
            <button onClick={handleLogout} className="btn btn-danger">
              Logout
            </button>
          ) : (
            ""
          )}
        </nav>
      </header>
    </div>
  );
}

export default Header;
