const express = require('express');
const router = express.Router();
const { Product } = require('../models');  // Змінюємо імпорт для Sequelize
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
const cloudinary = require('../config/cloudinary');

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'products',
        allowedFormats: ['jpeg', 'png', 'jpg']
    }
});

const upload = multer({ storage: storage });

router.post('/', upload.single('image'), async (req, res) => {
    try {
        const { name, price, category, mainDescription, secondaryDescription } = req.body;
        const image = req.file.path;

        const product = await Product.create({
            productName: name,
            price,
            imageUrl: image,
            category,
            mainDescription,
            subDescription: secondaryDescription
        });

        res.status(201).json({ 
            message: 'Product added successfully!',
            product 
        });
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;