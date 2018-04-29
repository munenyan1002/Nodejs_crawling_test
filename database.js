// Initialize instance
var sequelize = require('sequelize');

// Connect to database
var connection = new sequelize('データベース名', 'ユーザ名', 'パスワード', {オプション: '値'});


// Define models
var sites = connection.define('sites', {
	url: sequelize.TEXT,
	title: sequelize.STRING
});

// Synchronize to database
connection.sync({force: true});

