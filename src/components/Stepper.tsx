import { Step } from "./Step";

export const Stepper: React.FC = () => {
  return (
    <ul className="gap-4 text-white items-center justify-center border-transparent border-2 hover:border-red-500 p-2 hover:rounded-full hidden md:flex">
      <Step active stepName="Productos" stepNumber={1} />
      <Step stepName="Carrito" stepNumber={2} />
      <Step stepName="Envio" stepNumber={3} />
      <Step stepName="Pago" stepNumber={4} />
    </ul>
  );
};
