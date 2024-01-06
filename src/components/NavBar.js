import { useState } from "react";
import { useEffect } from "react";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/authHook";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import "../css1/Navbar.css";

export default function NavBar1() {
  const [movies, setMovies] = useState("");
  const [filteredWord, setFilteredWord] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(
          `http://localhost:3500/api/products1/?s=${movies}`
        );

        if (!res.ok)
          throw new Error("Something went wrong with fetching movies");

        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found");

        setFilteredWord(data);
        setError("");
      } catch (err) {
        if (err.name !== "AbortError") {
          console.log(err.message);
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (!movies.length) {
      setFilteredWord("");
      setError("");
      return;
    }

    fetchMovies();
  }, [movies]);

  return (
    <>
      <Eve
        movies={movies}
        setMovies={setMovies}
        filteredWord={filteredWord}
        setFilteredWord={setFilteredWord}
        isLoading={isLoading}
      />
    </>
  );
}

function Eve({ movies, setMovies, filteredWord, setFilteredWord, isLoading }) {
  return (
    <>
      <NavBar
        movies={movies}
        setMovies={setMovies}
        filteredWord={filteredWord}
        setFilteredWord={setFilteredWord}
      ></NavBar>

      <All>
        <ListBox
          movies={movies}
          filteredWord={filteredWord}
          setFilteredWord={setFilteredWord}
        >
          {isLoading ? (
            <Loader />
          ) : (
            <MovieList
              movies={movies}
              filteredWord={filteredWord}
              setFilteredWord={setFilteredWord}
            />
          )}
        </ListBox>
      </All>
    </>
  );
}

function NavBar({
  children,
  filteredWord,
  setFilteredWord,
  movies,
  setMovies,
}) {
  return (
    <nav className="nav-bar">
      {" "}
      <Logo />
      <Search setMovies={setMovies} />
      <Results movies={movies} />
    </nav>
  );
}

function Logo({ children, filteredWord, setFilteredWord, movies }) {
  return (
    <div className="logo">
      <Link to={"/"}>
        <h1 className="e1">EVision</h1>
      </Link>
    </div>
  );
}

function Search({ movies, setMovies, filteredWord, setFilteredWord }) {
  return (
    <div>
      <br />
      <input
        className="search"
        onChange={(e) => setMovies(e.target.value)}
        placeholder="Search for a movie"
      />

      <br />
    </div>
  );
}

function Results({ movies, filteredWord, setFilteredWord }) {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleClick1 = () => {
    logout();
  };
  return (
    <div className="z1">
      {user && (
        <div>
          {/* <span className="logos">{user.email}</span>
          <br></br> */}
          <button className="logos" onClick={handleClick1}>
            Log out
          </button>
          <Link className="logos5" to={"/admin"}>
            Admin
          </Link>
        </div>
      )}
      {!user && (
        <div className="z1">
          <Link className="logos" to={"/login"}>
            Login
          </Link>
          <div className="z1">
            <Link className="logos" to={"/signup"}>
              Signup
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

function Loader({ movies, filteredWord, setFilteredWord }) {
  return <p className="loader">Loading...</p>;
}

function All({ children, movies, filteredWord, setFilteredWord }) {
  return <main className="main">{children}</main>;
}

function ListBox({ children, movies, filteredWord, setFilteredWord }) {
  const [isOpen1, setIsOpen1] = useState(true);
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && children}
    </div>
  );
}

function MovieList({ movies, filteredWord, setFilteredWord }) {
  return (
    <div className="list">
      {/* //Here we created a new component and called it in here so that when we map over the movies we get one movie only */}
      <ul>
        {filteredWord &&
          filteredWord
            .filter((post) => {
              if (movies === "") {
                return post;
              } else if (
                post.title.toLowerCase().includes(movies.toLowerCase())
              ) {
                return post;
              }
            })
            .map((post, index) => <Movie post={post} key={post.title} />)}
      </ul>
    </div>
  );
}

function Movie({ movie, filteredWord, setFilteredWord, post }) {
  const [error, setError] = useState(null);
  return (
    <div>
      <li className="cards__item3">
        <div className="card">
          <div class="card__image ">
            <Link to={`singleProduct/${post._id}`}>
              <img
                src={`http://localhost:3500/images/${post.image}`}
                alt={`${post.Title} poster`}
              />
            </Link>
          </div>
          <div class="card__content">
            <div class="card__title">{post.title}</div>
            <p class="card__text">{post.description}</p>
            <div className="pri">{post.price}$</div>
          </div>
        </div>
      </li>
    </div>
  );
}
