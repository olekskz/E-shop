
const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
const { Provider } = require('react-redux');
const store = require('../client/src/store/store');
const App = require('../client/src/App').default;
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/script', express.static('client/src')); 
app.use('/styles', express.static('client/src/styles'));
app.use(express.static('client/public'));


app.get('*', (req, res) => {
    const context = {};
    const app = ReactDOMServer.renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
                <App />
            </StaticRouter>
        </Provider>
    )

    const html = `
    <!DOCTYPE html>
    <html lang="uk">
    <head>
        <meta charset="UTF-8">
        <title>Electrolucid</title>
        <link rel="icon" href="/assets/favicon.ico" />
        <link rel="stylesheet" href="/styles/main.css" />
    </head>
    <body>
        <div id="root">${app}</div>
    </body>
    </html>
 
    `;

    res.send(html);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});