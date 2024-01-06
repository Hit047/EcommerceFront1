import { Link } from "react-router-dom";
// import "../css1/Navbar.css";

export default function NavBar2() {
  return (
    <nav className="nav-bar1">
      <div className="logo">
        <Link to={"/"}>
          <h1 className="e1">EVision</h1>
        </Link>
      </div>
    </nav>
  );
}

// onClick={navigate("/")}
