A simple application that updates students situation in a google spreadsheets, based in grades and skipped classes.


Installation:

    1. To use this application clone this repository:
        git clone https://github.com/tulioten/test-googlesheets
    
    2. Install the dependencies:
        npm install
    
    3. Open the link of the original spreadsheet:
        https://docs.google.com/spreadsheets/d/1CHxr6EQq9b30FJUTnyZkQU06FULGK1r700tc8Zi5tNU/edit#gid=0
    
    4. to run the App use:
        npm run dev
    
    5. Check the spreadsheet to see the changes.



Configuration:

  Before running this application, you need to configure Google Sheets API crendentials.
  
    1. go to Google Cloud Console in https://console.cloud.google.com
    
    2. Create a new project or select an existing project.
    
    3. enable the Google Sheets API
    
    4. Create a service key and download the JSON file containing the credentials.
    
    5. rename the file to "credentials.json" and place it in the "src" folder.
