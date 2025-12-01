import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import './ProductListing.css';

const ProductListing = () => {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState({});

  const plants = [
    { id: 1, name: 'Monstera Deliciosa', price: 45, category: 'Indoor', image: '🌿' },
    { id: 2, name: 'Pothos Golden', price: 25, category: 'Indoor', image: '🪴' },
    { id: 3, name: 'Snake Plant', price: 35, category: 'Indoor', image: '🌱' },
    { id: 4, name: 'Fiddle Leaf Fig', price: 60, category: 'Outdoor', image: '🌳' },
    { id: 5, name: 'Peace Lily', price: 30, category: 'Flowering', image: '🌸' },
    { id: 6, name: 'Rubber Plant', price: 50, category: 'Outdoor', image: '🍃' },
  ];

  const categories = [...new Set(plants.map(p => p.category))];

  const handleAddToCart = (plant) => {
    dispatch(addToCart({ id: plant.id, name: plant.name, price: plant.price }));
    setAddedItems({ ...addedItems, [plant.id]: true });
  };

  return (
    <div className="product-listing">
      <h1>Our Plants Collection</h1>
      {categories.map(category => (
        <div key={category} className="category-section">
          <h2 className="category-title">{category}</h2>
          <div className="products-grid">
            {plants
              .filter(p => p.category === category)
              .map(plant => (
                <div key={plant.id} className="product-card">
                  <div className="product-image">{plant.image}</div>
                  <h3>{plant.name}</h3>
                  <p className="price">${plant.price}</p>
                  <button
                    className={`add-to-cart-btn ${addedItems[plant.id] ? 'disabled' : ''}`}
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedItems[plant.id]}
                  >
                    {addedItems[plant.id] ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
