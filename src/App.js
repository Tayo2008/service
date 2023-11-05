import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Navbar from "./components/nav/Navbar";
import BackData from "./components/Application/BackData";
import Details from "./components/details/Details";
import Login from "./components/details/Login";
import Service from "./components/service/Service";
import Fintech from "./components/fintech/Fintech";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<BackData />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/details" element={<Details />} />
          <Route path="/login" element={<Login />} />
          <Route path="/service" element={<Service />} />
          <Route path="/fin" element={<Fintech />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
