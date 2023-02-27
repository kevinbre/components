import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FaRegCopy } from "react-icons/fa";
import { BsCheckLg } from "react-icons/bs";
import { Navbar } from "./Navbar";

export const CodeExample: React.FC = () => {
  const [copyHtml, setCopyHtml] = useState(false);
  const [copyReact, setCopyReact] = useState(false);

  const copyHtmlToClipboard = () => {
    setCopyHtml(true);
    navigator.clipboard.writeText(htmlCode);

    setTimeout(() => {
      setCopyHtml(false);
    }, 3000);
  };

  const copyReactToClipboard = () => {
    setCopyReact(true);
    navigator.clipboard.writeText(reactCode);

    setTimeout(() => {
      setCopyReact(false);
    }, 3000);
  };

  const reactCode = `
  import { Logo } from "../assets";
  import { Cart } from "./Cart";
  import { ProfileMenu } from "./ProfileMenu";
  import { Stepper } from "./Stepper";

  export const Navbar: React.FC = () => {
    return (
      <nav className="flex h-14 bg-slate-900 justify-around items-center hover:border-red-500 
      border-2 border-transparent cursor-default">
        <div className="flex justify-center items-center gap-2">
          <img src={Logo} alt="logo" width={50} />
          <div className="flex">
            <p className="text-white font-bold">Shop</p>
            <p className="font-bold text-pink-300">Components</p>
          </div>
        </div>
        <Stepper />
        <div className="flex gap-8 items-center">
          <Cart />
          <ProfileMenu />
        </div>
      </nav>
    );
  };
`;

  const htmlCode = `
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <nav
      className="flex h-14 bg-slate-900 justify-around items-center
      hover:border-red-500 border-2 
      border-transparent cursor-default"
    >
      <div className="flex justify-center items-center gap-2">
        <img src="./iamges/logo.png" alt="logo" width="50" />
        <div className="flex">
          <p className="text-white font-bold">Shop</p>
          <p className="font-bold text-pink-300">Components</p>
        </div>
      </div>
      <ul
        className="flex gap-4 text-white items-center justify-center border-transparent 
        border-2 hover:border-red-500 p-2 hover:rounded-full"
      >
        <li
          className="flex gap-2 justify-center items-center border-2 border-transparent
           hover:border-green-500 hover:rounded-full z-10"
        >
          <span
            className="bg-pink-300 text-black flex justify-center items-center 
            w-[20px] h-[20px] rounded-full font-semibold shadow-md"
          >
            1
          </span>
          <p className="text-pink-300 font-bold">Productos</p>
        </li>
        <li
          className="flex gap-2 justify-center items-center border-2 border-transparent
           hover:border-green-500 hover:rounded-full z-10"
        >
          <span
            className="bg-pink-300 text-black flex justify-center items-center w-[20px] 
            h-[20px] rounded-full font-semibold shadow-md"
          >
            1
          </span>
          <p className="text-pink-300 font-bold">Productos</p>
        </li>
        <li
          className="flex gap-2 justify-center items-center border-2 border-transparent
           hover:border-green-500 hover:rounded-full z-10"
        >
          <span
            className="bg-pink-300 text-black flex justify-center items-center 
            w-[20px] h-[20px] rounded-full font-semibold shadow-md"
          >
            1
          </span>
          <p className="text-pink-300 font-bold">Productos</p>
        </li>
        <li
          className="flex gap-2 justify-center items-center border-2 border-transparent
           hover:border-green-500 hover:rounded-full z-10"
        >
          <span
            className="bg-pink-300 text-black flex justify-center items-center 
            w-[20px] h-[20px] rounded-full font-semibold shadow-md"
          >
            1
          </span>
          <p className="text-pink-300 font-bold">Productos</p>
        </li>
      </ul>
      <div className="flex gap-8 items-center">
        <div className="relative">
          <div
            onClick="setToggleCart"
            className="border-2 border-transparent hover:border-red-500"
          >
            <span
              className="cursor-pointer rounded-full p-[2px] absolute bg-red-500 
              text-center text-white flex justify-center items-center text-[10px] 
              font-bold -top-1 -right-2"
            >
              <p className="relative w-3 h-3 flex justify-center items-center">
                1
              </p>
            </span>
            <AiOutlineShoppingCart
              className="text-white text-2xl cursor-pointer"
            />
          </div>
          <div
            className="bg-white absolute rounded-lg p-4 right-0 w-max 
            shadow-md flex flex-col gap-5"
          >
            <div className="flex gap-2 justify-center items-center">
              <AiOutlineShoppingCart className="text-black text-xl" />
              <h2 className="font-bold text-slate-900">Carrito de Compra</h2>
            </div>
            <ul className="flex">
              <li className="flex gap-4 items-center">
                <img
                  src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
                  alt="Samsung tv"
                  width="{45}"
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
                <BsTrash
                  className="text-black text-xl hover:text-red-500 cursor-pointer"
                />
              </li>
            </ul>
            <button
              className="px-4 py-2 bg-blue-500 rounded-md text-white font-bold hover:bg-blue-800"
            >
              Comprar Carrito
            </button>
          </div>
        </div>
        <div
          className="relative w-10 h-10 border-2 border-transparent hover:border-red-500"
        >
          <img
            src="{ProfilePicture}"
            alt="Profile picture"
            className="hover:opacity-60 hover:cursor-pointer rounded-full border-2 
            border-transparent bg-pink-300 border-pink-300"
            onClick="setToggleProfile(!toggleProfile)"
          />

          <ul
            className="bg-white absolute right-2 top-10 shadow-md rounded-lg flex flex-col"
          >
            <li
              className="flex gap-2 items-center px-4 hover:bg-pink-300 
              hover:rounded-t-lg py-2 cursor-pointer"
            >
              <BiUser />
              <p>Perfil</p>
            </li>
            <li
              className="flex gap-2 items-center px-4 hover:bg-pink-300 py-2 cursor-pointer"
            >
              <AiOutlineShoppingCart />
              <p>Compras</p>
            </li>
            <li
              className="flex gap-2 items-center border-t px-4 pt-2 hover:bg-pink-300 
              hover:rounded-b-lg py-2 cursor-pointer"
            >
              <CiLogout />
              <p>Salir</p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </body>
</html>
`;
  return (
    <div className="flex gap-10 flex-col max-w-full">
      <div className="flex flex-col">
        <div>
          <h1 className="font-bold">Navbar HTML</h1>
          <Navbar />
        </div>
        <div className="bg-[#3a404d] flex justify-between rounded-tl-md rounded-tr-md px-4 py-2 text-sm">
          <h2>Ejemplo Navbar HTML</h2>
          {copyHtml ? (
            <h2 className="flex justify-center items-center gap-1 cursor-pointer">
              <BsCheckLg /> Copied
            </h2>
          ) : (
            <h2
              className="flex justify-center items-center gap-1 cursor-pointer"
              onClick={copyHtmlToClipboard}
            >
              <FaRegCopy /> Copy
            </h2>
          )}
        </div>
        <SyntaxHighlighter
          language="typescript"
          style={atomOneDarkReasonable}
          className="rounded-md  max-h-96 overflow-auto"
        >
          {htmlCode}
        </SyntaxHighlighter>
      </div>
      <div className="flex flex-col">
        <div>
          <h1 className="font-bold">Navbar React</h1>
          <Navbar />
        </div>
        <div className="bg-[#3a404d] flex justify-between rounded-tl-md rounded-tr-md px-4 py-2 text-sm">
          <h2>Ejemplo Navbar React</h2>
          {copyReact ? (
            <span className="flex justify-center items-center gap-1 cursor-pointer">
              <BsCheckLg /> Copied
            </span>
          ) : (
            <span
              className="flex justify-center items-center gap-1 cursor-pointer"
              onClick={copyReactToClipboard}
            >
              <FaRegCopy /> Copy
            </span>
          )}
        </div>
        <SyntaxHighlighter
          language="typescript"
          style={atomOneDarkReasonable}
          className="rounded-md max-h-96 overflow-auto w-full"
        >
          {reactCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
