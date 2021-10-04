// import Button from '@restart/ui/esm/Button';
import React from 'react';
// import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1 className="my-4" >Experties <span className="color">Skill</span></h1>
            <div className="MenuBar-container">
                <div className="container-fluid bg-success my-4">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="logo-img">
                                <img className="w-75" src='' alt="" />
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div>
                                <ul className="d-flex align-items-center justify-content-center">

                                    <Link to="/home" className="items">Home</Link>
                                    <Link to="/about" className="items">About</Link>
                                    <Link to="/services" className="items">Services</Link>
                                    <Link to="/Popular" className="items">Popular</Link>
                                    <Link to="/upcoming" className="items">Upcoming</Link>
                                    <input type="text" placeholder="Search" />
                                    <button>Search</button>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Header;