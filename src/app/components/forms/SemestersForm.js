import React from "react";
import CoursesForm from "./CoursesForm";

const SemestersForm = ({ semesters, removeSemester, addCourse, removeCourse, updateCourse }) => {
  return (
    <>
      {semesters.map(semester => (
        <div key={semester.semesterNo} className="mb-5">
          <h2 className="text-danger">Semester {semester.semesterNo + 1}</h2>
          <hr />
          <CoursesForm
            courses={Array.from(semester.courses.values())}
            addCourse={addCourse}
            removeCourse={removeCourse}
            updateCourse={updateCourse}
          />
          <hr />
          <div className="my-3">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => addCourse(semester.semesterNo)}
            >
              Add course
            </button>
            <button
              type="button"
              className="btn btn-danger mx-3"
              onClick={() => removeSemester(semester.semesterNo)}
            >
              Remove semester
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default SemestersForm;
