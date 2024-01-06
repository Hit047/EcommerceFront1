import { useState, useEffect } from "react";
import { Link, BrowserRouter, useHref } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../css1/category1.css";

export default function Categories(props) {
  const [data, setData] = useState({ data: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  const [product, setProduct] = useState([]);
  const [error, setError] = useState("");
  const [categ1, setCateg1] = useState([]);
  const [categ2, setCateg2] = useState([]);
  const [categ3, setCateg3] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setError("");
        const res = await fetch(`http://localhost:3500/api/products1`);
        if (!res.ok)
          throw new Error("Something went wrong with fetching Products");

        const data = await res.json();
        if (data.Response === "False") throw new Error("Product not found");
        // console.log(data);
        setProduct(data);
        setData(data);
        setError("");
      } catch (err) {
        if (err.name !== "AbortError") {
          console.log(err.message);
          setError(err.message);
        }
      }
    }

    fetchProduct();
  }, []);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setError("");
        const res = await fetch(
          `http://localhost:3500/api/products1?categories=656b38e64cf7038692f4d6d5`
        );
        if (!res.ok)
          throw new Error("Something went wrong with fetching Products");

        const data = await res.json();
        if (data.Response === "False") throw new Error("Product not found");
        setCateg1(data);
        setError("");
      } catch (err) {
        if (err.name !== "AbortError") {
          console.log(err.message);
          setCateg1(null);
          setError(err.message);
        }
      }
    }

    fetchProduct();
  }, []);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setError("");
        const res = await fetch(
          `http://localhost:3500/api/products1?categories=65730d95395b277154efad05`
        );
        if (!res.ok)
          throw new Error("Something went wrong with fetching Products");
        const data = await res.json();
        if (data.Response === "False") throw new Error("Product not found");
        setCateg2(data);
        setError("");
      } catch (err) {
        if (err.name !== "AbortError") {
          console.log(err.message);
          setCateg2(null);
          setError(err.message);
        }
      }
    }

    fetchProduct();
  }, []);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setError("");
        const res = await fetch(
          `http://localhost:3500/api/products1?categories=657ce2e152e22ecb93863bb8`
        );
        if (!res.ok)
          throw new Error("Something went wrong with fetching Products");

        const data = await res.json();
        if (data.Response === "False") throw new Error("Product not found");

        // const blob = await res.blob();
        // const dataUrl = URL.createObjectURL(blob);
        // console.log(data);
        setCateg3(data);
        setError("");
      } catch (err) {
        if (err.name !== "AbortError") {
          console.log(err.message);
          setCateg3(null);
          setError(err.message);
        }
      }
    }

    fetchProduct();
  }, []);

  // console.log(categ3);

  return (
    <div>
      <All2
        data={data}
        setData={setData}
        product={product}
        setProduct={setProduct}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        err={err}
        setErr={setErr}
        categ1={categ1}
        setCateg1={setCateg1}
        categ2={categ2}
        setCateg2={setCateg2}
        categ3={categ3}
        setCateg3={setCateg3}
      />
      {/* <Oc2 categ2={categ2} setCateg2={setCateg2} product={product} /> */}
    </div>
  );
}

function All2({
  data,
  setData,
  product,
  setProduct,
  isLoading,
  setIsLoading,
  err,
  setErr,
  categ1,
  setCateg1,
  categ2,
  setCateg2,
  categ3,
  setCateg3,
}) {
  return (
    <>
      <Cat1
        data={data}
        setData={setData}
        product={product}
        setProduct={setProduct}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        err={err}
        setErr={setErr}
        categ1={categ1}
        setCateg1={setCateg1}
        categ2={categ2}
        setCateg2={setCateg2}
        categ3={categ3}
        setCateg3={setCateg3}
      />
    </>
  );
}

function Cat1({
  data,
  setData,
  product,
  setProduct,
  isLoading,
  setIsLoading,
  err,
  setErr,
  categ1,
  setCateg1,
  categ2,
  setCateg2,
  categ3,
  setCateg3,
}) {
  const navigate = useNavigate();
  return (
    <div className="wrapper">
      <div className="parent">
        <div className="child bg-one">
          <div
            class="m1"
            onClick={() => {
              navigate(`/products1/${2}`, { state: { categ1 } });
            }}
          >
            Monitors
          </div>
        </div>
      </div>

      <div className="parent">
        <div className="child bg-two">
          <div
            class="m1"
            onClick={() => {
              navigate(`/products1/${3}`, { state: { categ2 } });
            }}
          >
            Graphic-Cards
          </div>
        </div>
      </div>

      <div className="parent">
        <div className="child bg-three">
          <div
            class="m1"
            onClick={() => {
              navigate(`/products1/${4}`, { state: { categ3 } });
            }}
          >
            Cpus
          </div>
        </div>
      </div>
      <div className="parent">
        <div className="child bg-four">
          <div
            class="m1"
            onClick={() => {
              navigate(`/products1/${1}`, { state: { data } });
            }}
          >
            Accessories
          </div>
        </div>
      </div>

      {/* <a href="/products/143" onClick={onClickHandler}>
        Fetch dataaaaaaaaa
      </a> */}

      {/* <Link to="/" onClick={onClickHandler}>
        {" "}
        meee
      </Link> */}
    </div>
  );
}
