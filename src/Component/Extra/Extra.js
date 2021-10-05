import React from 'react';
import './Extra.css'


const Extra = () => {
    return (
        <div>
            <div className="bg-secondary my-3 rounded text-white" >
                <h1 className="color">Testimonials</h1>
                <p>Knowledge is a familiarity, awareness, or understanding of someone or something, such as facts (descriptive knowledge), skills (procedural knowledge), or objects (acquaintance knowledge). By most accounts, knowledge can be acquired in many different ways and from many sources, including but not limited to perception, reason, memory, testimony, scientific inquiry, education, and practice.</p>
                <img className="width" src="https://images.unsplash.com/photo-1581464668603-1b215d0c5469?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="" />
                <h4>William Smith</h4>
                <p className="color">Web Developer</p>

            </div>
            <div className="bg-secondary container my-3 rounded text-white">
                <h1 className="my-4">Contact <span className="color">Us</span></h1>
                <p>Connect with <u className="color">Experting Skills</u> Learning Today.</p>
                <div className="my-4">
                    <input className="mx-4 w-25 border-0 rounded" type="text" placeholder="First name" />
                    <input className="w-25 border-0 rounded" type="text" placeholder="Last name" />
                </div>
                <div className="my-4">
                    <input className="mx-4 w-25 border-0 rounded" type="Email" placeholder="Email" />
                    <input className="w-25 border-0 rounded" type="Password" placeholder="Password" />
                </div>
                <div className="my-4">
                    <input className="mx-4 w-25 border-0 rounded" type="text" placeholder="Address" />
                    <input className="w-25 border-0 rounded" type="text" placeholder="Gender" />
                </div>
                <div>
                    <input className="mx-4 w-25 border-0 rounded" type="text" placeholder="Age" />
                    <input className="w-25 border-0 rounded" type="text" placeholder="Purpose" />
                </div>
                <button className="bg-success border-0 rounded text-white px-4 py-2 my-4">Submit</button>
            </div>
        </div>
    );
};

export default Extra;