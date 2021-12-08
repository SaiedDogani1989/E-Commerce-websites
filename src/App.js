import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from './components/Home';
import Technology from './components/02Technologi/Technology';
import Grocery from './components/03Grocery/Grocery';
import Clothes from './components/Clothes/Clothes';
import Footer from './components/Footer/Footer';
import Login from './components/login/Login';
import CreateAccount from './components/createAccount/CreateAccount';
import Navbar from './components/navbar/Navbar';
// import SecondNav from './components/navbar/SecondNav';
import NotFound from './components/NotFound/Notfound';
import ForgetPassword from './components/forgetPassword/ForgetPass';
import AboutUs from './components/aboutUS/AboutUs';

function App() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  });

  console.log(offset);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/grocery" element={<Grocery />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
