const getvalue = require("./googleSheetGet");

exports.handler = async (event, context, callback) => {
  await getvalue().then(
    (result) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(result)
      });
    });
};