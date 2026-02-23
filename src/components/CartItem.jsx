import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeItem, updateQuantity } from '../store/CartSlice';
import './App.css';

const CartItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  // ✅ Required function name
  const handleIncrement = (id) => {
    dispatch(updateQuantity({ id, amount: 1 }));
  };

  // ✅ Required function name
  const handleDecrement = (id) => {
    dispatch(updateQuantity({ id, amount: -1 }));
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleContinueShopping = () => {
    navigate('/products');
  };

  const handleCheckout = () => {
    alert('Checkout feature coming soon!');
  };

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div>
          <p>Your cart is empty</p>
          <button onClick={handleContinueShopping}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                width="100"
              />

              {/* Name & Price */}
              <h3>{item.name}</h3>
              <p>Unit Price: ${item.price}</p>

              {/* Quantity Controls */}
              <button onClick={() => handleDecrement(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleIncrement(item.id)}>+</button>

              {/* Total Per Item */}
              <p>Total: ${item.quantity * item.price}</p>

              {/* Delete Button */}
              <button onClick={() => handleRemove(item.id)}>
                Delete
              </button>

            </div>
          ))}

          {/* Total Cart Amount */}
          <h2>Total Amount: ${totalPrice}</h2>
          <p>Total Items: {totalQuantity}</p>

          {/* Buttons */}
          <button onClick={handleContinueShopping}>
            Continue Shopping
          </button>

          <button onClick={handleCheckout}>
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default CartItem;
