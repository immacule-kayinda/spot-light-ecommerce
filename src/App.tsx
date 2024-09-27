import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";
import { CardType, SetCardContext } from "./types";

function App() {
  const [card, setCard] = useState<CardType[]>([]);
  return (
    <div className="w-8/12 m-auto">
      <Header cardCount={card.length} />
      <Outlet context={[card, setCard] satisfies SetCardContext} />
    </div>
  );
}

export default App;
