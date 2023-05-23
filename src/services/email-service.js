const sender = require('../config/emailConfig');
const TicketRepository = require('../repository/ticket-repository');

function sendBasicEmail(mailFrom, mailTo, mailSubject, mailBody) {
    sender.sendMail({
        from: mailFrom,
        to: mailTo,
        subject: mailSubject,
        text: mailBody
    })
}

async function fetchPendingEmails(data) {
    try {
        const tickets = await TicketRepository.get(data);
        return tickets;
    } catch (error) {
        throw error;    
    }
}

async function update(id, data) {
    try {
        const response = await TicketRepository.update(id, data);
        return response;
    } catch (error) {
        throw error;
    }
}

async function create(data) {
    try {
        console.log(data.timestamp)
        const ticket = await TicketRepository.create(data);
        return ticket;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    sendBasicEmail,
    fetchPendingEmails,
    update,
    create
}