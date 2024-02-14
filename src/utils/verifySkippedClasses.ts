export const verifySkippedClasses = (sheetsRows?: any[][] | null) => {
  let totalLessons = sheetsRows?.[1][0];
  totalLessons = +totalLessons.match(/\d+/)[0];

  let studentsFaults;

  if (sheetsRows) {
    for (let i = 3; i < sheetsRows?.length; i++) {
      let j = 2;
      studentsFaults = sheetsRows?.[i][j];
      let percentageFaults = (+studentsFaults * 100) / totalLessons;

      if (sheetsRows?.[i].includes("Reprovado por Falta")) {
        return;
      }

      if (percentageFaults > 25) {
        sheetsRows?.[i].push("Reprovado por Falta");
        sheetsRows?.[i].push(0);
      }
    }
  }
  return sheetsRows;
};
