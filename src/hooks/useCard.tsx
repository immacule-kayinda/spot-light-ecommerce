import { useOutletContext } from "react-router-dom";
import { SetCardContext } from "../types";

export function useCard() {
  return useOutletContext<SetCardContext>();
}

export default useCard;
