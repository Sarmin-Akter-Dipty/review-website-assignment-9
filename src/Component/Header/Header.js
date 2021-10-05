import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center">
                <img className="site-logo" src="data:image/jpeg;base64,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" alt="" />
                <h1 className="my-4" >Experties <span className="color">Skill</span></h1>
            </div>
            <div className="container-fluid bg-success my-4">
                <div className="row">
                    <div className="col-md-10">
                        <div>
                            <ul className="d-flex align-items-center justify-content-evenly">
                                <Link to="/home" className="items">Home</Link>
                                <Link to="/about" className="items">About</Link>
                                <Link to="/services" className="items">Services</Link>
                                <Link to="/Popular" className="items">Popular</Link>
                                <Link to="/upcoming" className="items">Upcoming</Link>
                                <div>
                                    <input className="border-0 rounded mx-2" type="text" placeholder="Search" />
                                    <button className=" bg-secondary text-white border-0 rounded px-4 py-1 my-2 ">Search</button>
                                </div>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Header;