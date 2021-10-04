import React from 'react';

const Service = (props) => {
    const { img, Name, Price, Lecture, Access, Download, Certificate, Trial, Discount, BestTeacher, MoreFacilites } = props.course
    return (
        <div className="col-md-4">

            <div className="course-cart">
                <div className="course-img">
                    <img src={img} alt="" />
                </div>
                <h6>Name: {Name}</h6>
                <h6>Price: {Price}</h6>
                <h6>Lecture: {Lecture}</h6>
                <h6>Access: {Access}</h6>
                <h6>Download: {Download}</h6>
                <h6>Certificate: {Certificate}</h6>
                <h6>Trial: {Trial}</h6>
                <h6>Discount: {Discount}</h6>
                <h6>BestTeacher:{BestTeacher}</h6>
                <h6>More Facilites: {MoreFacilites}</h6>
            </div>
        </div>
    );
};

export default Service;