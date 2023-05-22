const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const { PORT } = require('./config/serverConfig');

const { sendBasicEmail } = require('./services/email-service');

function setUpAndStartServer() {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);

        // sendBasicEmail(
        //     '"De-Shaw Team" <fsupport@deshaw.gmail.com>',
        //     'subirgupta090@gmail.com',
        //     'Important Talks',
        //     'Hey, how are you? Hope you are doing well'
        // );
    })

}

setUpAndStartServer();