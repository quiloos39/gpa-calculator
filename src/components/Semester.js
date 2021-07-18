import { Box, Typography, Grid, Button } from '@material-ui/core';
import ACTIONS from '../actions';

const Semester = ({ semester, dispatch, children }) => {
  return (
    <Box>
      <Box mb={3}>
        <Typography variant='h4'>Semester</Typography>
      </Box>
      <Box mb={2}>{children}</Box>
      <Box mb={5}>
        <Grid container spacing={2}>
          <Grid item lg={2}>
            <Button
              fullWidth
              variant='contained'
              onClick={() =>
                dispatch({
                  type: ACTIONS.ADD_COURSE,
                  payload: { semester: semester },
                })
              }
            >
              Add course
            </Button>
          </Grid>
          <Grid item lg={3}>
            <Button
              fullWidth
              variant='contained'
              onClick={() =>
                dispatch({
                  type: ACTIONS.REMOVE_SEMESTER,
                  payload: { semester: semester },
                })
              }
            >
              Remove semester
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Semester;
