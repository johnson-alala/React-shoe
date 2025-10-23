import React from "react";

function CartPage({ cart, removeFromCart }) {
  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>No items in your cart yet.</p>
      ) : (
        <ul className="cart-list">
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-info">
                <h4>{item.name}</h4>
                {item.style && <p>Style: {item.style}</p>}
                {item.size_type && <p>Size: {item.size_type}</p>}
              </div>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove ❌
              </button>
            </li>
          ))}
               <button
              className="buy-btn"
              onClick={() => alert(`Thank you for your purchase of ${cart.length} items!`)}
              >Buy 
              </button>
        </ul>
      )}
    </div>
  );
}

export default CartPage;