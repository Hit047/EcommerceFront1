import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Footer from "../components/footer";
import NavBar2 from "../components/adminNav";
import "../css1/adminDelete.css";
export default function Admin() {
  const { productId } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3500/api/products1")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
    // console.log(data);
  }, []);
  console.log(data);
  return (
    <div className="container4">
      <NavBar2 />
      <div>
        <h2>Products Page</h2>
        <Link to="/adminCreate" className="btn btn-success my-3">
          Create +
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>

              <th>Price</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{d._id}</td>
                <td>{d.title}</td>
                <td>{d.description}</td>
                <td>{d.price}</td>
                <td>{d.image}</td>
                <td>
                  <Link
                    className="text-decoration-none btn btn-sm btn-success myy"
                    to={`/adminDelete/${d._id}`}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );

  function handleDelete(id) {
    const confirm = window.confirm("Do you like to Delete?");
    if (confirm) {
      axios.delete("http://localhost:3030/users/" + id).then((res) => {
        alert("Record Deleted");
        navigate("/");
      });
    }
  }
}
