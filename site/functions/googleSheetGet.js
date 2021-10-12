require("dotenv").config();
const { GoogleSpreadsheet } = require("google-spreadsheet");

const { GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET } = process.env;

const getvalue = async() => {
  
    const doc = new GoogleSpreadsheet(GOOGLE_SHEET);
    await doc.useServiceAccountAuth({
        client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: JSON.parse(GOOGLE_PRIVATE_KEY),
    });

    await doc.loadInfo(); // loads document properties and worksheets

    const sheet = doc.sheetsByIndex[1]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
    await sheet.loadCells('C2:C11');
    const candidants = [];
    for (let i = 1; i < 11; i++) {
        candidants.push(sheet.getCell(i, 2).value);
    }

  return new Promise((resolve) => {
      resolve({ "c1": candidants[0], "c2": candidants[1], "c3": candidants[2], "c4": candidants[3], "c5": candidants[4], "c6": candidants[5], "c7": candidants[6], "c8": candidants[7], "c9": candidants[8], "c10": candidants[9], "c11": candidants[10] });
  });
};

module.exports = getvalue;
