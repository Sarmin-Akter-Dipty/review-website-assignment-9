import React, { useEffect, useState } from 'react';
import Home from '../Home/Home';
const Main = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('./Fake.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    console.log(courses);
    return (

        <div className="row">
            {
                courses.map(course => <Home key={course.Name} course={course}></Home>)
            }

        </div>

    );
};

export default Main;