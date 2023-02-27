interface ISteps {
  stepNumber: number;
  stepName: string;
  active?: boolean;
}

export const Step: React.FC<ISteps> = ({
  stepNumber,
  stepName,
  active = false,
}) => {
  const stepNumberClass = active
    ? "bg-pink-300 text-black"
    : "bg-white text-black";
  const stepNameClass = active ? "text-pink-300 font-bold" : "text-white";

  return (
    <li className="flex gap-2 justify-center items-center border-2 border-transparent hover:border-green-500 hover:rounded-full z-10">
      <span
        className={`${stepNumberClass} flex justify-center items-center w-[20px] h-[20px] rounded-full font-semibold shadow-md`}
      >
        {stepNumber}
      </span>
      <p className={`${stepNameClass} `}>{stepName}</p>
    </li>
  );
};
