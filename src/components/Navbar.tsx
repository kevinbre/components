import { Logo } from "../assets";
import { Cart } from "./Cart";
import { ProfileMenu } from "./ProfileMenu";
import { Stepper } from "./Stepper";

export const Navbar: React.FC = () => {
  return (
    <nav className="flex h-14 bg-slate-900 justify-around items-center hover:border-red-500 border-2 border-transparent cursor-default">
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
