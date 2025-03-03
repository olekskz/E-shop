'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('products', 'mainDescription', {
      type: Sequelize.TEXT
    });
    await queryInterface.changeColumn('products', 'subDescription', {
      type: Sequelize.TEXT
    });
    await queryInterface.changeColumn('products', 'imageUrl', {
      type: Sequelize.TEXT
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('products', 'mainDescription', {
      type: Sequelize.STRING(255)
    });
    await queryInterface.changeColumn('products', 'subDescription', {
      type: Sequelize.STRING(255)
    });
    await queryInterface.changeColumn('products', 'imageUrl', {
      type: Sequelize.STRING(255)
    });
  }
};