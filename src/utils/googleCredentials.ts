import { google } from "googleapis";

export const auth = new google.auth.GoogleAuth({
  keyFile: "./src/credentials.json",
  scopes: "https://www.googleapis.com/auth/spreadsheets",
});

//instance of google sheets API
export const googleSheets = google.sheets({
  version: "v4",
  auth,
});

export const spreadsheetId = "1CHxr6EQq9b30FJUTnyZkQU06FULGK1r700tc8Zi5tNU";

export const getRows = googleSheets.spreadsheets.values.get({
  auth,
  spreadsheetId,
  range: "engenharia_de_software!1:27",
});
