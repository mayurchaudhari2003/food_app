import React, { useContext } from "react";
import Nav from "../components/Nav";
import categories from "../Category";
import Card from "../components/Card";
import { food_items } from "../food";
import { dataContext } from "../context/UserContext";
import { RxCross1 } from "react-icons/rx";
import Card2 from "../components/Card2";
import { useSelector } from "react-redux";

const Home = () => {
  const { cate, setcate, showCart, setShowCart } = useContext(dataContext);

  function filter(category) {
    if (category === "All") {
      setcate(food_items);
    } else {
      let newlist = food_items.filter(
        (item) => item.food_category === category,
      );
      setcate(newlist);
    }
  }

  // REDUX DATA
  let items = useSelector((state) => state.cart);

  // BILL CALCULATION
  let subtotal = items.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );

  let deliverycharge = 20;
  let taxes = Math.round((subtotal * 0.5) / 100);
  let total = Math.floor(subtotal + deliverycharge + taxes);

  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Nav />

      {/* CATEGORY SECTION */}
      <div className="flex flex-wrap justify-center items-center gap-5 w-full">
        {categories.map((item) => (
          <div
            key={item.name}
            className="w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all"
            onClick={() => filter(item.value)}
          >
            {item.name}
            {item.icon}
          </div>
        ))}
      </div>

      {/* FOOD ITEMS */}
      <div className="w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8">
        {cate.map((item) => (
          <Card
            key={item.id}
            name={item.food_name}
            image={item.food_image}
            id={item.id}
            price={item.price}
            type={item.food_type}
          />
        ))}
      </div>

      {/* CART SECTION */}
      <div
        className={`w-full md:w-[40vw] h-[100vh] fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 flex flex-col ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* HEADER */}
        <header className="w-full flex justify-between items-center">
          <span className="text-green-400 text-[18px] font-semibold">
            Ordered Items
          </span>

          <RxCross1
            className="w-5 h-5 cursor-pointer hover:text-red-600"
            onClick={() => setShowCart(false)}
          />
        </header>

        {items.length > 0 ? (
          <>
            {/* SCROLLABLE CART ITEMS */}
            <div className="flex-1 overflow-y-auto mt-5 pr-2">
              {items.map((item) => (
                <Card2
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  qty={item.qty}
                />
              ))}
            </div>

            {/* BILL SECTION */}
            <div className="w-full border-t-2 border-gray-400 mt-5 flex flex-col gap-4 p-6">
              <div className="w-full flex justify-between items-center">
                <span className="text-lg text-gray-600 font-semibold">
                  Subtotal
                </span>
                <span className="text-green-400 font-semibold text-lg">
                  Rs{subtotal}
                </span>
              </div>

              <div className="w-full flex justify-between items-center">
                <span className="text-lg text-gray-600 font-semibold">
                  Delivery Charge
                </span>
                <span className="text-green-400 font-semibold text-lg">
                  Rs{deliverycharge}
                </span>
              </div>

              <div className="w-full flex justify-between items-center">
                <span className="text-lg text-gray-600 font-semibold">
                  Taxes
                </span>
                <span className="text-green-400 font-semibold text-lg">
                  Rs{taxes}
                </span>
              </div>

              <div className="w-full flex justify-between items-center border-t pt-4">
                <span className="text-lg font-bold">Total</span>
                <span className="text-green-500 font-bold text-xl">
                  Rs{total}
                </span>
              </div>

              <button className="w-full p-3 rounded-lg bg-green-500 text-white hover:bg-green-400 transition-all">
                Place Order
              </button>
            </div>
          </>
        ) : (
          <div className="text-center text-2xl text-green-500 font-semibold pt-5">
            Cart is empty
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
