import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./navbar.css"
import SecondNav from './SecondNav';


const Navbar = () => {




  return (
    <>
      <div className="discount">
        <p>Create account and get 10% discount</p>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Sdogani</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={(currentNav) => currentNav.isActive ? "active nav-link " : "nav-link"}
                  aria-current="page"
                  to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={(currentNav) => currentNav.isActive ? "active nav-link " : "nav-link"}
                  to="/aboutUs"
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <i
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </i>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink
                      className={(currentNav) => currentNav.isActive ? "dropdown-item active bg-dark" : "dropdown-item"}
                      to="/grocery">
                      Grocery
                    </NavLink>

                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><NavLink
                    className={(currentNav) => currentNav.isActive ? "dropdown-item active bg-dark" : "dropdown-item"}
                    to="/clothes">
                    Clothes
                  </NavLink>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <NavLink
                      className={(currentNav) => currentNav.isActive ? "bg-dark dropdown-item active" : "dropdown-item"}
                      to="technology">
                      Technology
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                disabled
              />
              <button className="btn btn-outline-dark" type="submit" disabled>
                <i className="fas fa-search"></i>
              </button>
            </form>
            <NavLink
            style={{"color":"black"}}
              className={(currentNav) => currentNav.isActive ? "nav-link nav-item active" : "nav-link"}
              to="login"
            >
              <i class="fas fa-sign-in-alt"></i></NavLink>
            <button
              disabled
              className="btn btn-outline-dark position-relative"
            >
              <i className="fas fa-shopping-basket"></i>
              <span
                className="
                position-absolute
                top-0
                translate-middle
                badge
                rounded-pill
                bg-danger
              "
              >
                3+
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </div>
        </div>
      </nav>
      {/* <SecondNav /> */}
    </>
  );
}

export default Navbar;
