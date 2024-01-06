import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminCreate() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const confirm = window.confirm("Do you want to Add?");

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("price", formData.price);
    data.append("category", formData.category);
    data.append("image", formData.image);

    if (confirm) {
      try {
        const response = await axios.post(
          "http://localhost:3500/api/products1",
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log("Response:", response.data);
        alert("Record Added");
        navigate("/admin");
      } catch (error) {
        console.error("Error:", error.response.data);
      }
    }
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">title:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="email">description:</label>
            <input
              type="text"
              name="email"
              className="form-control"
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="name">price:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="name">Image:</label>
            <input type="file" name="image" onChange={handleImageChange} />
          </div>
          <div>
            <label htmlFor="name">Category:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            />
          </div>
          <br />
          <button className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  );
}
