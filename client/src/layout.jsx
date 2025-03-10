import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Cart from './components/cart/cart';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <Cart />
            <main className="flex-grow">
                {children}  
            </main>
            <Footer />
        </div>
    );
};

export default Layout;