import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";


export default (
    <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    </Provider>
)