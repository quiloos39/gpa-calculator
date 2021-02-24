import React from "react";
import RecordBody from "./RecordBody";
import RecordFooter from "./RecordFooter";
import RecordHead from "./RecordHead";

const Records = ({ semesters }) => {
  return (
    <>
      {semesters.map(semester => (
        <div key={semester.semesterNo} className="mb-4">
          <h3>Semester {semester.semesterNo + 1}</h3>
          <div className="table-responsive">
            <table className="table table-borderless table-striped text-nowrap">
              <RecordHead />
              <RecordBody courses={Array.from(semester.courses.values())} />
              <RecordFooter semester={semester} semesters={semesters} />
            </table>
          </div>
        </div>
      ))}
    </>
  );
};

export default Records;
