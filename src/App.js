import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import WOW from 'wowjs';
import { useEffect } from "react";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Programms from "./Pages/Programs";
import SingleLab from "./Pages/SingleLab";
import EnrolledClasses from "./Pages/EnrolledClasses";


function App() {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/programms" element={<Programms />} />
        <Route path="/singleLab" element={<SingleLab />} />
        <Route path="/enrolledClasses" element={<EnrolledClasses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
