import React from "react";

function BrandList({ brands = [], addToCart }) {
  return (
    <div className="content">
      <aside className="brand-list">
        <h3 className="sidebar-title">SHOE BRANDS</h3>

        {brands.length > 0 ? (
          <ul className="brand-items">
            {brands.map((brand) => (
              <li key={brand.id} className="brand-item">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="brand-image"
                  onError={(e) => (e.target.src = "/images/placeholder.jpg")}
                />
                <h4>{brand.name}</h4>
                {brand.style && (
                  <p>
                    <strong>Style:</strong> {brand.style}
                  </p>
                )}
                {brand.size_type && (
                  <p>
                    <strong>Size:</strong> {brand.size_type}
                  </p>
                )}
                {brand.description && <p>{brand.description}</p>}

                <button
                  className="add-cart-btn"
                  onClick={() => addToCart(brand)}
                >
                  Add to Cart 🛒
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-brands">No brands found.</p>
        )}
      </aside>
    </div>
  );
}

export default BrandList;