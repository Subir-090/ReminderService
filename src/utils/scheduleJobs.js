const cron = require('node-cron');
const EmailService = require('../services/email-service');
const sender = require('../config/emailConfig');

function setUpJobs() {
    cron.schedule('*/2 * * * *', async () => {
        const tickets = await EmailService.fetchPendingEmails({ status : "PENDING"});
        for(const ticket of tickets) {
            sender.sendMail({
                to: ticket.recipientEmail,
                subject: ticket.subject,
                text: ticket.content
            }, (err, data) => {
                if(err) {
                    console.log(err);
                } else {
                    EmailService.update(ticket.id, {status : "SUCCESS"});
                }
            })
        }
    });
}

module.exports = setUpJobs;