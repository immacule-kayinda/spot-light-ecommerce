import axios from "axios";
import { useEffect, useState } from "react";
import ArticleListItem from "./ArticleListItem";
import { Link } from "react-router-dom";

export interface Products {
  regularPrice: string;
  properties: string[];
  title: string;
  id: string;
  images: string[];
}

export default function ArticleList() {
  const [products, setProducts] = useState<Products[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  });
  return (
    <div className="grid gap-x-5 gap-y-10  md:grid-cols-4">
      {products.map((product) => (
        <Link to={"/articles/" + product.id}>
          <ArticleListItem
            key={product.id}
            image={product.images[0]}
            title={product.title}
            regularPrice={product.regularPrice}
          />
        </Link>
      ))}
    </div>
  );
}
