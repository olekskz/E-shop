'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
        await queryInterface.createTable('users', {
          id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
          firstName: {
            type: Sequelize.STRING,
            allowNull: false, 
          },
          lastName: {
            type: Sequelize.STRING,
            allowNull: false, 
          },
          phone: {
            type: Sequelize.STRING,
            allowNull: false, 
          },
          email: {
            type: Sequelize.STRING,
            allowNull: false, 
            unique: true, 
          },
          password: {
            type: Sequelize.STRING,
            allowNull: false, 
          },
          googleId: {
            type: Sequelize.STRING,
            unique: true,
          },
          appleId: {
            type: Sequelize.STRING,
            unique: true,
          },
          createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
          },
          updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
          },
        });    
  },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('users');
    }
};
