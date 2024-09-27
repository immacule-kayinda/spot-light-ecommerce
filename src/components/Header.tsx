import {
  MaterialSymbolsLightLocalMallOutlineSharp,
  MaterialSymbolsSearch,
} from "../icons/MaterialSymbol";

export default function Header() {
  return (
    <div className="mb-10 flex justify-between">
      <img className="w-40" src="/logo.png" alt="image logo" />
      <div className="flex items-baseline gap-2 justify-center">
        <MaterialSymbolsSearch className="w-10 h-10" />
        <MaterialSymbolsLightLocalMallOutlineSharp className="w-10 h-10" />
      </div>
    </div>
  );
}
