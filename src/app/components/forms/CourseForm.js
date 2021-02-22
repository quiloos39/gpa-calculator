import React from "react";
import Grades from "../../grades";



const CourseForm = ({ course, removeCourse, updateCourse }) => {

	const GradeItem = ({ grade, className, onClick }) => {
		let desc = grade[1].description;
		if (desc.length > 0) {
			return <span className={className} onClick={onClick}>{`${grade[0]} (${desc})`}</span>
		}
		return <span className={className} onClick={onClick}>{grade[0]}</span>
	}

	return (
		<div className="row my-3">
			<div className="col-6 mb-3">
				<label>Course Name</label>
				<input
					className="form-control"
					type="text"
					defaultValue={`Course ${course.courseNo}`}
					onChange={(e) => updateCourse(course, "name", e.target.value)}
				/>
			</div>
			<div className="col-6 col-lg-3 mb-3">
				<label>Credits</label>
				<input
					className="form-control"
					type="number"
					defaultValue="0"
					onChange={(e) =>
						updateCourse(course, "credit", Number(e.target.value))
					}
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
							<GradeItem
								grade={grade}
								key={grade[0]}
								className="dropdown-item"
								onClick={() => updateCourse(course, "grade", grade[0])}
							/>
						))}
					</div>
				</div>
			</div>
			<div className="col-lg-1 mb-3 d-flex">
				<button
					className="btn btn-danger mt-auto w-100"
					onClick={() => removeCourse(course)}
				>
					<i className="fas fa-trash-alt"></i>
				</button>
			</div>
		</div>
	);
};

export default CourseForm;
