const path = require('path');

const express = require('express');
const addProductController = require('./controllers/addProductController');
const PORT = process.env.PORT || 3001;
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use('/addProduct', addProductController);

app.use((req, res, next) => {
    console.log('Request:', {
        method: req.method,
        path: req.path,
        body: req.body,
        files: req.files
    });
    next();
});
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});