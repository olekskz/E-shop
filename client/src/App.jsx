import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage";
import AddItemPage from "./pages/addItemPage";
import Layout from "./layout";
import { CartProvider } from "./cartProvider";
import RegisterPage from "./pages/registerPage";
import ProfilePage from "./pages/profilePage";

const App = () => {
    return (
        <CartProvider>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/addProduct" element={ <AddItemPage /> }/>
                        <Route path="/register" element={ <RegisterPage />}/>
                        <Route path="/profile" element={ <ProfilePage /> }/>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;