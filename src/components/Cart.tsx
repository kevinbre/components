import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { Button } from "./Button";

export const Cart: React.FC = () => {
  const [toggleCart, setToggleCart] = useState(false);
  return (
    <div className="relative">
      <div
        onClick={() => setToggleCart(!toggleCart)}
        className="border-2 border-transparent hover:border-red-500"
      >
        <span className="cursor-pointer rounded-full p-[2px] absolute bg-red-500 text-center text-white flex justify-center items-center text-[10px] font-bold -top-1 -right-2">
          <p className="relative w-3 h-3 flex justify-center items-center">1</p>
        </span>
        <AiOutlineShoppingCart className="text-white text-2xl cursor-pointer" />
      </div>
      {toggleCart && (
        <div className="bg-white absolute rounded-lg p-4 right-0 w-max shadow-md flex flex-col gap-5">
          <div className="flex gap-2 justify-center items-center">
            <AiOutlineShoppingCart className="text-black text-xl" />
            <h2 className="font-bold text-slate-900">Carrito de Compra</h2>
          </div>
          <ul className="flex">
            <li className="flex gap-4 items-center">
              <img
                src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
                alt="Samsung tv"
                width={45}
              />
              <div className="">
                <p className="font-bold">Tv Samsung 49"</p>
                <p className="font-semibold text-sm">
                  Tv curvo samsung 49", panel ips, 144hz.
                </p>
              </div>
              <div>
                <span className="font-bold">$123.000</span>
              </div>
              <BsTrash className="text-black text-xl hover:text-red-500 cursor-pointer" />
            </li>
          </ul>
          <Button>Comprar Carrito</Button>
        </div>
      )}
    </div>
  );
};
