import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink, useParams, useLocation, Link } from "react-router-dom";
// import "../css1/productss.css";
import NavBar1 from "../components/NavBar";
import Carousels from "../components/carousels";
import Footer from "../components/footer";

export default function SingleProduct() {
  const [post, setPost] = useState([]);
  const [error, setError] = useState("");
  const params = useParams();
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setError("");

        // Check if id is defined and not an empty string before making the request
        if (!id && id !== "") {
          console.error("Product ID is missing");
          return;
        }

        const apiUrl = `http://localhost:3500/api/products1/${id}`;

        const res = await fetch(apiUrl);
        if (!res.ok)
          throw new Error("Something went wrong with fetching Products");

        const data = await res.json();
        if (data.Response === "False") throw new Error("Product not found");

        setPost(data);
        setError("");
      } catch (err) {
        if (err.name !== "AbortError") {
          console.log(err.message);
          setError(err.message);
        }
      }
    };

    // Check if id is defined before calling fetchProduct
    if (id) {
      fetchProduct();
    } else {
      console.error("Product ID is initially undefined");
    }
  }, [id]);

  return (
    <>
      <NavBar1 />
      <ul className="list5">
        <li className="cards__item1">
          <div className="card">
            <div class="card__image ">
              <img
                src={`http://localhost:3500/images/${post.image}`}
                alt={`${post.title} poster`}
              />
            </div>
            <div class="card__content">
              <div class="card__title">{post.title}</div>
              {/* <h2>{post.title}</h2> */}
              <p class="card__text">{post.description}</p>
              <div className="pri">{post.price}$</div>
              <div class="card__title"></div>
              {/* <h3>{post.description}</h3> */}
              {/* <h3>{post.price}</h3> */}
            </div>
          </div>
        </li>
      </ul>
      {/* <Carousels /> */}
      <Footer />
    </>
  );
}
