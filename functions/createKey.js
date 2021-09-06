require("dotenv").config();
var jwt = require("jsonwebtoken");

const {JWT_SECRET} = process.env;

const creatKey = async(data) => {

  const {email, name, link, langue} = data.data;
  const user = {email: email, name:name, link:link, langue:langue};
  const token = jwt.sign(user, JWT_SECRET, {expiresIn: "1h"});

  return new Promise((resolve) => {

    resolve({key: token, langue: langue, email: email});

  });
};

module.exports = creatKey;
