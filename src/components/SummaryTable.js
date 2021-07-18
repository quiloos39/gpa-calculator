import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableFooter,
  Box,
  Typography,
} from '@material-ui/core';

const SummaryTable = ({ semesters }) => {
  return (
    <TableContainer>
      {semesters.map((semester) => (
        <Box key={semester.id} mb={5}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell colSpan={4}>
                  <Typography variant='h5'>Semester</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <b>Course Name</b>
                </TableCell>
                <TableCell>
                  <b>Grade</b>
                </TableCell>
                <TableCell>
                  <b>Credits</b>
                </TableCell>
                <TableCell>
                  <b>Points</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {semester.courses
                .filter((course) => course.name.length > 0)
                .map((course, index) => (
                  <TableRow key={index}>
                    <TableCell>{course.name}</TableCell>
                    <TableCell>{course.grade.letter}</TableCell>
                    <TableCell>
                      {isNaN(course.credits)
                        ? '0.00'
                        : Number(course.credits).toFixed(2)}
                    </TableCell>
                    <TableCell>0.00</TableCell>
                  </TableRow>
                ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell>
                  <b>GPA:</b>
                </TableCell>
                <TableCell>
                  <b>Total</b>
                </TableCell>
                <TableCell>0.00</TableCell>
                <TableCell>0.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <b>CUM.GPA:</b>
                </TableCell>
                <TableCell>
                  <b>Prev. Total</b>
                </TableCell>
                <TableCell>0.00</TableCell>
                <TableCell>0.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>
                  <b>Grand Total</b>
                </TableCell>
                <TableCell>0.00</TableCell>
                <TableCell>0.00</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </Box>
      ))}
    </TableContainer>
  );
};

export default SummaryTable;
