import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css';

    function Sidebar() {
      return (
        <div className="d-flex">
          <nav className="sidebar bg-light flex-shrink-0 p-3 vh-100" style={{ width: '250px' }}>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  <i className="fas fa-home"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/search" className="nav-link">
                  <i className="fas fa-search"></i> Search
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  <i className="fas fa-info-circle"></i> About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  <i className="fas fa-envelope"></i> Contact
                </Link>
              </li>
            </ul>
            <hr />
          </nav>
        </div>
      );
    }

export default Sidebar;
