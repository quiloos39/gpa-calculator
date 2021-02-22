import React from "react";
import Grades from "../../grades";
import CourseRecord from "./CourseRecord";

const SemesterRecord = ({ semester, semesters }) => {

	const Head = () => {
		return (
			<thead>
				<tr>
					<th>Courses</th>
					<th>Grade</th>
					<th>Credits</th>
					<th>GR. PTS</th>
				</tr>
			</thead>
		);
	};
	const Body = ({ courses }) => {
		return (
			<tbody>
				{courses.map((course) => (
					<CourseRecord key={course.courseNo} course={course} />
				))}
			</tbody>
		);
	};
	const GPA = ({ totalPTS, takenCredits }) => {
		return (
			<tr>
				<td>
					<b>GPA</b>: {(totalPTS / takenCredits || 0).toFixed(2)}
				</td>
				<td>
					<b>Total</b>
				</td>
				<td>{takenCredits.toFixed(2)}</td>
				<td>{totalPTS.toFixed(2)}</td>
			</tr>
		);
	};
	const CUMULATIVE_GPA = ({ takenCredits,  totalPTS,  prevTakenCredits, prevTotalPTS }) => {
		
		return (
			<tr>
				<td>
					<b>Cum.GPA</b>: {((totalPTS + prevTotalPTS)/(takenCredits + prevTakenCredits) || 0).toFixed(2)}
				</td>
				<td>
					<b>Prev.Total</b>
				</td>
				<td>{prevTakenCredits.toFixed(2)}</td>
				<td>{prevTotalPTS.toFixed(2)}</td>
			</tr>
		);
	};
	const GRAND_TOTAL = ({ takenCredits, totalPTS }) => {
		return (
			<tr>
				<td></td>
				<td>
					<b>Grand Total</b>
				</td>
				<td> {takenCredits.toFixed(2)} </td>
				<td> {totalPTS.toFixed(2)} </td>
			</tr>
		);
	};
	const Footer = ({ semesters, semester }) => {
		let beforeSemesters = semesters.slice(0, semesters.indexOf(semester));
		console.log(semester.semesterNo, semesters, beforeSemesters);
		let CUM_TAKEN_CREDITS = beforeSemesters.reduce((sum, semester) => sum + semester.takenCredits, 0);
		let CUM_TOTAL_PTS = beforeSemesters.reduce((sum, semester) => sum + (semester.totalPTS), 0);
		return (
			<tfoot>
				<GPA totalPTS={semester.totalPTS} takenCredits={semester.takenCredits} />
				<CUMULATIVE_GPA prevTotalPTS={CUM_TOTAL_PTS} prevTakenCredits={CUM_TAKEN_CREDITS} totalPTS={semester.totalPTS} takenCredits={semester.takenCredits}/>
				<GRAND_TOTAL totalPTS={semester.totalPTS + CUM_TOTAL_PTS} takenCredits={semester.takenCredits + CUM_TAKEN_CREDITS} />
			</tfoot>
		);
	};
	return (
		<div className="mb-4">
			<h3>Semester {semester.semesterNo + 1}</h3>
			<table className="table table-borderless table-striped">
				<Head />
				<Body courses={Array.from(semester.courses.values())} />
				<Footer semesters={semesters} semester={semester} />
			</table>
		</div>
	);
};

export default SemesterRecord;
