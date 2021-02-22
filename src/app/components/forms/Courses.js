import React from "react";
import CourseForm from "./CourseForm";

const Courses = ({ courses, removeCourse, updateCourse }) => {
  return (
    <div>
      {courses.map((course) => (
        <CourseForm
          key={course.courseNo}
          course={course}
          removeCourse={removeCourse}
          updateCourse={updateCourse}
        />
      ))}
    </div>
  );
};

export default Courses;
