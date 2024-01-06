import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import NavBar1 from "../components/NavBar";
import Footer from "../components/footer";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };
  return (
    <>
      <NavBar1 />
      <form onSubmit={handleSubmit}>
        <div class="form">
          <div class="title">Welcome</div>
          <div class="subtitle">Let's login to your account!</div>
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
            login
          </button>
        </div>
        {error && <div className="error">{error}</div>}
      </form>
      <Footer />
    </>
  );
};

export default Login;
