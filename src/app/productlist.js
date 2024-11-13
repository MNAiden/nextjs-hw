// productlist.js
"use client";
import React, { useState, useEffect } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search products"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {filteredProducts.slice(0, 20).map(product => (
                    <tr key={product.id}>
                        <td>{product.title}</td>
                        <td><img src={product.image} alt={product.title} width="50" /></td>
                        <td>${product.price}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;
