import React from 'react';
import './All.css'

const Navbar = ({ setCategory }) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary cursor-pointer" data-bs-theme="dark">
            <div className="container-fluid cursor-pointer">
                <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">New Meg</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav cursor-pointer">
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setCategory("technology")}>Technology</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setCategory("business")}>Business</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setCategory("health")} >Health</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setCategory("science")}>Science</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setCategory("sports")}>Sports</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setCategory("entertainment")}>Entertainment</div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Navbar;
