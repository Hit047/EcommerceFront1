import React from "react";
import NavBar1 from "../components/NavBar";
import Categories from "../components/categoryNav";
import Carousels from "../components/carousels";
import Footer from "../components/footer";
export default function Home(props) {
  return (
    <div>
      <NavBar1 />
      <Im1 />
      <Categories />
      <Carousels />
      <Footer />
    </div>
  );
}

function Im1() {
  return (
    <div className="container0">
      <img src="./d1.jpg" alt="myimage" className="imm1" />
    </div>
  );
}
