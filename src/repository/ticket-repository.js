const { NotificationTicket } = require('../models')
const { Op } = require('sequelize');

module.exports = {
    async create(data) {
        try {
            const ticket = await NotificationTicket.create(data);
            return ticket;
        } catch (error) {
            throw error;
        }
    },

    async getAll() {
        try {
            const tickets = await NotificationTicket.findAll();
            return tickets;
        } catch (error) {
            throw error;
        }
    },

    async update(ticketId, data) {
        try {
            const ticket = await NotificationTicket.findByPk(ticketId);
            ticket.status = data.status;
            await ticket.save();
            return ticket;
        } catch (error) {
            throw error;
        }
    },

    async get(data) {
        try {
            const tickets = await NotificationTicket.findAll({
                where: {
                    status: data.status,
                    timestamp: {
                        [Op.lte]: new Date()
                    }
                }
            });

            return tickets;
        } catch (error) {
            throw error;
        }
    }

};