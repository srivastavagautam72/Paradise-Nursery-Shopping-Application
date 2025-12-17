import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeItemFromCart, increaseQuantity, decreaseQuantity } from '../store/CartSlice';
import './App.css';

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
              className="nav-link" 
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

const CartItemComponent = ({ item, onRemove, onIncrease, onDecrease }) => {
  return (
    <div className="cart-item">
      <img 
        src={item.image} 
        alt={item.name}
        className="cart-item-image"
      />
      <div className="cart-item-info">
        <h3 className="cart-item-name">{item.name}</h3>
        <p className="cart-item-price">${item.price.toFixed(2)} each</p>
      </div>
      <div className="quantity-controls">
        <button 
          className="quantity-btn"
          onClick={() => onDecrease(item.id)}
        >
          -
        </button>
        <span className="quantity">{item.quantity}</span>
        <button 
          className="quantity-btn"
          onClick={() => onIncrease(item.id)}
        >
          +
        </button>
      </div>
      <div className="cart-item-total">
        <p className="cart-item-price">${item.totalPrice.toFixed(2)}</p>
        <button 
          className="remove-btn"
          onClick={() => onRemove(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

const CartItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const totalPrice = useSelector(state => state.cart.totalPrice);

  const handleRemoveItem = (itemId) => {
    dispatch(removeItemFromCart(itemId));
  };

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity(itemId));
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseQuantity(itemId));
  };

  const handleContinueShopping = () => {
    navigate('/products');
  };

  const handleCheckout = () => {
    alert('Checkout feature coming soon!');
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <Navbar />
        <div className="cart-container">
          <h1 className="cart-title">Shopping Cart</h1>
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <p className="empty-cart-text">Your cart is empty</p>
            <button 
              className="continue-shopping-btn"
              onClick={handleContinueShopping}
            >
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <Navbar />
      <div className="cart-container">
        <h1 className="cart-title">Shopping Cart</h1>
        
        {cartItems.map((item) => (
          <CartItemComponent
            key={item.id}
            item={item}
            onRemove={handleRemoveItem}
            onIncrease={handleIncreaseQuantity}
            onDecrease={handleDecreaseQuantity}
          />
        ))}
        
        <div className="cart-total">
          <div className="total-amount">
            Total: ${totalPrice.toFixed(2)} ({totalQuantity} items)
          </div>
          <div className="cart-actions">
            <button 
              className="continue-shopping-btn"
              onClick={handleContinueShopping}
            >
              Continue Shopping
            </button>
            <button 
              className="checkout-btn"
              onClick={handleCheckout}
            >
              Checkout - Coming Soon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
