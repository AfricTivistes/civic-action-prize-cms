const creatKey = require("./createKey");
const sendEmail = require("./sendEmail");

exports.handler = async(event, context, callback) => {
  const data = JSON.parse(event.body).payload;
  await creatKey(data).then(
    (result) => {
      sendEmail(result);
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({message: result})
      });});
};
