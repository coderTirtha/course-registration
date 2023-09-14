import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = ({handleSelection}) => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCourses(data));
    }, []);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:w-3/4">
            {
                courses.map(course => <Course handleSelection={handleSelection} key={course.id} course={course}></Course>)
            }
        </div>
    );
};

export default Courses;