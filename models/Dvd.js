var Sequelize = require('sequelize');

var sequelize = new Sequelize('dvd', 'student','ttrojan', {
	dialect: 'mysql',
	host: 'itp460.usc.edu'
});

var Dvd = sequelize.define('dvds', {
	title: {
		field: 'title',
		type: Sequelize.STRING
	},

	award: {
		field: 'award',
		type: Sequelize.STRING
	}
}, {
	timestamps: false
});

module.exports = Dvd;