import axios from "axios";
import React, { useState, useEffect } from "react";
import { peticionGet } from "../axios/getProducts";
import Card from "../components/Card";

export default function Home() {
  const baseUrl = "https://localhost:44329/api/product";

  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  const peticionGet = async () => {
    await axios
      .get(baseUrl)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    peticionGet();
  }, []);

  return (
    <div className="row justify-content-center">
      {products.map((product) => {
        return (
          <Card
            image={product.image}
            nameProduct={product.nameProduct}
            price={product.price}
          />
        );
      })}
    </div>
  );
}
