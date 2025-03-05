import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage";
import AddItemPage from "./pages/addItemPage";
import Layout from "./layout";
import { CartProvider } from "./cartProvider";

const App = () => {
    return (
        <CartProvider>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/addProduct" element={ <AddItemPage /> }/>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;