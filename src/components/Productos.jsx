import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { peticionGet } from "../axios/getProducts";
import Card from "../components/Card";

export default function Productos() {
  const baseUrl = "https://localhost:44329/api/product";

  const {id}=useParams()
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  const peticionGet = async () => {
    await axios
      .get( `${baseUrl}/${id}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    peticionGet();
  }, [id]);

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
