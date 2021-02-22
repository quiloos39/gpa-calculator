import React from "react";

const RecordFooter = ({ semester, semesters }) => {
  let prevSemesters = semesters.slice(0, semesters.indexOf(semester));
  let prevTotalCredits = prevSemesters.reduce((sum, semester) => sum + semester.totalCredits, 0);
  let prevTotalPoints = prevSemesters.reduce((sum, semester) => sum + semester.totalPoints, 0);

  const GPA = ({ credits, points }) => {
    return (
      <tr>
        <td>
          <b>GPA</b>: {(points / credits || 0).toFixed(2)}
        </td>
        <td>
          <b>Total</b>
        </td>
        <td>{credits.toFixed(2)}</td>
        <td>{points.toFixed(2)}</td>
      </tr>
    );
  };

  const CUMULATIVE_GPA = ({ credits, points, prevCredits, prevPoints }) => {
    return (
      <tr>
        <td>
          <b>Cum.GPA</b>: {((points + prevPoints) / (credits + prevCredits) || 0).toFixed(2)}
        </td>
        <td>
          <b>Prev.Total</b>
        </td>
        <td>{prevCredits.toFixed(2)}</td>
        <td>{prevPoints.toFixed(2)}</td>
      </tr>
    );
  };

  const GRAND_TOTAL = ({ credits, points, prevCredits, prevPoints }) => {
    return (
      <tr>
        <td></td>
        <td>
          <b>Grand Total</b>
        </td>
        <td> {(credits + prevCredits).toFixed(2)} </td>
        <td> {(points + prevPoints).toFixed(2)} </td>
      </tr>
    );
  };

  return (
    <tfoot>
      <GPA credits={semester.totalCredits} points={semester.totalPoints} />
      <CUMULATIVE_GPA
        credits={semester.totalCredits}
        points={semester.totalPoints}
        prevCredits={prevTotalCredits}
        prevPoints={prevTotalPoints}
      />
      <GRAND_TOTAL
        credits={semester.totalCredits}
        points={semester.totalPoints}
        prevCredits={prevTotalCredits}
        prevPoints={prevTotalPoints}
      />
    </tfoot>
  );
};

export default RecordFooter;
