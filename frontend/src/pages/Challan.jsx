import React, { useState } from 'react';
import axios from 'axios';

const Challan = () => {
  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    course: '',
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/challan/generate', formData);
      alert('✅ Challan generated successfully!');
    } catch (err) {
      alert('❌ Error generating challan');
      console.error(err);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded">
      <h2 className="text-xl font-semibold mb-4">Generate Challan</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Name" onChange={handleChange} className="border p-2 w-full" required />
        <input type="text" name="rollNumber" placeholder="Roll Number" onChange={handleChange} className="border p-2 w-full" required />
        <input type="text" name="course" placeholder="Course" onChange={handleChange} className="border p-2 w-full" required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Generate Challan
        </button>
      </form>
    </div>
  );
};

export default Challan;
