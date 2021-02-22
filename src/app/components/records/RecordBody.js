import React from "react";
import CourseRecord from "./CourseRecord";

const RecordBody = ({ courses }) => {
  return (
    <tbody>
      {courses.map((course) => (
        <CourseRecord key={course.courseNo} course={course} />
      ))}
    </tbody>
  );
};

export default RecordBody;
