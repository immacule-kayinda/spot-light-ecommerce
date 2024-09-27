import { Products } from "./components/ArticleList";

export type CardType = {
  product?: Products;
  quantity: number;
};

export type SetCardContext = [
  CardType[],
  React.Dispatch<React.SetStateAction<CardType[]>>
];
