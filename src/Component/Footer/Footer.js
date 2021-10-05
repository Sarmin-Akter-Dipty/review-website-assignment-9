import Button from '@restart/ui/esm/Button';
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-color my-2">
            <div className="row">
                <div className="col-md-6">
                    <h3>Help Center</h3>
                    <hr />
                    <h3>Community</h3>
                    <hr />
                    <h3>FAQ</h3>
                </div>
                <div className="col-md-6 my-5">
                    <input className="border-0 rounded my-1" type="Email" placeholder="Enter Your Email" /><br />
                    <input className="border-0 rounded my-1" type="Password" placeholder="Enter Your Password" /><br />
                    <Button className=" bg-secondary text-white border-0 rounded px-4 py-1 ">Login</Button>
                </div>
            </div>
            <p>&copy; 2021 Experties Skill Designed By PK</p>
        </div>
    );
};

export default Footer;