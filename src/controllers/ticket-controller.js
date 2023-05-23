const EmailService = require('../services/email-service');

module.exports = {
    async create(req,res) {
        try {
            const response = await EmailService.create(req.body);
            return res.status(201).json({
                data: response,
                err: {},
                success: true,
                message: 'Successfully created an email reminder'
            });
        } catch (error) {
            return res.status(500).json({
                data: {},
                err: error,
                message: 'Unable to create an email reminder',
                success: false
            });
        }
    }
}