import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css';
import { GiReceiveMoney } from "react-icons/gi";
import { IoHome } from "react-icons/io5";


    function Sidebar() {
      return (
        <div className="d-flex">
          <nav className="sidebar  flex-shrink-0 p-3 vh-100" style={{ width: '250px' }}>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to="company-profile" className="nav-link active">
                 <IoHome /> Company Profile 
                </Link>
              </li>
              <li className="nav-item">
                <Link to="income-statement" className="nav-link">
                <GiReceiveMoney /> Income Statement
                </Link>
              </li>
            </ul>
            <hr />
          </nav>
        </div>
      );
    }

export default Sidebar;
