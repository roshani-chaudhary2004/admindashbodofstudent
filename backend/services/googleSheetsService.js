const { google } = require('googleapis');
const fs = require('fs');
require('dotenv').config();

const auth = new google.auth.GoogleAuth({
  keyFile: process.env.GOOGLE_CREDENTIALS_PATH,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const addChallanToSheet = async (data) => {
  const client = await auth.getClient();
  const sheets = google.sheets({ version: 'v4', auth: client });

  const spreadsheetId = process.env.SHEET_ID;
  if (!spreadsheetId) throw new Error("Missing spreadsheetId in .env");

  const range = 'Sheet1!A1'; // Or any range
  const values = [
    [
      data.name || '',
      data.roll || '',
      data.amount || '',
      data.date || '',
      data.purpose || ''
    ]
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: 'USER_ENTERED',
    resource: {
      values: values
    },
  });

  return { success: true };
};

module.exports = {
  addChallanToSheet,
};
