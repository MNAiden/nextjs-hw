// page.js
"use client";
import React from 'react';
import Counter from './Counter';
import Info from './Info';
import ProductList from './ProductList';

const Page = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Welcome to the React Assignment Page</h1>

            <section>
                <h2>Counters</h2>
                <p>Below are two counters that increment by different amounts and reset when they exceed 10.</p>
                <Counter incrementBy={1} buttonColor="lightblue" />
                <Counter incrementBy={2} buttonColor="lightgreen" />
            </section>

            <section style={{ marginTop: '40px' }}>
                <h2>Project Info</h2>
                <Info />
            </section>

            <section style={{ marginTop: '40px' }}>
                <h2>Product List from Fake Store API</h2>
                <ProductList />
            </section>
        </div>
    );
};

export default Page;
