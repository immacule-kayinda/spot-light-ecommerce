import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Products } from "./ArticleList";

export default function ArticleDetails() {
  const [data, setData] = useState<Products>();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:3000/products/" + id)
      .then((response) => setData(response.data));
  });
  return <div>Bonsoir</div>;
}
