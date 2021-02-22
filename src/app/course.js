class Course {
	constructor(semesterNo, courseNo) {
		this.name = `Course ${courseNo}`;
		this.semesterNo = semesterNo;
		this.courseNo = courseNo;
		this.credit = 0;
		this.grade = "AA";
	}
}

export default Course;
