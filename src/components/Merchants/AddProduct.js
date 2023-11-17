import React, { useState } from 'react';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [categories, setCategories] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name:</label>
            <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
    
            <label htmlFor="price">Price:</label>
            <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            />
        </div>
        <div>
            <label htmlFor="description">Description:</label>
            <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            ></textarea>
    
            <label htmlFor="categories">Categories:</label>
            <select
            id="categories"
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
            >
            <option value="">Select an option</option>
            <option value="beauty">Beauty</option>
            <option value="vehicle">Vehicle</option>
            <option value="homedecor">Home Decor</option>
            </select>
        </div> 
        <button type="submit">Submit</button>
      </form>
    );
};

export default AddProduct;