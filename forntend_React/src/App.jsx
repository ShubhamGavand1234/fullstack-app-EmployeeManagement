import "./App.css";
import ListEmployeeComponen from "./components/ListEmployeeComponen";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Routing configuration
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Employee from "./components/Employee";
import ModalMain from "./components/ModalMain";
import Login from "./components/Login";
import { useState } from "react";

import { UserDetailsContextProvider } from "./store/UserDetails";
import UserDetailsContext from "./store/UserDetails";
import { useContext } from "react";

function App() {
  return (
    <UserDetailsContextProvider>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <div className="wrapper">
          <Header />
          <MainContent />
          {/* <ModalMain /> */}
          <Footer />
        </div>
      </BrowserRouter>
    </UserDetailsContextProvider>
  );
}

function MainContent() {
  const userDetailsCtx = useContext(UserDetailsContext);

  console.log("Logged In:", userDetailsCtx);

  return userDetailsCtx.username && userDetailsCtx.password ? (
    <div className="content">
      <Routes>
        <Route path="/" element={<ListEmployeeComponen />} />
        <Route path="/employees" element={<ListEmployeeComponen />} />
        <Route path="/add-employee" element={<Employee />} />
        <Route path="/edit-employee/:id" element={<Employee />} />
      </Routes>
    </div>
  ) : (
    <Login />
  );
}

export default App;
