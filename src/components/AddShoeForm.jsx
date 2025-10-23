import React, { useState } from "react";

function AddShoeForm({ addShoe }) {
  const [formData, setFormData] = useState({
    name: "",
    style: "",
    size_type: "",
    description: "",
    image: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3000/shoes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        addShoe(data); 
        setFormData({
          name: "",
          style: "",
          size_type: "",
          description: "",
          image: "",
        });
      });
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h2>Add a New Shoe</h2>
      <input
        name="name"
        placeholder="Shoe Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        name="style"
        placeholder="Style"
        value={formData.style}
        onChange={handleChange}
      />
      <input
        name="size_type"
        placeholder="Size Type"
        value={formData.size_type}
        onChange={handleChange}
      />
      <input
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />
      <button type="submit">Add Shoe</button>
    </form>
  );
}

export default AddShoeForm;