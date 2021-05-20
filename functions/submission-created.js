const addTosheet = require('./googleSheet')

exports.handler = async (event, context, callback) => {

    const data = JSON.parse(event.body).payload
    await addTosheet(data).then(
        result => {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify({message: result})
    })})
}
