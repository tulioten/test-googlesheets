export const calculateAverageGrades = (sheetsRows?: any[][] | null) => {
  if (sheetsRows) {
    for (let i = 3; i < sheetsRows?.length; i++) {
      let averageGrade = 0;
      for (let j = 3; j <= 5; j++) {
        averageGrade += +sheetsRows[i][j];
      }
      averageGrade = averageGrade / 3;
      averageGrade = Number(averageGrade.toFixed());
      let finalGrade = 50 * 2 - averageGrade;

      if (
        sheetsRows[i].includes("Reprovado por Nota") ||
        sheetsRows[i].includes("Exame Final")
      ) {
        return sheetsRows;
      }

      if (!sheetsRows[i].includes("Reprovado por Falta") && averageGrade < 50) {
        sheetsRows[i].push("Reprovado por Nota");
        sheetsRows[i].push(0);
      }
      if (
        !sheetsRows[i].includes("Reprovado por Falta") &&
        averageGrade >= 50 &&
        averageGrade < 70
      ) {
        sheetsRows[i].push("Exame Final");
        sheetsRows[i].push(finalGrade);
      }
      if (
        !sheetsRows[i].includes("Reprovado por Falta") &&
        averageGrade >= 70
      ) {
        sheetsRows[i].push("Aprovado");
        sheetsRows[i].push(0);
      }
    }
  }
  return sheetsRows;
};
