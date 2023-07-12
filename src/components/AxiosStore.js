import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const AxiosStore = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((resp) => {
        setProducts(resp.data);
        console.log(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>Product Store</h1>
      <div className="row head">
        <p>Product ID</p>
        <p>Title</p>
        <p>Image</p>
        <p>Decription</p>
        <p>Price</p>
      </div>
      {products.map((product, index) => {
        return (
          index < 10 && (
            <div className="column" key={product.id}>
              <div className="row">
                <p className="center">{product.id}</p>
                <p>
                  <strong>{product.title}</strong>
                </p>
                <p className="center">
                  <img src={product.image} alt="" />
                </p>
                <p style={{ textAlign: "justify" }}>{product.description}</p>
                <p className="price">${product.price}</p>
              </div>
            </div>
          )
        );
      })}
      <div>
        <Link className="prev" to={"/photo"}>
          Prev
        </Link>
      </div>
    </div>
  );
};
