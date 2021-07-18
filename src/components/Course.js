import { Grid, TextField, MenuItem, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import ACTIONS from '../actions';
import grades from '../data/grades.json';
import courses from '../data/courses.json';
import Autocomplete from '@material-ui/lab/Autocomplete';

const Course = ({ semester, course, dispatch }) => {
  return (
    <Grid container spacing={3}>
      <Grid item lg={6}>
        <Autocomplete
          freeSolo
          fullWidth
          size='small'
          options={courses.map((course) => course.name)}
          renderInput={(params) => (
            <TextField
              {...params}
              variant='outlined'
              label='Course Name'
              onChange={(e) =>
                dispatch({
                  type: ACTIONS.MODIFY_COURSE,
                  payload: {
                    semester: semester,
                    course: course,
                    value: { ...course, name: e.target.value },
                  },
                })
              }
            />
          )}
        />
      </Grid>
      <Grid item lg={3}>
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
      <Grid item lg={2}>
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
      <Grid container item lg={1}>
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
  );
};

export default Course;
