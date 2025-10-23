import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Header({ cartCount, onCartClick }) {
  return (
    <header className="header">
      <div className="header-left">
        <h1>FootPrint Alabi</h1>
        <p>Specialized footwear for all sizes.</p>
      </div>

      <nav className="nav-links">
        <NavLink exact="true" to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/add" className="nav-link">
          Add Brand
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
      </nav>

      <button className="cart-button" onClick={onCartClick}>
        <FaShoppingCart size={20} />
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </button>
    </header>
  );
}

export default Header;