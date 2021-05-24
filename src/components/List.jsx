import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Category from "./Category";

export default function List() {
  const baseUrl = "https://localhost:44329/api/category";

  const [categories, setCategory] = useState([]);

  const peticionGet = async () => {
    await axios
      .get(baseUrl)
      .then((response) => {
        setCategory(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    peticionGet();
  }, []);

  return (
    <div>
      <div>
        <div className="list-group">
          <Link to={`/`} className="list-group-item list-group-item-action ">
            Volver al inicio
          </Link>
        </div>
      </div>
      {categories.map((category) => {
        return (
          <Category
            id={category.id}
            nameCategory={category.nameCategory}
            key={category.id}
          />
        );
      })}
    </div>
  );
}
