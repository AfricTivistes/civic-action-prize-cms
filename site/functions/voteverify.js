require("dotenv").config();
const addTosheet = require("./googleSheet");
const jwt = require("jsonwebtoken");

const {JWT_SECRET, BASE_URL} = process.env;

exports.handler = async(event, context, callback) => {

  const key = event.queryStringParameters.key;

  try {
    const user = jwt.verify(key, JWT_SECRET);
    await addTosheet(user).then(
      (result) => {
        callback(null, {
          statusCode: 302,
          headers: {
            "Location": `https://prize.africtivistes.org/vote/?vote=yes`
          },
        });
      });
  } catch (err) {
    return {
      statusCode: 302,
      headers: {
        "Location": `https://prize.africtivistes.org/`
      },
    };
  }
};
