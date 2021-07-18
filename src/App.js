import { React, useReducer } from 'react';
import { Box, Grid, Container, Button } from '@material-ui/core';

import { newSemester, addSemester, removeSemester } from './semester';
import { addCourse, removeCourse, modifyCourse } from './course';

import Navbar from './components/Navbar';
import Semester from './components/Semester';
import Course from './components/Course';
import SummaryTable from './components/SummaryTable';
import ACTIONS from './actions';

function reducer(semesters, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_SEMESTER:
      return addSemester(semesters);
    case ACTIONS.REMOVE_SEMESTER:
      return removeSemester(semesters, payload.semester);
    case ACTIONS.ADD_COURSE:
      return addCourse(semesters, payload.semester);
    case ACTIONS.REMOVE_COURSE:
      return removeCourse(semesters, payload.semester, payload.course);
    case ACTIONS.MODIFY_COURSE:
      return modifyCourse(
        semesters,
        payload.semester,
        payload.course,
        payload.value
      );
    default:
      return semesters;
  }
}

const Content = () => {
  const [semesters, dispatch] = useReducer(reducer, [newSemester()]);

  return (
    <Box my={10}>
      <Container>
        <Grid container spacing={5}>
          <Grid item lg={8} xs={12}>
            {semesters.map((semester) => (
              <Semester
                key={semester.id}
                semester={semester}
                dispatch={dispatch}
              >
                {semester.courses.map((course, index) => (
                  <Course
                    key={course.id}
                    semester={semester}
                    course={course}
                    dispatch={dispatch}
                  />
                ))}
              </Semester>
            ))}
            <Button
              variant='contained'
              onClick={() => dispatch({ type: ACTIONS.ADD_SEMESTER })}
            >
              Add semester
            </Button>
          </Grid>
          <Grid item lg={4} xs={12}>
            <SummaryTable semesters={semesters} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const App = () => {
  return (
    <>
      <Navbar />
      <Content />
    </>
  );
};

export default App;
