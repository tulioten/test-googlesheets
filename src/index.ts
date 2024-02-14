import { verifySkippedClasses } from "./utils/verifySkippedClasses.ts";
import { calculateAverageGrades } from "./utils/calculateAverageGrades.ts";
import { getRows } from "./utils/googleCredentials.ts";
import { updateSheetsValues } from "./utils/updateSheetsValues.ts";

// import { finalNoteRequirement } from './utils/finalNoteRequirement.ts';

(async () => {
  let sheetsValues = (await getRows).data.values;

  sheetsValues = verifySkippedClasses(sheetsValues);

  sheetsValues = calculateAverageGrades(sheetsValues);

  updateSheetsValues(sheetsValues);
})();
