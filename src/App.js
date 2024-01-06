import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home";
import { useAuthContext } from "./hooks/authHook";
import Products from "./pages/productsPage";
import SingleProduct from "./pages/singleProduct";
import Admin from "./pages/admin";
import Signup from "./pages/signup";
import Login from "./pages/login";
import AdminCreate from "./pages/adminCreateProduct";
import ProductDelete from "./pages/adminDeleteProduct";

export default function App() {
  const { user } = useAuthContext();
  return (
    <div>
      {/* <Context.Provider value={ab1}> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products1/:id" element={<Products />} />
          <Route path="/singleProduct/:id" element={<SingleProduct />} />
          <Route
            path="/admin"
            element={user ? <Admin /> : <Navigate to="/login" />}
          />
          <Route
            path="/adminCreate"
            element={user ? <AdminCreate /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/adminDelete/:id" element={<ProductDelete />} />
        </Routes>
      </Router>
    </div>
  );
}
