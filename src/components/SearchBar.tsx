import { Dispatch, SetStateAction, useState } from "react";
import { GravityUiXmark } from "../icons/MaterialSymbol";

export default function SearchBar({
  className,
  setVisible,
}: {
  className: string;
  setVisible: Dispatch<SetStateAction<boolean>>;
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleResearch = (searchTerm: string) => {
    // Add your logic to fetch products based on the search term
    console.log("Searching for:", searchTerm);
    // setProducts(newProducts); // Update the products state with the fetched data
    // setVisible(false); // Hide the search bar when a search is performed
  };

  return (
    <div className={className + " flex items-center"}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          handleResearch(e.target.value);
        }}
        placeholder="Recherchez un produit"
        className="p-3 bg-transparent border rounded-md border-black w-full "
      />
      <GravityUiXmark className="w-8 h-8" onClick={() => setVisible(false)} />
    </div>
  );
}
