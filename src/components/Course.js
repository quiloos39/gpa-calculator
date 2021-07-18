import { Grid, TextField, MenuItem, IconButton, Box } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import ACTIONS from '../actions';
import grades from '../data/grades.json';
import courses from '../data/courses.json';
import Autocomplete from '@material-ui/lab/Autocomplete';

const Course = ({ semester, course, dispatch }) => {
  function handleCourseName(value) {
    dispatch({
      type: ACTIONS.MODIFY_COURSE,
      payload: {
        semester: semester,
        course: course,
        value: { ...course, name: value },
      },
    });
  }

  return (
    <Box mb={2}>
      <Grid container spacing={2}>
        <Grid item lg={6} xs={12}>
          <Autocomplete
            freeSolo
            fullWidth
            size='small'
            options={courses.map((course) => course.name)}
            onInputChange={(_, value) => handleCourseName(value)}
            renderInput={(params) => (
              <TextField {...params} variant='outlined' label='Course Name' />
            )}
          />
        </Grid>
        <Grid item lg={3} xs={8}>
          <TextField
            fullWidth
            variant='outlined'
            label='Credits'
            size='small'
            type='number'
            onChange={(e) =>
              dispatch({
                type: ACTIONS.MODIFY_COURSE,
                payload: {
                  semester: semester,
                  course: course,
                  value: { ...course, credits: e.target.value },
                },
              })
            }
          />
        </Grid>
        <Grid item lg={2} xs={3}>
          <TextField
            fullWidth
            variant='outlined'
            label='Grade'
            size='small'
            value={course.grade}
            onChange={(e) =>
              dispatch({
                type: ACTIONS.MODIFY_COURSE,
                payload: {
                  semester: semester,
                  course: course,
                  value: { ...course, grade: e.target.value },
                },
              })
            }
            select
          >
            {grades.map((grade) => (
              <MenuItem key={grade.letter} value={grade}>
                {grade.letter}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid container item lg={1} xs={1}>
          <IconButton
            style={{ padding: '0' }}
            onClick={() =>
              dispatch({
                type: ACTIONS.REMOVE_COURSE,
                payload: { semester: semester, course: course },
              })
            }
          >
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Course;
