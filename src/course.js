function newCourse() {
  return { id: Date.now(), name: '', credit: '', grade: '' };
}

function addCourse(semesters, semesterToBeChanged) {
  return semesters.map((semester) =>
    semester === semesterToBeChanged
      ? { ...semester, courses: [...semester.courses, newCourse()] }
      : semester
  );
}

function removeCourse(semesters, semesterToBeChanged, courseToBeRemoved) {
  if (semesterToBeChanged.courses.length === 1 && semesters.length > 1) {
    return semesters.filter((semester) => semester !== semesterToBeChanged);
  } else if (semesterToBeChanged.courses.length > 1) {
    return semesters.map((semester) =>
      semester === semesterToBeChanged
        ? {
            ...semester,
            courses: semester.courses.filter(
              (course) => course !== courseToBeRemoved
            ),
          }
        : semester
    );
  }
  return semesters;
}

function modifyCourse(
  semesters,
  semesterToBeChanged,
  courseToBeChanged,
  value
) {
  return semesters.map((semester) =>
    semester === semesterToBeChanged
      ? {
          ...semester,
          courses: semester.courses.map((course) =>
            course === courseToBeChanged ? value : course
          ),
        }
      : semester
  );
}

export { newCourse, addCourse, removeCourse, modifyCourse };
