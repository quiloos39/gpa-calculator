import React from "react";
import RecordBody from "./RecordBody";
import RecordFooter from "./RecordFooter";
import RecordHead from "./RecordHead";

const Records = ({ semesters }) => {
  return (
    <>
      {semesters.map((semester) => (
        <div key={semester.semesterNo} className="mb-4">
          <h3>Semester {semester.semesterNo + 1}</h3>
          <table className="table table-borderless table-striped">
            <RecordHead />
            <RecordBody courses={Array.from(semester.courses.values())} />
            <RecordFooter semester={semester} semesters={semesters} />
          </table>
        </div>
      ))}
    </>
  );
};

export default Records;
