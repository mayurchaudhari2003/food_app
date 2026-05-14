import React, { useContext, useEffect } from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { FcSearch } from "react-icons/fc";
import { FaShoppingCart } from "react-icons/fa";
import { dataContext } from "../context/UserContext";
import { food_items } from "../food";
import { useSelector } from "react-redux";
function Nav() {
  const { input, setinput, cate, setcate, showCart, setShowCart } =
    useContext(dataContext);

  useEffect(() => {
    if (input === "") {
      setcate(food_items);
    } else {
      const newlist = food_items.filter((item) =>
        item.food_name.toLowerCase().includes(input.toLowerCase()),
      );
      setcate(newlist);
    }
  }, [input, setcate]); // ✅ add setcate dependency
  let items = useSelector((state) => state.cart);
  return (
    <div className="w-full h-[100px] flex justify-between items-center px-5 md:px-8">
      {/* Logo */}
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl">
        <IoFastFoodOutline className="w-[30px] h-[30px] text-green-500" />
      </div>

      {/* Search Bar */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[45%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md md:w-[70%]"
      >
        <FcSearch className="w-5 h-5" />

        <input
          type="text"
          placeholder="Search Your Favourite Food"
          className="w-full outline-none text-[16px] md:text-[20px]"
          value={input}
          onChange={(e) => setinput(e.target.value)}
        />
      </form>

      {/* Cart */}
      <div
        className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative"
        onClick={() => {
          setShowCart(true);
        }}
      >
        <span className="absolute top-0 right-1 text-green-500 font-bold text-[18px]">
          {items.length}
        </span>
        <FaShoppingCart className="w-[30px] h-[30px] text-green-500" />
      </div>
    </div>
  );
}

export default Nav;
