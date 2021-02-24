import React from "react";
import Grades from "../../grades";
import { Typeahead } from "react-bootstrap-typeahead";
import Courses from "../../courses";

const CoursesForm = ({ courses, removeCourse, updateCourse }) => {
  return (
    <>
      {courses.map(course => (
        <div key={course.courseNo} className="row my-3">
          <div className="col-6 mb-3">
            <label>Course Name</label>
            <Typeahead
              placeholder={`Course ${course.courseNo}`}
              id={`course-${course.courseNo}`}
              options={Array.from(Courses.keys())}
              onChange={selection => {
                if (selection.length > 0) {
                  updateCourse(course, "name", selection[0]);
                  updateCourse(course, "credit", Courses.get(selection[0]).credit);
                }
              }}
            />
          </div>
          <div className="col-6 col-lg-3 mb-3">
            <label>Credits</label>
            <input
              className="form-control"
              type="number"
              value={course.credit}
              min={0}
              onChange={e => updateCourse(course, "credit", Number(e.target.value))}
              disabled={!Grades.get(course.grade).include}
            />
          </div>
          <div className="col-lg-2 mb-3">
            <label>Grade</label>
            <br />
            <div className="dropdown w-100">
              <button
                className="btn btn-outline-secondary w-100 dropdown-toggle text-left"
                data-toggle="dropdown"
              >
                {course.grade}
              </button>
              <div className="dropdown-menu">
                {Array.from(Grades.entries()).map(grade => (
                  <span
                    key={grade[0]}
                    className="dropdown-item"
                    onClick={() => updateCourse(course, "grade", grade[0])}
                  >
                    {grade[0] +
                      (grade[1].description.length > 0 ? ` (${grade[1].description})` : "")}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-1 mb-3 d-flex">
            <button className="btn btn-danger mt-auto w-100" onClick={() => removeCourse(course)}>
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default CoursesForm;
