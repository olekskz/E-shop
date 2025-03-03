import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage";
import AddItemPage from "./pages/addItemPage";
import Layout from "./layout"

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/addProduct" element={ <AddItemPage /> }/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;