import { auth, googleSheets, spreadsheetId } from "./googleCredentials.ts";

export const updateSheetsValues = (sheetsRows?: any[][] | null) => {
  googleSheets.spreadsheets.values.batchUpdate(
    {
      auth,
      spreadsheetId,
      requestBody: {
        valueInputOption: "USER_ENTERED",
        includeValuesInResponse: true,
        data: [
          {
            range: "engenharia_de_software!1:27",
            majorDimension: "ROWS",
            values: sheetsRows,
          },
        ],
      },
    },
    {}
  );
};
