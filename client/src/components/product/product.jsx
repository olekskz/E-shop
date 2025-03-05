import React, { useState, useEffect, useRef } from "react";
import Catalog from "../catalog/catalog";
import "./product.css";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const observerTarget = useRef(null);

    const getProducts = async () => {
        if (loading) return;
        
        try {
            setLoading(true);
            
            const scrollPosition = window.pageYOffset;

            const url = selectedCategory 
                ? `http://localhost:3001/products/category/${selectedCategory}?page=${page}`
                : `http://localhost:3001/products?page=${page}`;

            const response = await fetch(url);
            const data = await response.json();

            if (!data.products?.length) {
                setHasMore(false);
                page === 1 && setProducts([]);
                return;
            }

            setProducts(prevProducts => {
                if (page === 1) return data.products;
                
                const newProducts = data.products.filter(newProd => 
                    !prevProducts.some(existingProd => 
                        existingProd.productId === newProd.productId
                    )
                );
                return [...prevProducts, ...newProducts];
            });

            setHasMore(data.hasMore);
            
            
            window.scrollTo(0, scrollPosition);
        } catch (error) {
            console.error('Error:', error);
            setProducts([]);
            setHasMore(false);
        } finally {
            setLoading(false);
        }
    };

    const handleCategoryChange = (category) => {
        setProducts([]);
        setSelectedCategory(category === 'all' ? null : category);
        setPage(1);
        setHasMore(true);
    };

    useEffect(() => {
        getProducts();
    }, [selectedCategory]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting && hasMore && !loading) {
                    const scrollPosition = window.pageYOffset;
                    setPage(prev => prev + 1);
                    window.scrollTo(0, scrollPosition);
                }
            },
            { threshold: 0.1 }
        );

        observerTarget.current && observer.observe(observerTarget.current);
        return () => observer.disconnect();
    }, [hasMore, loading]);

    useEffect(() => {
        page > 1 && getProducts();
    }, [page]);

    const ProductCard = ({ product }) => (
        <div key={product.productId} className="product-card"> 
            <div className="product-image">
                <img 
                    className="product-image-img" 
                    src={product.imageUrl} 
                    alt={product.productName || 'Product image'} 
                />
            </div>
            <div className="product-info">
                <h3 className="product-name-h3">{product.productName}</h3>
                <p className="price">${product.price}</p>
                <p className="description">{product.mainDescription}</p>
                <button className="add-to-cart">Add to Cart</button>
            </div>
        </div>
    );

    return (
        <div className="main-content">
            <Catalog onCategorySelect={handleCategoryChange} />
            <div className="products-container">
                {products.length === 0 && !loading ? (
                    <div className="no-products">Products will be soon...</div>
                ) : (
                    products.map(product => <ProductCard key={product.productId} product={product} />)
                )}
                {loading && <div className="loading">Завантаження...</div>}
                <div ref={observerTarget} style={{ height: "20px" }} />
            </div>
        </div>
    );
};

export default Products;