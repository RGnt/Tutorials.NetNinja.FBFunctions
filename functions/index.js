const functions = require('firebase-functions');

// http request 1
exports.randomNumber = functions.https.onRequest((request, response) => {
    const number = Math.floor(Math.random() * 100);
    console.log(number);
    response.send(number.toString());
});

// http request 2
exports.toTheDojo = functions.https.onRequest((request, response) => {
    response.redirect('https://rjniemela.net');
});

// http callable function
exports.sayHello = functions.https.onCall((data, context) => {
    return `hello, ${data.name} `;
});