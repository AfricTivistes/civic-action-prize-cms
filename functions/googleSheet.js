require("dotenv").config();
const {GoogleSpreadsheet} = require("google-spreadsheet");

const {GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET} = process.env;

const formatDate = (date, format) => {
  const map = {
    mm: date.getMonth() + 1,
    dd: date.getDate(),
    yy: date.getFullYear().toString().slice(-2),
    yyyy: date.getFullYear(),
    hh: date.getHours(),
    mn: date.getMinutes(),
    ss: date.getSeconds()

  };

  return format.replace(/mm|dd|yy|yyy|hh|mn|ss/gi, (matched) => map[matched]);
};

const addTosheet = async(data) => {
  const {email, name, link, langue} = data;

  const doc = new GoogleSpreadsheet(GOOGLE_SHEET);

  const today = new Date();
  const horodateur = formatDate(today, "dd/mm/yyyy hh:mn:ss");

  await doc.useServiceAccountAuth({
    client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: JSON.parse(GOOGLE_PRIVATE_KEY),
  });

  await doc.loadInfo(); // loads document properties and worksheets

  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]

  const moreRows = await sheet.addRows([
    {horodateur, email, name, link, langue}
  ]);
  return new Promise((resolve) => {

    resolve("Ajouter");

  });
};

module.exports = addTosheet;
