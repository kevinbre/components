import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { CiLogout } from "react-icons/ci";
import { ProfilePicture } from "../assets";

export const ProfileMenu: React.FC = () => {
  const [toggleProfile, setToggleProfile] = useState(false);

  return (
    <div className="relative w-10 h-10 border-2 border-transparent hover:border-red-500">
      <img
        src={ProfilePicture}
        alt="Profile picture"
        className="hover:opacity-60 hover:cursor-pointer rounded-full border-2 border-transparent bg-pink-300 border-pink-300"
        onClick={() => setToggleProfile(!toggleProfile)}
      />
      {toggleProfile && (
        <ul className="bg-white absolute right-2 top-10 shadow-md rounded-lg flex flex-col">
          <li className="flex gap-2 items-center px-4 hover:bg-pink-300 hover:rounded-t-lg py-2 cursor-pointer">
            <BiUser />
            <p>Perfil</p>
          </li>
          <li className="flex gap-2 items-center px-4 hover:bg-pink-300 py-2 cursor-pointer">
            <AiOutlineShoppingCart />
            <p>Compras</p>
          </li>
          <li className="flex gap-2 items-center border-t px-4 pt-2 hover:bg-pink-300 hover:rounded-b-lg py-2 cursor-pointer">
            <CiLogout />
            <p>Salir</p>
          </li>
        </ul>
      )}
    </div>
  );
};
