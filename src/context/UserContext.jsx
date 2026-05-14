import { createContext, useState } from "react";
import { food_items } from "../food";

export const dataContext = createContext();

function UserContext({ children }) {
  const [input, setinput] = useState("");
  const [cate, setcate] = useState(food_items);
  const [showCart, setShowCart] = useState(false);
  return (
    <dataContext.Provider
      value={{ input, setinput, cate, setcate, showCart, setShowCart }}
    >
      {children}
    </dataContext.Provider>
  );
}

export default UserContext;
