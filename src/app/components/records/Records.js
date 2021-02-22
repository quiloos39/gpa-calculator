import React from "react";
import SemesterRecord from "./SemesterRecord";

const Records = ({ semesters }) => {
	return (
		<>
			{semesters.map((semester) => (
				<SemesterRecord key={semester.semesterNo} semesters={semesters} semester={semester} />
			))}
		</>
	);
};

export default Records;
