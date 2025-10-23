import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import BrandFilter from "./components/BrandFilter";
import BrandList from "./components/BrandList";
import About from "./components/About";
import AddShoeForm from "./components/AddShoeForm";
import CartPage from "./components/CartPage";
import "./App.css";

function App() {
  const [shoes, setShoes] = useState([]);
  const [filteredShoes, setFilteredShoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]); 
  const navigate = useNavigate();

  
  useEffect(() => {
    fetch("http://localhost:3005/shoes")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch shoes");
        }
        return res.json();
      })
      .then((data) => {
        setShoes(data);
        setFilteredShoes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching shoes:", err);
        setLoading(false);
      });
  }, []);

  function handleFilter(filterText) {
    const filtered = shoes.filter((shoe) =>
      [shoe.name, shoe.style, shoe.size_type]
        .join(" ")
        .toLowerCase()
        .includes(filterText.toLowerCase())
    );
    setFilteredShoes(filtered);
  }

  function handleAddShoe(newShoe) {
    setShoes((prev) => [...prev, newShoe]);
    setFilteredShoes((prev) => [...prev, newShoe]);
  }

  function addToCart(shoe) {
    setCart((prevCart) => [...prevCart, shoe]);
  }

  function removeFromCart(id) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }

  function goToCart() {
    navigate("/cart");
  }

  return (
    <div className="App">
      <Header cartCount={cart.length} onCartClick={goToCart} />

      <Routes>
        <Route
          path="/"
          element={
            loading ? (
              <p className="loading">Loading shoes...</p>
            ) : (
              <>
                <BrandFilter onFilter={handleFilter} />
                <BrandList brands={filteredShoes} addToCart={addToCart} />
              </>
            )
          }
        />

        <Route path="/add" element={<AddShoeForm addShoe={handleAddShoe} />} />

        <Route path="/about" element={<About />} />

        <Route
          path="/cart"
          element={<CartPage cart={cart} removeFromCart={removeFromCart} />}
        />
      </Routes>
    </div>
  );
}

export default App;
