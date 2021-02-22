class Course {
  credit = 0.0;
  grade = "AA";

  constructor(semesterNo, courseNo) {
    this.name = `Course ${courseNo}`;
    this.courseNo = courseNo;
    this.semesterNo = semesterNo;
  }
}

export default Course;
