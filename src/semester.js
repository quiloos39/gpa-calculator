import { newCourse } from './course';

function newSemester() {
  return { id: Date.now(), courses: [newCourse()] };
}

function addSemester(semesters) {
  return [...semesters, newSemester()];
}

function removeSemester(semesters, semesterToBeRemoved) {
  if (semesters.length > 1) {
    return semesters.filter((semester) => semester !== semesterToBeRemoved);
  }
  return semesters;
}

export { newSemester, addSemester, removeSemester };
