import { Fragment, useEffect, useState } from "react";
import { Card } from "./Card";
import { Skeleton } from "./Skeleton";
import { Title } from "./Title";

interface IProductsList {
  categoryName: string;
}

interface IProductData {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
  rating: number;
  category: string;
}

export const ProductsList: React.FC<IProductsList> = ({ categoryName }) => {
  const [productData, setProductData] = useState<IProductData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getProductList = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProductData(json);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
  };

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="flex justify-center flex-col items-start mx-24 gap-5 mt-5">
        <div className="flex justify-center w-full md:justify-start">
          <Title title={categoryName} />
        </div>
        <ul className="flex flex-wrap gap-5 border-2 border-transparent hover:border-red-500 justify-center md:justify-start">
          {isLoading ? (
            <Skeleton num={4} />
          ) : (
            productData
              .filter(({ category }) => category === categoryName)
              .slice(0, 4)
              .map(
                ({ id, title, image, description, category }) =>
                  category === categoryName && (
                    <Fragment key={id}>
                      <Card
                        id={id}
                        image={image}
                        description={description}
                        title={title}
                      />
                    </Fragment>
                  )
              )
          )}
        </ul>
      </div>
    </div>
  );
};
