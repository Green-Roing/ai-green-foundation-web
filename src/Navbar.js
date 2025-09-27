import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-light fs-4">
            My Portfolio
          </Link>
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
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/experience"
                  className="nav-link text-light fs-5"
                  aria-current="page"
                >
                  Experience
                </Link>
              </li>
        
              <li className="nav-item">
                <Link
                  to="/skills"
                  className="nav-link text-light fs-5"
                  href="/"
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/features"
                  className="nav-link text-light fs-5"
                  href="/"
                >
                  Features
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  to="/projects"
                  className="nav-link text-light fs-5"
                  href="/"
                >
                  Projects
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
