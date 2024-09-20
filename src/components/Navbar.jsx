import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header
        id="header"
        class="fixed-top d-flex align-items-center bg-[#0d2735] z-50"
      >
        <div class="container d-flex justify-content-between align-items-center">
          <div class="logo cursor-pointer" onClick={() => navigate("/")}>
            <h1 class="text-light">
              <span>Disaster Management System</span>
            </h1>
          </div>

          <nav id="navbar" class="navbar">
            <ul>
              <li>
                <Link onClick={scrollTo} class="active " to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={scrollTo} to="/resources_requests">
                  Network
                </Link>
              </li>

              {/* <li>
              <Link onClick={scrollTo} to="/team">Team</Link>
            </li> */}
              <li>
                <Link onClick={scrollTo} to="/social_media">
                  Threats
                </Link>
              </li>
              <li>
                <Link onClick={scrollTo} to="/safety-tips">
                  Safety Tips
                </Link>
              </li>

              <li>
                <Link onClick={scrollTo} to="/plan">
                  <button className="p-2 bg-white text-[#0d2735] hover:border-white">
                    #GetReady
                  </button>
                </Link>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
