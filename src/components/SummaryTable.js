import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableFooter,
} from '@material-ui/core';

const SummaryTable = ({ semesters }) => {
  return (
    <TableContainer>
      {semesters.map((semester, index) => (
        <Table key={index}>
          <TableHead>
            <TableRow>
              <TableCell>Course Name</TableCell>
              <TableCell>Grade</TableCell>
              <TableCell>Credits</TableCell>
              <TableCell>Points</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {semester.courses.map((course, index) => (
              <TableRow key={index}>
                <TableCell>{course.name}</TableCell>
                <TableCell>{course.grade.letter}</TableCell>
                <TableCell>{course.credits}</TableCell>
                <TableCell>{0}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter></TableFooter>
        </Table>
      ))}
    </TableContainer>
  );
};

export default SummaryTable;
