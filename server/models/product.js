'use strict';

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(models) {
        }
    }
    Product.init(
        {
            productId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            productName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            price: {
                type: DataTypes.DECIMAL,
                allowNull: false
            },
            mainDescription: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            subDescription: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            imageUrl: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            category: {
                type: DataTypes.STRING,
                allowNull: false
            }
            
            
        }, {
        sequelize,
        modelName: 'Product',
        tableName: 'products',
        timestamps: true
    });
    return Product;
}
