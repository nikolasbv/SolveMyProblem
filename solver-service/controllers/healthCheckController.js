// controllers/healthCheckController.js
const checkHealth = (req, res) => {
    res.status(200).json({ status: 'Healthy', service: 'Solver Microservice' });
};

module.exports = { checkHealth };
