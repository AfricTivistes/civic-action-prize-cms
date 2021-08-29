require('dotenv').config()
var jwt = require('jsonwebtoken')

const { JWT_SECRET, BASE_URL } = process.env

exports.handler = async (event, context, callback) => {

    const key = event.queryStringParameters.key

    try {
        var user = jwt.verify(key, JWT_SECRET);
        return {
            statusCode: 302,
            headers: {
                "Location": `${BASE_URL}${user.link}?vote=yes`
            },
        }
    } catch (err) {
        return {
            statusCode: 200,
            body: `Error`
        }
    }
}