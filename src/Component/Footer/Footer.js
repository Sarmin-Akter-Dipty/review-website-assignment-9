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
                    <input type="Email" placeholder="Email" />
                    <Button>Login</Button>
                </div>
            </div>
            <p>&copy; 2021 Experties Skill Designed By PK</p>
        </div>
    );
};

export default Footer;