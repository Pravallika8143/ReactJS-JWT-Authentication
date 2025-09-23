import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CategoryProducts() {
  var { cslug } = useParams();
  var [products, setProducts] = useState([]);
  React.useEffect(() => {
    document.title = `${cslug} Category Products`
  });
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${cslug}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts([...data.products]);
      });
  }, [cslug]);
  return (
    <div>
      <h1>CategoryProducts</h1>
      <ul style={{textDecoration:"none", listStyle:"none"}}>
        {products.map((pr) => {
          return <li>{pr.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default CategoryProducts;