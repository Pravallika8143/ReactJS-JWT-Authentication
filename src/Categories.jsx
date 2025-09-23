import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Categories() {
  let [categories, setCategories] = useState([]);
  useEffect(() => {
    document.title = "Categories";
  }, []);
  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      .then((data) => setCategories([...data]));
  }, []);
  return (
    <div class="categories">
      <ul>
        {categories?.map((cat) => {
          return (
            <li>
              <Link to={`/category/${cat.slug}`}>{cat.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;