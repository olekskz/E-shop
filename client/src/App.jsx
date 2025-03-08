import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage";
import AddItemPage from "./pages/addItemPage";
import Layout from "./layout";
import { CartProvider } from "./cartProvider";
import RegisterPage from "./pages/registerPage";

const App = () => {
    return (
        <CartProvider>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/addProduct" element={ <AddItemPage /> }/>
                        <Route path="/register" element={ <RegisterPage />}/>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;