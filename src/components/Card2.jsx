import React from "react";
import { RiDeleteBin4Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { RemoveItem, addItem, decreaseQty } from "../redux/cartSlice";

function Card2({ name, id, image, price, qty }) {
  let dispatch = useDispatch();

  return (
    <div className="w-full h-[130px] p-2 shadow-lg flex justify-between">
      <div className="w-[70%] h-full flex gap-4">
        <div className="w-[40%] h-full overflow-hidden rounded-lg">
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="w-[60%] h-full flex flex-col justify-between">
          <div className="text-lg text-gray-600 font-semibold">{name}</div>

          {/* ✅ SAME UI — only added logic */}
          <div className="w-full h-[45px] flex rounded-lg overflow-hidden shadow-md border-2 border-green-400">
            {/* - button */}
            <button
              className="flex-1 bg-white flex justify-center items-center text-green-500 text-xl hover:bg-green-200"
              onClick={() => dispatch(decreaseQty(id))}
            >
              -
            </button>

            <span className="flex-1 bg-gray-100 flex justify-center items-center text-green-500 text-lg">
              {qty}
            </span>

            {/* + button */}
            <button
              className="flex-1 bg-white flex justify-center items-center text-green-500 text-xl hover:bg-green-200"
              onClick={() => dispatch(addItem({ id, name, image, price }))}
            >
              +
            </button>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-green-500 font-semibold">Rs {price}/-</span>

            <RiDeleteBin4Line
              className="text-red-500 text-xl cursor-pointer"
              onClick={() => dispatch(RemoveItem(id))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card2;
