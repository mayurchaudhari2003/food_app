import { RiGalleryView2 } from "react-icons/ri";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { CiBowlNoodles } from "react-icons/ci";
import { IoIosRestaurant } from "react-icons/io";
import { GiFullPizza } from "react-icons/gi";
import { FaBurger } from "react-icons/fa6";
const categories = [
  {
    id: 1,
    name: "All",
    value: "All",
    icon: <RiGalleryView2 className="w-[60px] h-[60px] text-green-600" />,
  },
  {
    id: 2,
    name: "Breakfast",
    value: "breakfast",
    icon: (
      <MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-green-600" />
    ),
  },
  {
    id: 3,
    name: "Soups",
    value: "soups",
    icon: <LuSoup className="w-[60px] h-[60px] text-green-600" />,
  },
  {
    id: 4,
    name: "Pasta",
    value: "pasta",
    icon: <CiBowlNoodles className="w-[60px] h-[60px] text-green-600" />,
  },
  {
    id: 5,
    name: "Main Course",
    value: "main_course", // ✅ FIXED
    icon: <IoIosRestaurant className="w-[60px] h-[60px] text-green-600" />,
  },
  {
    id: 6,
    name: "Pizza",
    value: "pizza",
    icon: <GiFullPizza className="w-[60px] h-[60px] text-green-600" />,
  },
  {
    id: 7,
    name: "Burgers",
    value: "burger", // ✅ FIXED
    icon: <FaBurger className="w-[60px] h-[60px] text-green-600 " />,
  },
];

export default categories;
