const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const { PORT } = require('./config/serverConfig');
const jobs = require('./utils/scheduleJobs');
const ticketController = require('./controllers/ticket-controller');

function setUpAndStartServer() {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.post('/api/v1/tickets',ticketController.create);

    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
        jobs();
    })

}

setUpAndStartServer();