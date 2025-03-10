import React, { useState, useEffect, useRef } from "react";
import { useSearchParams, Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addProduct } from "../../features/cartSlice";
import './searchResults.css';

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('query') || '';
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const observerTarget = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting && hasMore && !loading) {
                    setPage(prev => prev + 1);
                }
            },
            { threshold: 1.0 }
        );

        if (observerTarget.current) {
            observer.observe(observerTarget.current);
        }

        return () => observer.disconnect();
    }, [hasMore, loading]);

    const getProducts = async () => {
        try {
            setLoading(true);
            const url = new URL('http://localhost:3001/products/search');
            url.searchParams.append('page', page);
            if (searchQuery) {
                url.searchParams.append('query', searchQuery);
            }
            if (selectedCategory) {
                url.searchParams.append('category', selectedCategory);
            }

            const response = await fetch(url);
            const data = await response.json();

            if (page === 1) {
                setProducts(data.products);
            } else {
                setProducts(prev => [...prev, ...data.products]);
            }

            setHasMore(data.hasMore);
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setProducts([]);
        setPage(1);
        getProducts();
    }, [searchQuery, selectedCategory]);


    const ProductCard = ({ product }) => {
        const dispatch = useDispatch();

        const handleAddToCart = () => {
            dispatch(addProduct({
                id: product.productId,
                name: product.productName,
                price: product.price,
                image: product.imageUrl,
                mainDescription: product.mainDescription,
                quantity: 1
            }));
        };

        return (
            <div className="product-card">
                <div className="product-image">
                    <img 
                        className="product-image-img" 
                        src={product.imageUrl}
                        alt={product.productName || 'Product image'} 
                    />
                </div>
                <div className="product-info">
                    <h3 className="product-name-h3">{product.productName}</h3>
                    <p className="price">{product.price} ₴</p>
                    <p className="description">{product.mainDescription}</p>
                    <button 
                        className="add-to-cart"
                        onClick={(e) => {
                            e.preventDefault();
                            handleAddToCart();
                        }}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="main-content">
            <div className="products-container">
                <h2 className="search-title">
                    {searchQuery ? `Search results for "${searchQuery}"` : 'All Products'}
                </h2>
                {products.length === 0 && !loading ? (
                    <div className="no-products">No products found</div>
                ) : (
                    products.map(product => <ProductCard key={product.productId} product={product} />)
                )}
                {loading && <div className="loading">Loading...</div>}
                <div ref={observerTarget} className="observer-target" />
            </div>
        </div>
    );
};

export default SearchResults;