'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('dogs', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      imgUrl: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'img_url',
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('dogs');
  }
};
