import { useState, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, EffectCoverflow } from "swiper/modules";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "../css1/carousel.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Carousels() {
  const [data, setData] = useState({ data: [] });
  const [product, setProduct] = useState([]);
  const [error, setError] = useState("");
  const [selectedObject, setSelectedObject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const navigate1 = useNavigate();
  const indexToSelect = 1;

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
        console.log(data);
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

  return (
    <div>
      <Imagess
        product={product}
        setProduct={setProduct}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <Arrow />
    </div>
  );
}

function Imagess({ product, setProduct, currentIndex, setCurrentIndex }) {
  const navigate2 = useNavigate();

  const handleNavigate = (index) => {
    if (index >= 0 && index < product.length) {
      const nextProduct = product[index];

      setCurrentIndex(index);
      navigate2(`/singleProduct/${nextProduct._id}`);
    }
  };
  return (
    <div className="container">
      <h1 className="heading">Top Sellers</h1>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        direction={"horizontal"}
        slidesPerView={"auto"}
        spaceBetween={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        className="swiper_container"
      >
        {product.map((products, index) => (
          <SwiperSlide>
            <div key={products._id}>
              <Link to={`singleProduct/${products._id}`}>
                <img
                  src={`http://localhost:3500/images/${products.image}`}
                  alt={` ${index + 1}`}
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function Arrow() {
  return (
    <div className="container2">
      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>

        <div className="swiper-button-next slider-arrow">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
}
