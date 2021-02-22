import React from "react";
import SemesterForm from "./SemesterForm";

const Semesters = ({
  semesters,
  removeSemester,
  addCourse,
  removeCourse,
  updateCourse,
}) => {
  return (
    <>
      {semesters.map((semester) => (
        <SemesterForm
          key={semester.semesterNo}
          semester={semester}
          removeSemester={removeSemester}
          addCourse={addCourse}
          removeCourse={removeCourse}
          updateCourse={updateCourse}
        />
      ))}
    </>
  );
};

export default Semesters;
