import { useState } from "react";
import {
  MaterialSymbolsLightLocalMallOutlineSharp,
  MaterialSymbolsSearch,
} from "../icons/MaterialSymbol";
import SearchBar from "./SearchBar";

export default function Header({ cardCount }: { cardCount: number }) {
  const [searchClicked, setSearchClicked] = useState<boolean>(false);
  const classIsClicked = !searchClicked
    ? "mb-10 flex justify-between"
    : "hidden";
  const searchDesapear = searchClicked
    ? "mb-10 p-10 flex justify-between"
    : "hidden";
  return (
    <>
      <div className={classIsClicked}>
        <img className="w-40" src="/logo.png" alt="image logo" />
        <div className="flex items-baseline gap-2 justify-center">
          <MaterialSymbolsSearch
            className="w-10 h-10"
            onClick={() => {
              setSearchClicked(true);
            }}
          />

          <MaterialSymbolsLightLocalMallOutlineSharp
            count={cardCount}
            className="w-10 h-10"
          />
        </div>
      </div>
      <SearchBar className={searchDesapear} setVisible={setSearchClicked} />
    </>
  );
}
