import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink, useParams, useLocation, Link } from "react-router-dom";
import "../css1/productss.css";
import NavBar1 from "../components/NavBar";
import Footer from "../components/footer";

export default function Products({ props, match }) {
  const [post, setPost] = useState([]);
  const [product, setProduct] = useState([]);
  const [error, setError] = useState("");
  const params = useParams();
  const { id } = useParams();
  const location = useLocation();
  // console.log(post);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const { product1 } = location.state || {};

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
        setProduct(data);
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
  // let productData = null;
  // if (params.id === "143") {
  //   productData = {
  //     name: "jack",
  //   };
  // }
  function Ap() {
    if (params.id === "1")
      return (
        <ul className="list1">
          {location.state.data.map((post, index) => (
            // <div className="box11" key={index}>
            <li className="cards__item" key={index}>
              <div className="card">
                <div class="card__image ">
                  <img
                    src={`http://localhost:3500/images/${post.image}`}
                    alt={`${post.Title} poster`}
                  />
                </div>
                <div class="card__content">
                  <div class="card__title">{post.title}</div>
                  {/* <h2>{post.title}</h2> */}
                  <p class="card__text">{post.description}</p>
                  <div className="pri">{post.price}$</div>
                  {/* <h3>{post.description}</h3> */}
                  {/* <h3>{post.price}</h3> */}
                </div>
              </div>
            </li>
            // </div>
          ))}
        </ul>
      );
  }

  function Oc1() {
    if (params.id === "2")
      return (
        <ul className="list1">
          {location.state.categ1.map((post, index) => (
            // <div className="box11" key={index}>
            <li className="cards__item" key={index}>
              <div className="card">
                <div class="card__image ">
                  <img
                    src={`http://localhost:3500/images/${post.image}`}
                    alt={`${post.Title} poster`}
                  />
                </div>
                <div class="card__content">
                  <div class="card__title">{post.title}</div>
                  {/* <h2>{post.title}</h2> */}
                  <p class="card__text">{post.description}</p>
                  <div className="pri">{post.price}$</div>
                  {/* <h3>{post.description}</h3> */}
                  {/* <h3>{post.price}</h3> */}
                </div>
              </div>
            </li>
            // </div>
          ))}
        </ul>
      );
  }

  function Oc2() {
    if (params.id === "3")
      return (
        <ul className="list1">
          {location.state.categ2.map((post, index) => (
            // <div className="box11" key={index}>
            <li className="cards__item" key={index}>
              <div className="card">
                <div class="card__image ">
                  <img
                    src={`http://localhost:3500/images/${post.image}`}
                    alt={`${post.Title} poster`}
                  />
                </div>
                <div class="card__content">
                  <div class="card__title">{post.title}</div>
                  {/* <h2>{post.title}</h2> */}
                  <p class="card__text">{post.description}</p>
                  <div className="pri">{post.price}$</div>
                  {/* <h3>{post.description}</h3> */}
                  {/* <h3>{post.price}</h3> */}
                </div>
              </div>
            </li>
            // </div>
          ))}
        </ul>
      );
  }

  function Oc3() {
    if (params.id === "4")
      return (
        <ul className="list1">
          {location.state.categ3.map((post, index) => (
            // <div className="box11" key={index}>
            <li className="cards__item" key={index}>
              <div className="card">
                <div class="card__image ">
                  <img
                    src={`http://localhost:3500/images/${post.image}`}
                    alt={`${post.Title} poster`}
                  />
                </div>
                <div class="card__content">
                  <div class="card__title">{post.title}</div>
                  {/* <h2>{post.title}</h2> */}
                  <p class="card__text">{post.description}</p>
                  <div className="pri">{post.price}$</div>
                  {/* <h3>{post.description}</h3> */}
                  {/* <h3>{post.price}</h3> */}
                </div>
              </div>
            </li>
            // </div>
          ))}
        </ul>
      );
  }

  function Oc5() {
    if (params.id === "8")
      return (
        <ul className="list1">
          {location.state.product.map((post, index) => (
            // <div className="box11" key={index}>
            <li className="cards__item" key={index}>
              <div className="card">
                <div class="card__image ">
                  <img
                    src={`http://localhost:3500/images/${post.image}`}
                    alt={`${post.Title} poster`}
                  />
                </div>
                <div class="card__content">
                  <div class="card__title">{post.title}</div>
                  {/* <h2>{post.title}</h2> */}
                  <p class="card__text">{post.description}</p>
                  <div className="pri">{post.price}$</div>
                  {/* <h3>{post.description}</h3> */}
                  {/* <h3>{post.price}</h3> */}
                </div>
              </div>
            </li>
            // </div>
          ))}
        </ul>
      );
  }

  return (
    <>
      <NavBar1 />

      <Ap />
      <Oc1 />
      <Oc2 />
      <Oc3 />
      <Oc5 />

      <Footer />
    </>
  );
}
