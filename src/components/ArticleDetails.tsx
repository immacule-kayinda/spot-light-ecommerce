import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Products } from "./ArticleList";
import useCard from "../hooks/useCard";
import { CardType } from "../types";

export default function ArticleDetails() {
  const [data, setData] = useState<Products>();
  const [card, setCard] = useCard();
  const [count, setCount] = useState(0);
  const { articleId } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:3000/products/" + articleId)
      .then((response) => setData(response.data));
  });

  const handleBuyProduct = () => {
    console.log("buyProduct");
    const product: CardType = {
      product: data,
      quantity: count,
    };
    if (count === 0) {
      alert("Please select a quantity");
      return;
    }
    // verifier si le produit existe deja avant de l'ajouter sinon ajouter le compte total mais en envoyant un popup au user
    if (card.find((c) => c.product?.id === data?.id)) {
      const confirmAddProductToCount = confirm(
        "Are you sure you want to add " +
          count +
          " of " +
          data?.title +
          " to card ?"
      );

      if (confirmAddProductToCount) {
        const newCard = [...card];
        const index = newCard.findIndex((c) => c.product?.id === data?.id);
        newCard[index].quantity += count;
        setCard(newCard);
        setCount(0);
      }
      return;
    }
    setCard([...card, product]);
    setCount(0);
  };

  return (
    <div className="flex gap-2">
      <div className="flex flex-col gap-2 w-full">
        <img src={data?.images[0]} alt="product image" />
        <img src={data?.images[1]} alt="image de produit" />
      </div>
      <div className="w-4/6">
        <h1 className="text-4xl">{data?.title}</h1>
        <p>{data?.regularPrice}</p>
        <div className="border border-black rounded-lg w-fit">
          <button
            className="bg-transparent border-none"
            onClick={() => setCount(Math.max(0, count - 1))}
          >
            -
          </button>{" "}
          {count}{" "}
          <button
            className="bg-transparent border-none"
            onClick={() => setCount(Math.max(count + 1))}
          >
            +
          </button>
        </div>
        <button
          onClick={handleBuyProduct}
          className="w-full rounded-md text-white bg-yellow-500 border-none"
        >
          Ajouter au panier
        </button>
        <p>
          This is a demonstration store. You can purchase product like this from{" "}
          <a>Coursework</a>
        </p>
        <ul>
          {data?.properties.map((prop, index) => {
            return <li key={index}>{prop}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
