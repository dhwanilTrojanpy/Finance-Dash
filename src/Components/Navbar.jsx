import React from 'react';
import Search from './Search';

function Navbar({
    searchValue, 
    handleChange,
    handleClick
}) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-custom mb-3">
            <div className="container">
                <a className="navbar-brand" href="#">AssetAlly</a>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{ fontWeight: 'bold', color: '#333' }}>Dashboard </a>
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
