import React, { useState, useMemo } from "react";
import productsData from "../data/products.json";
import "../styles/products.css";

export default function ProductGallery() {
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const brands = useMemo(() => {
    const s = new Set(productsData.map(p => p.brand));
    return ["", ...Array.from(s)];
  }, []);

  const colors = useMemo(() => {
    const s = new Set(productsData.map(p => p.color));
    return ["", ...Array.from(s)];
  }, []);

  const filtered = productsData.filter(p => {
    const matchesBrand = brand === "" || p.brand === brand;
    const matchesColor = color === "" || p.color === color;
    const matchesMin = minPrice === "" || p.price >= parseFloat(minPrice);
    const matchesMax = maxPrice === "" || p.price <= parseFloat(maxPrice);
    return matchesBrand && matchesColor && matchesMin && matchesMax;
  });

  const clearFilters = () => {
    setBrand("");
    setColor("");
    setMinPrice("");
    setMaxPrice("");
  };

  return (
    <div className="product-gallery">
      <div className="filters">
        <label>
          Marca
          <select value={brand} onChange={e => setBrand(e.target.value)}>
            {brands.map(b => (
              <option key={b} value={b}>{b === "" ? "Todas" : b}</option>
            ))}
          </select>
        </label>

        <label>
          Color
          <select value={color} onChange={e => setColor(e.target.value)}>
            {colors.map(c => (
              <option key={c} value={c}>{c === "" ? "Todos" : c}</option>
            ))}
          </select>
        </label>

        <label>
          Precio mínimo
          <input
            type="number"
            value={minPrice}
            onChange={e => setMinPrice(e.target.value)}
            placeholder="0"
            min="0"
          />
        </label>

        <label>
          Precio máximo
          <input
            type="number"
            value={maxPrice}
            onChange={e => setMaxPrice(e.target.value)}
            placeholder="9999"
            min="0"
          />
        </label>

        <button onClick={clearFilters}>Limpiar</button>
      </div>

      <div className="grid">
        {filtered.map(p => (
          <div className="card" key={p.id}>
            <div className="img-wrap">
              <img src={p.image} alt={p.name} className="rot-img" />
            </div>
            <h3>{p.name}</h3>
            <p className="meta">{p.brand} — {p.color}</p>
            <p className="price">${p.price.toFixed(2)}</p>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="no-results">No hay productos que coincidan con el filtro.</p>
        )}
      </div>
    </div>
  );
}
