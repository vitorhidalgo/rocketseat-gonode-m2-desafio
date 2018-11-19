const express = require('express');

const routes = express.Router();

const authController = require('./controllers/authController');
const dashboardController = require('./controllers/dashboardController');

// AUTH
routes.get('/', authController.signin);

routes.get('/signup', authController.signup);
routes.post('/signup', authController.register);

// DASHBOARD
routes.get('/app/dashboard', dashboardController.index);
module.exports = routes;
