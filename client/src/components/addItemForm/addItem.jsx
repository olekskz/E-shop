import React, { useState } from "react";
import "./addItem.css";

const AddItem = () => {
    const [product, setProduct] = useState({
        name: "",
        price: "",
        image: "",
        category: "",
        mainDescription: "",
        secondaryDescription: ""
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prevValue => ({
            ...prevValue,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setProduct(prev => ({
            ...prev,
            image: file
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
    
        try {
            const formData = new FormData();
            formData.append('name', product.name);
            formData.append('price', product.price);
            formData.append('image', product.image);
            formData.append('category', product.category);
            formData.append('mainDescription', product.mainDescription);
            formData.append('secondaryDescription', product.secondaryDescription);
    
            const response = await fetch("http://localhost:3001/addProduct", {
                method: "POST",
                body: formData
            });
    
            if (response.ok) {
                setProduct({
                    name: "",
                    price: "",
                    image: "",
                    category: "",
                    mainDescription: "",
                    secondaryDescription: ""
                });
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="item-form">
            <form onSubmit={handleSubmit}>
                <h1>Add a product</h1>
                <label htmlFor="name">Product Name</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={product.name}
                    required 
                    onChange={handleChange} 
                />

                <label htmlFor="price">Product Price</label>
                <input 
                    type="number" 
                    name="price" 
                    id="price" 
                    value={product.price}
                    required 
                    onChange={handleChange} 
                />

                <label htmlFor="image">Product Image</label>
                <input 
                    type="file" 
                    name="image" 
                    id="image" 
                    required 
                    onChange={handleFileChange} 
                />

                <label htmlFor="category">Product Category</label>
                <select 
                    name="category" 
                    id="category" 
                    value={product.category}
                    required 
                    onChange={handleChange}
                >
                    <option value="">Select category</option>
                    <option value="phones">Phones</option>
                    <option value="notebooks">Notebooks</option>
                    <option value="tablets">Tablets</option>
                    <option value="smartwatch">Smart watches</option>
                    <option value="monitors">Monitors</option>
                    <option value="gpu">GPU</option>
                    <option value="cpu">CPU</option>
                    <option value="keyboards">Keyboards</option>
                    <option value="ram">RAM</option>
                    <option value="headphones">Headphones</option>
                    <option value="accessories">Accessories</option>
                </select>

                <label htmlFor="mainDescription">Main Description</label>
                <textarea 
                    name="mainDescription" 
                    id="mainDescription" 
                    value={product.mainDescription}
                    required 
                    onChange={handleChange} 
                />

                <label htmlFor="secondaryDescription">Secondary Description</label>
                <textarea 
                    name="secondaryDescription" 
                    id="secondaryDescription" 
                    value={product.secondaryDescription}
                    required 
                    onChange={handleChange} 
                />

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Adding...' : 'Add Product'}
                </button>
            </form>
        </div>
    );
};

export default AddItem;