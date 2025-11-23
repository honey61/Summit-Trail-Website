import React, { useState, useEffect } from 'react';
import api from '../api';
import { useNavigate, useParams } from 'react-router-dom';
import "../Style/Admin/TrekForm.css";

export default function TrekForm({ edit }) {
  const [form, setForm] = useState({
    title: '', slug: '', description:'', region:'', difficulty:'Moderate',
    durationDays: 3, pricePerPerson: 0, bestSeason: [], image: '', featured: false
  });

  const [uploading, setUploading] = useState(false);
  const nav = useNavigate();
  const params = useParams();

  // Load trek for editing
  useEffect(() => {
    if (params.id) {
      api.get('/treks/' + params.id).then(res => setForm(res.data));
    }
  }, [params.id]);

  // Handle form submit
  async function submit(e) {
    e.preventDefault();
    if (params.id) {
      await api.put('/treks/' + params.id, form);
    } else {
      await api.post('/treks', form);
    }
    nav('/treks');
  }

  // Cloudinary Upload Handler
  async function uploadImage(e) {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const data = new FormData();
    data.append("image", file);

    try {
      const res = await api.post("/upload", data, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      setForm({ ...form, image: res.data.url }); // Save Cloudinary URL
    } catch (err) {
      console.error("Upload error:", err);
      alert("Image upload failed");
    }

    setUploading(false);
  }

  return (
    <div className="admin-page">
      <h1>{params.id ? "Edit Trek" : "New Trek"}</h1>

      <form onSubmit={submit} className="trek-form">
        
        {/* Title */}
        <input
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
          placeholder="Title"
          required
        />

        {/* Slug */}
        <input
          value={form.slug}
          onChange={e => setForm({ ...form, slug: e.target.value })}
          placeholder="Slug (unique)"
        />

        {/* Image Text Input */}
        <input
          value={form.image}
          onChange={e => setForm({ ...form, image: e.target.value })}
          placeholder="Image URL (Cloudinary or external)"
        />

        {/* Upload Button */}
        <label style={{ marginTop: "10px" }}>
          <strong>Upload Image: </strong>
          <input type="file" accept="image/*" onChange={uploadImage} />
        </label>

        {uploading && <p>Uploading image...</p>}

        {/* Show Preview */}
        {form.image && (
          <img
            src={form.image}
            alt="Preview"
            style={{ width: "200px", marginTop: "10px", borderRadius: "10px" }}
          />
        )}

        {/* Region */}
        <input
          value={form.region}
          onChange={e => setForm({ ...form, region: e.target.value })}
          placeholder="Region"
        />

        {/* Difficulty */}
        <select
          value={form.difficulty}
          onChange={e => setForm({ ...form, difficulty: e.target.value })}
        >
          <option>Easy</option>
          <option>Moderate</option>
          <option>Hard</option>
        </select>

        {/* Duration */}
        <input
          type="number"
          value={form.durationDays}
          onChange={e => setForm({ ...form, durationDays: e.target.value })}
          placeholder="Duration days"
        />

        {/* Price */}
        <input
          type="number"
          value={form.pricePerPerson}
          onChange={e => setForm({ ...form, pricePerPerson: e.target.value })}
          placeholder="Price per person"
        />

        {/* Description */}
        <textarea
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
          placeholder="Description"
        />

        {/* Featured */}
        <label>
          <input
            type="checkbox"
            checked={form.featured}
            onChange={e => setForm({ ...form, featured: e.target.checked })}
          />
          Featured
        </label>

        {/* Save */}
        <button type="submit">
          Save
        </button>
      </form>
    </div>
  );
}
