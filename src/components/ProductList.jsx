import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addItemToCart } from '../store/CartSlice';
import './App.css';

// Product data organized by categories
const products = {
  'Indoor Plants': [
    {
      id: 'indoor-1',
      name: 'Monstera Deliciosa',
      price: 45.99,
      image: 'https://images.unsplash.com/photo-1545239705-1564e58b9e4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'Indoor Plants'
    },
    {
      id: 'indoor-2',
      name: 'Fiddle Leaf Fig',
      price: 62.50,
      image: 'https://images.unsplash.com/photo-1586944179862-268e18296da5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'Indoor Plants'
    },
    {
      id: 'indoor-3',
      name: 'Peace Lily',
      price: 28.99,
      image: 'https://images.unsplash.com/photo-1586165368502-1bad197a6461?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'Indoor Plants'
    },
    {
      id: 'indoor-4',
      name: 'Snake Plant',
      price: 35.75,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'Indoor Plants'
    },
    {
      id: 'indoor-5',
      name: 'Rubber Plant',
      price: 42.25,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'Indoor Plants'
    },
    {
      id: 'indoor-6',
      name: 'ZZ Plant',
      price: 38.50,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'Indoor Plants'
    }
  ],
  'Succulents': [
    {
      id: 'succulent-1',
      name: 'Echeveria Elegans',
      price: 18.99,
      image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'Succulents'
    },
    {
      id: 'succulent-2',
      name: 'Aloe Vera',
      price: 22.50,
      image: 'https://images.unsplash.com/photo-1593691544942-83d1d2a952ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'Succulents'
    },
    {
      id: 'succulent-3',
      name: 'Haworthia fasciata',
      price: 15.75,
      image: 'https://images.unsplash.com/photo-1509423350716-97f2360af7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'Succulents'
    },
    {
      id: 'succulent-4',
      name: 'Sedum morganianum',
      price: 19.99,
      image: 'https://images.unsplash.com/photo-1545249390-6b9c8ba1b8b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'Succulents'
    },
    {
      id: 'succulent-5',
      name: 'Crassula ovata',
      price: 25.50,
      image: 'https://images.unsplash.com/photo-1509423350716-97f2360af7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'Succulents'
    },
    {
      id: 'succulent-6',
      name: 'Kalanchoe tomentosa',
      price: 17.25,
      image: 'https://images.unsplash.com/photo-1545249390-6b9c8ba1b8b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'Succulents'
    }
  ],
  'Flowering Plants': [
    {
      id: 'flowering-1',
      name: 'Orchid Phalaenopsis',
      price: 55.99,
      image: 'https://images.unsplash.com/photo-1524592797775-3e62e4c0ac81?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'Flowering Plants'
    },
    {
      id: 'flowering-2',
      name: 'African Violet',
      price: 32.50,
      image: 'https://images.unsplash.com/photo-1586165368502-1bad197a6461?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'Flowering Plants'
    },
    {
      id: 'flowering-3',
      name: 'Anthurium',
      price: 48.75,
      image: 'https://images.unsplash.com/photo-1586944179862-268e18296da5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'Flowering Plants'
    },
    {
      id: 'flowering-4',
      name: 'Geranium',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'Flowering Plants'
    },
    {
      id: 'flowering-5',
      name: 'Begonia',
      price: 29.50,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'Flowering Plants'
    },
    {
      id: 'flowering-6',
      name: 'Impatiens',
      price: 21.25,
      image: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'Flowering Plants'
    }
  ]
};

const Navbar = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo" onClick={() => handleNavigation('/')}>
          Paradise Nursery
        </div>
        <ul className="nav-links">
          <li>
            <span 
              className="nav-link" 
              onClick={() => handleNavigation('/')}
            >
              Home
            </span>
          </li>
          <li>
            <span 
              className="nav-link active" 
              onClick={() => handleNavigation('/products')}
            >
              Plants
            </span>
          </li>
          <li>
            <span 
              className="cart-icon" 
              onClick={() => handleNavigation('/cart')}
            >
              🛒
              {totalQuantity > 0 && (
                <span className="cart-count">{totalQuantity}</span>
              )}
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const ProductCard = ({ product, onAddToCart, isInCart }) => {
  return (
    <div className="product-card">
      <img 
        src={product.image} 
        alt={product.name}
        className="product-image"
      />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <button 
          className="add-to-cart-btn"
          onClick={() => onAddToCart(product)}
          disabled={isInCart}
        >
          {isInCart ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
  };

  const isProductInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="product-page">
      <Navbar />
      <div className="products-container">
        <h1 className="products-title">Our Plant Collection</h1>
        
        {Object.entries(products).map(([category, categoryProducts]) => (
          <div key={category} className="category-section">
            <h2 className="category-title">{category}</h2>
            <div className="products-grid">
              {categoryProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  isInCart={isProductInCart(product.id)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
