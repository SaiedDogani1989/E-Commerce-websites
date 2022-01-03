import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Provider } from "react-redux"
import store from "./Redux/store"
import Home from './components/Home';
import Technology from './components/02Technologi/Technology';
import Grocery from './components/03Grocery/Grocery';
import Clothes from './components/Clothes/Clothes';
import Footer from './components/Footer/Footer';
import Login from './components/login/Login';
import CreateAccount from './components/createAccount/CreateAccount';
import Navbar from './components/navbar/Navbar';
import NotFound from './components/NotFound/Notfound';
import ForgetPassword from './components/forgetPassword/ForgetPass';
import ShoppingCart from './components/shoppingCart/ShoppingCart';

function App() {

  return (
    <BrowserRouter>
      <Provider store={store}>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grocery" element={<Grocery />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/clothes" element={<Clothes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createAccount" element={<CreateAccount />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Provider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
