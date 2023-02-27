interface ITitle {
  title: string;
}

export const Title: React.FC<ITitle> = ({ title }) => {
  return (
    <h1 className="font-bold text-3xl text-black/80 border-l-4 border-pink-300 pl-3 hover:text-red-500 md:items-center items-start flex">
      {title}
    </h1>
  );
};
