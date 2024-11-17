import "./App.css";
import ListEmployeeComponen from "./components/ListEmployeeComponen";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Routing configuration
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Employee from "./components/Employee";

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<ListEmployeeComponen />} />
            <Route path="/employees" element={<ListEmployeeComponen />} />
            <Route path="/add-employee" element={<Employee />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
