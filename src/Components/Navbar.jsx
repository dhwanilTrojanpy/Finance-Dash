import React from 'react';
import Search from './Search';
import { Link } from "react-router-dom";

function Navbar({
    searchValue, 
    handleChange,
    handleClick
}) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-custom mb-4">
            <Link to="/">
                <a className="navbar-brand">AssetAlly</a>
            </Link>
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/search">
                            <button className="nav-item btn btn-outline-success"  style={{ fontWeight: 'bold', color: '#333' }}>Search </button>
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav mx-auto"> {/* Use mx-auto for centering */}
                        <li className="nav-item">
                            <Search searchValue={searchValue} handleChange={handleChange} handleClick={handleClick} />
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <button className="btn btn-outline-success" href="#" style={{ margin: '0 5px', fontWeight: 'bold', color: '#333' }}>Login</button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-danger" href="#" style={{ margin: '0 5px', fontWeight: 'bold', color: '#333' }}>Sign Up</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
