import React from "react";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice"; // ✅ FIXED import

function Card({ name, image, id, price, type }) {
  const dispatch = useDispatch();

  return (
    <div className="w-[300px] h-[400px] bg-white p-4 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 hover:border-green-300">
      <div className="w-full h-[60%] overflow-hidden rounded-lg">
        <img src={image} alt={name} className="object-cover w-full h-full" />
      </div>

      <div className="text-2xl font-semibold">{name}</div>

      <div className="w-full flex justify-between items-center">
        <div className="text-lg font-bold text-green-500">Rs {price}/-</div>

        <div className="flex items-center text-green-500 font-semibold gap-1">
          {type === "Veg" ? <LuLeafyGreen /> : <GiChickenOven />}
          <span>{type}</span>
        </div>
      </div>

      <button
        className="w-full p-3 rounded-lg bg-green-500 text-white hover:bg-green-400 transition-all"
        onClick={
          () => dispatch(addItem({ id, name, image, price })) // ✅ FIXED action name
        }
      >
        Add to cart
      </button>
    </div>
  );
}

export default Card;
