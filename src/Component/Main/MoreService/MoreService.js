import React, { useEffect, useState } from 'react';
import Service from '../../Services/Service';

const MoreService = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    console.log(courses);
    return (
        <div className="row">
            {
                courses.map(course => <Service key={course.Name} course={course}></Service>)
            }

        </div>
    );
};

export default MoreService;