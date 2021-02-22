import Course from "./course";

class Semester {
	static semesterCounter = 0;

	constructor(semesterNo) {
		this.semesterNo = semesterNo;
		this.courseCounter = 0;
		this.courses = new Map();
		this.newCourse();
		this.totalPTS = 0;
		this.takenCredits = 0;
	}

	newCourse() {
		let courseNo = ++this.courseCounter;
		this.courses.set(courseNo, new Course(this.semesterNo, courseNo));
	}
}

export default Semester;
