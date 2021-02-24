import React from "react";
import SemestersForm from "./components/forms/SemestersForm";
import Semester from "./semester";
import Records from "./components/records/Records";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      semesters: new Map(),
    };

    // Find elegant solution.
    this.state.semesters.set(0, new Semester(0));

    this.removeSemester = this.removeSemester.bind(this);
    this.addSemester = this.addSemester.bind(this);
    this.addCourse = this.addCourse.bind(this);
    this.removeCourse = this.removeCourse.bind(this);
    this.updateCourse = this.updateCourse.bind(this);
    //
  }
  addSemester() {
    this.setState(state => {
      let semesterNo = ++Semester.semesterCounter;
      state.semesters.set(semesterNo, new Semester(semesterNo));
      return state.semesters;
    });
  }
  removeSemester(semesterNo) {
    this.setState(state => {
      if (this.state.semesters.size > 1) {
        state.semesters.delete(semesterNo);
      }
      return state.semesters;
    });
  }
  addCourse(semesterNo) {
    this.setState(state => {
      state.semesters.get(semesterNo).newCourse();
      return state.semesters;
    });
  }
  removeCourse(course) {
    this.setState(state => {
      let semester = state.semesters.get(course.semesterNo);
      if (semester.courses.size > 1) {
        semester.courses.delete(course.courseNo);
      }
      return state.semesters;
    });
  }
  updateCourse(course, fieldName, newValue) {
    this.setState(state => {
      let semester = state.semesters.get(course.semesterNo);
      semester.courses.get(course.courseNo)[fieldName] = newValue;
      return state.semesters;
    });
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row py-5">
          <div className="col-xl-7 offset-xl-1">
            <SemestersForm
              semesters={Array.from(this.state.semesters.values())}
              removeSemester={this.removeSemester}
              addCourse={this.addCourse}
              removeCourse={this.removeCourse}
              updateCourse={this.updateCourse}
            />
            <hr />
            <div className="my-3">
              <button className="btn btn-success" onClick={this.addSemester}>
                Add semester
              </button>
            </div>
          </div>
          <div className="col-xl-3 order-first order-xl-last">
            <Records semesters={Array.from(this.state.semesters.values())} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
