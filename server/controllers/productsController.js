const express = require('express');
const router = express.Router();
const { Product } = require('../models');
const { Op } = require('sequelize');


const CATEGORIES = [
    'phones', 'notebooks', 'tablets', 'smartwatch', 
    'monitors', 'gpu', 'cpu', 'keyboards', 
    'ram', 'headphones', 'accessories', 'all'
];


router.get('/', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = 8;
        const offset = (page - 1) * limit;

        const products = await Product.findAndCountAll({
            limit,
            offset,
            order: [['createdAt', 'DESC']],
            distinct: true
        });

        res.status(200).json({
            products: products.rows,
            totalPages: Math.ceil(products.count / limit),
            currentPage: page,
            hasMore: page * limit < products.count
        });
    } catch (error) {
        console.error('Error getting products:', error);
        res.status(500).json({ 
            message: 'Failed to fetch products',
            error: error.message 
        });
    }
});



router.get('/featured', async (req, res) => {
    try {
        const featuredProducts = await Promise.all(
            CATEGORIES.map(async (category) => {
                const products = await Product.findAll({
                    where: { category },
                    limit: 4,
                    order: [['createdAt', 'DESC']]
                });
                return products;
            })
        );

        const products = featuredProducts.flat();

        res.status(200).json({
            products,
            hasMore: false
        });
    } catch (error) {
        console.error('Error getting featured products:', error);
        res.status(500).json({ 
            message: 'Failed to fetch featured products',
            error: error.message 
        });
    }
});


router.get('/category/:category', async (req, res) => {
    try {
        const { category } = req.params;
        const page = parseInt(req.query.page) || 1;
        const limit = 8;
        const offset = (page - 1) * limit;

        

        if (!CATEGORIES.includes(category)) {
            return res.status(400).json({ 
                message: 'Wrong category' 
            });
        }

        const products = await Product.findAndCountAll({
            where: { 
                category: category 
            },
            limit,
            offset,
            order: [['createdAt', 'DESC']],
            distinct: true
        });

        res.status(200).json({
            products: products.rows,
            totalPages: Math.ceil(products.count / limit),
            currentPage: page,
            hasMore: page * limit < products.count
        });
    } catch (error) {
        console.error('Error with fetching catergories', error);
        res.status(500).json({ 
            message: error
        });
    }
});

module.exports = router;