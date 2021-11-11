require("dotenv").config();
const addTosheet = require("./googleSheet");
const jwt = require("jsonwebtoken");

const {JWT_SECRET, BASE_URL} = process.env;

exports.handler = async(event, context, callback) => {

  const key = event.queryStringParameters.key;

  try {
    const user = jwt.verify(key, JWT_SECRET);
    const {langue} = data;
    const link = (langue === "en") ? "https://prize.africtivistes.org/vote/?vote=yes" : "https://prize.africtivistes.org/fr/vote/?vote=yes";
    await addTosheet(user).then(
      (result) => {
        callback(null, {
          statusCode: 302,
          headers: {
            "Location": link
          },
        });
      });
  } catch (err) {
    return {
      statusCode: 302,
      headers: {
        "Location": "https://prize.africtivistes.org/"
      },
    };
  }
};
