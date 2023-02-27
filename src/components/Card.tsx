import { Button } from "./Button";

interface IProductsList {
  id: string;
  image: string;
  title: string;
  description: string;
}

export const Card: React.FC<IProductsList> = ({
  id,
  image,
  title,
  description,
}) => {
  return (
    <li
      key={id}
      className="w-56 bg-white rounded-lg flex flex-col justify-between gap-4 px-2 py-4 shadow-lg border-2 border-transparent hover:border-red-500 group"
    >
      <div className="flex flex-col gap-2">
        <div className="h-36 flex justify-center items-center p-4">
          <img src={image} alt={`Imagen de ${title}`} className="max-h-36" />
        </div>
        <h2 className=" font-semibold">
          {title && title.length > 20 ? `${title.substring(0, 20)}...` : title}
        </h2>
        <p className="text-[12px]">
          {description.length > 100
            ? `${description.substring(0, 100)}...`
            : description}
        </p>
      </div>
      <Button btnColor="secondary">Agregar al carrito</Button>
    </li>
  );
};
