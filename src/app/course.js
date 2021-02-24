class Course {
  credit = 0.00;
  grade = "AA";

  constructor(semesterNo, courseNo) {
    this.name = `Course ${courseNo}`;
    this.courseNo = courseNo;
    this.semesterNo = semesterNo;
  }
}

export default Course;
