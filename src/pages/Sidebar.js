import React, { useState, useEffect } from 'react';

const Sidebar = () => { 
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data =>    {   
    const uniqueCategories = [...new Set(data.map((item) => item.category))];
    setCategories(uniqueCategories);
});
    }, []);

    return (
        <div className="sidebar">
            {console.log(">>> category",categories)}
        <h2>Sidebar</h2>
        <ul>
            {categories.map((category, index) => (
                <li key={index}>{category}</li>
            ))}
        </ul>
        </div>
    );
    }
export default Sidebar;