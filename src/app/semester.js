import Course from "./course";
import Grades from "./grades";

class Semester {
  static semesterCounter = 0;
  courses = new Map();
  courseCounter = 0;

  constructor(semesterNo) {
    this.semesterNo = semesterNo;
    this.newCourse();
  }

  newCourse() {
    let courseNo = ++this.courseCounter;
    this.courses.set(courseNo, new Course(this.semesterNo, courseNo));
  }

  get totalPoints() {
    return Array.from(this.courses.values()).reduce(
      (sum, course) => sum + course.credit * Grades.get(course.grade).coefficient,
      0
    );
  }

  get totalCredits() {
    return Array.from(this.courses.values()).reduce((sum, course) => sum + course.credit, 0);
  }
}

export default Semester;
