import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { ProductsList } from "../components/ProductsList";

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-9 py-10">
      <div>
        <ProductsList categoryName="men's clothing" />
        <ProductsList categoryName="jewelery" />
        <ProductsList categoryName="women's clothing" />
      </div>
      <div className="flex w-full justify-center">
        <Button onClick={() => navigate("/")}>Volver a empezar</Button>
      </div>
    </div>
  );
};
