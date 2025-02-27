const { configureStore } = require('@reduxjs/toolkit');
import initialReducer from '../features/basic';

const store = configureStore({
    reducer: {
        basicReducer: initialReducer
    }
});

module.exports = store;