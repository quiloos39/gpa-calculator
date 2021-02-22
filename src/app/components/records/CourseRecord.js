import React from "react";
import Grades from "../../grades";

const CourseRecord = ({ course }) => {
  return (
    <tr>
      <td>{course.name}</td>
      <td>{course.grade}</td>
      <td>
        {Grades.get(course.grade).include ? course.credit.toFixed(2) : ""}
      </td>
      <td>
        {Grades.get(course.grade).include
          ? (course.credit * Grades.get(course.grade).coefficient).toFixed(2)
          : ""}
      </td>
    </tr>
  );
};

export default CourseRecord;
