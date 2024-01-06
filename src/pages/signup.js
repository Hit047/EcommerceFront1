import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import NavBar1 from "../components/NavBar";
import Footer from "../components/footer";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);
  };
  return (
    <>
      <NavBar1 />
      <form onSubmit={handleSubmit}>
        <div class="form">
          <div class="title">Welcome</div>
          <div class="subtitle">Let's create your account!</div>
          <div class="input-container ic1">
            <input
              id="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              class="input"
              placeholder="email"
            />
          </div>

          <div class="input-container ic2">
            <input
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              class="input"
              placeholder="password"
            />
          </div>
          <button type="text" class="submit" disabled={isLoading}>
            signup
          </button>
        </div>
        {error && <div className="input">{error}</div>}
      </form>
      <Footer />
    </>
  );
};

export default Signup;
