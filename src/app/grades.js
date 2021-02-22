/*
  Coefficients are used while calculating GPA. Description is used in dropdown menu for showing text 
  in parenthesis next to dropdown-item and finally include is used to check if Grade should be included
  while calculating the GPA also disables credit field.
*/

const Grades = new Map();

Grades.set("AA", { coefficient: 4.0, description: "", include: true });
Grades.set("BA", { coefficient: 3.5, description: "", include: true });
Grades.set("BB", { coefficient: 3.0, description: "", include: true });
Grades.set("CB", { coefficient: 2.5, description: "", include: true });
Grades.set("CC", { coefficient: 2.0, description: "", include: true });
Grades.set("DC", { coefficient: 1.5, description: "", include: true });
Grades.set("DD", { coefficient: 1.0, description: "", include: true });
Grades.set("FD", { coefficient: 0.5, description: "", include: true });
Grades.set("FF", { coefficient: 0.0, description: "", include: true });
Grades.set("NA", { coefficient: 0.0, description: "", include: true });

Grades.set("S", {
  coefficient: 0.0,
  description: "Satisfactory",
  include: false,
});
Grades.set("U", {
  coefficient: 0.0,
  description: "Unsatisfactory",
  include: false,
});
Grades.set("EX", { coefficient: 0.0, description: "Exempted", include: false });
Grades.set("W", { coefficient: 0.0, description: "Withdraw", include: false });
Grades.set("PASS", { coefficient: 0.0, description: "", include: false });
Grades.set("FAIL", { coefficient: 0.0, description: "", include: false });

export default Grades;
