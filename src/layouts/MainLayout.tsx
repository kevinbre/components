import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const MainLayout: React.FC = () => {
  return (
    <div className="bg-gray-300">
      <Navbar />
      <Outlet />
    </div>
  );
};
