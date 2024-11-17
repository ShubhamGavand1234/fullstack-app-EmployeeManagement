import "./App.css";
import ListEmployeeComponen from "./components/ListEmployeeComponen";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Routing configuration
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Employee from "./components/Employee";

function App() {
  return (
    <>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Header />
        <Routes>
          {/* http://localhost/3000/ */}
          <Route path="/" element={<ListEmployeeComponen />}></Route>
          {/* http://localhost/3000/employees */}
          <Route path="/employees" element={<ListEmployeeComponen />}></Route>
          <Route path="/add-employee" element={<Employee />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
