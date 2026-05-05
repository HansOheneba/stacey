import { google } from "googleapis";

function getAuth() {
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;

  if (!privateKey || !clientEmail) {
    throw new Error(
      "Missing Google service account credentials in environment variables.",
    );
  }

  return new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

export async function appendToSheet(
  tab: string,
  headers: string[],
  row: string[],
) {
  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  if (!spreadsheetId) {
    throw new Error("Missing GOOGLE_SHEET_ID in environment variables.");
  }

  // Check if the sheet has a header row — if the tab is empty, write headers first
  const existing = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `${tab}!A1:Z1`,
  });

  const firstRow = existing.data.values?.[0];
  if (!firstRow || firstRow.length === 0) {
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${tab}!A1`,
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [headers] },
    });
  }

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${tab}!A1`,
    valueInputOption: "USER_ENTERED",
    requestBody: { values: [row] },
  });
}
