const path = require('path');
const express = require('express');
const addProductController = require('./controllers/addProductController');
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const productsController = require('./controllers/productsController');
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use('/addProduct', addProductController);
app.use('/products', productsController);
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});