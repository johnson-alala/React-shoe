import React from "react";

function ShoeList({ shoes = [] }) {
  return (
    <section className="shoe-list">
      <h2 className="shoe-list-title">Available Shoes</h2>

      {shoes.length > 0 ? (
        <div className="shoe-grid">
          {shoes.map((shoe) => (
            <div key={shoe.id} className="shoe-card">
              <img src={shoe.image} alt={shoe.name} className="shoe-image" />
              <div className="shoe-info">
                <h3>{shoe.name}</h3>
                <p>{shoe.description}</p>
                <p>
                  <strong>Style:</strong> {shoe.style}
                </p>
                <p>
                  <strong>Size Type:</strong> {shoe.size_type}
                </p>
                <button className="details-btn">View Details</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-shoes">No shoes available yet.</p>
      )}
    </section>
  );
}

export default ShoeList;