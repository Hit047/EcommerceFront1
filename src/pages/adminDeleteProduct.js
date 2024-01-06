import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/footer";
import "../css1/adminDelete.css";
export default function ProductDelete({ productId }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [productData, setProductData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    // You may want to handle image separately based on your backend response
    image: "", // or set it based on productData.image
  });

  useEffect(() => {
    // Fetch product data based on productId
    const fetchProductData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3500/api/products1/${id}`
        );
        const fetchedProductData = response.data;

        setProductData({
          title: fetchedProductData.title,
          description: fetchedProductData.description,
          price: fetchedProductData.price,
          category: fetchedProductData.category,
          // You may want to handle image separately based on your backend response
          image: fetchedProductData.image, // or set it based on fetchedProductData.image
        });
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, [id]);

  const handleDelete = async () => {
    const confirm = window.confirm("Do you want to Delete?");
    if (confirm) {
      try {
        const response = await axios.delete(
          `http://localhost:3500/api/products1/${id}`
        );
        console.log("Product deleted:", response.data);
        alert("Record Deleted");
        navigate("/admin");
        // You may want to navigate to another page or update state after successful deletion
      } catch (error) {
        console.error("Error deleting product:", error.response.data);
      }
    }
  };

  return (
    <>
      <ul className="list5">
        <li className="cards__item1">
          <div className="card">
            <div class="card__image "></div>
            <div>
              <h2>Delete Product</h2>
              <p>Are you sure you want to delete the following product?</p>
              <p>Title: {productData.title}</p>
              <p>Description: {productData.description}</p>
              <p>Price: {productData.price}</p>
              <p>Category: {productData.category}</p>
              {/* Display or handle image based on your needs */}
              <img
                src={`http://localhost:3500/images/${productData.image}`}
                alt={`${productData.title} poster`}
              />
            </div>
          </div>
        </li>
      </ul>
      <div className="button-30">
        <button onClick={handleDelete}>Delete Product</button>
      </div>
      <Footer />
    </>
  );
}
