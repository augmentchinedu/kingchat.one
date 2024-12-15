const services = require("../classes/services").services;
const users = require("./users");

module.exports = { services, ...users };
