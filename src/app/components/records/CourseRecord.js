import React from "react";
import Grades from "../../grades";

const CourseRecord = ({ course }) => {
	let credit, grade;
	if (!Grades.get(course.grade).include) {
		credit = "";
		grade = "";
	} else {
		credit = course.credit.toFixed(2);
		grade = (course.credit * Grades.get(course.grade).coefficient).toFixed(2);
	}
	return (
		<tr>
			<td>{course.name}</td>
			<td>{course.grade}</td>
			<td>{credit}</td>
			<td>{grade}</td>
		</tr>
	);
};

export default CourseRecord;
