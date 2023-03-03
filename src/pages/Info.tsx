import { Link } from "react-router-dom";
import { BounceButton } from "../components";
import { AiFillGithub } from "react-icons/ai";

export const Info: React.FC = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-8 bg-neutral-900">
      <a
        href="https://github.com/kevinbre/components"
        target="_blank"
        className="text-white hover:cursor-pointer hover:text-purple-500 hover:scale-105 flex  items-center gap-2 transition-all text-lg"
      >
        <AiFillGithub className="text-2xl" />
        Link al repo
      </a>
      <h1 className="font-bold md:text-3xl text-white text-xl">
        Charla sobre Componentes 🎉
      </h1>
      <Link to="/htmlcode">
        <div className="flex gap-5 cursor-pointer group hover:scale-105">
          <p className="text-white text-2xl group-hover:hover:text-purple-500 ">
            Empezar
          </p>
          <div className="-rotate-90">
            <BounceButton />
          </div>
        </div>
      </Link>
    </div>
  );
};
