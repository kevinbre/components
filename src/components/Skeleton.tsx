import { useMemo } from "react";

interface ISkeleton {
  num: number;
}

export const Skeleton: React.FC<ISkeleton> = ({ num = 1 }) => {
  const newArray = useMemo(() => {
    return [...Array(num).keys()];
  }, [num]);

  return (
    <>
      {newArray.map((i) => (
        <li
          key={i}
          className="w-56 bg-white rounded-lg flex flex-col justify-between gap-4 px-2 py-4 shadow-lg border-2 border-transparent hover:border-red-500 group "
        >
          <div className="flex flex-col gap-2">
            <div className="h-36 flex justify-center items-center">
              <span className="h-36 w-full bg-slate-300 rounded-t-md animate-pulse" />
            </div>
            <h2 className="font-semibold h-8 w-full bg-slate-300 animate-pulse"></h2>
            <p className="text-[12px] h-16 w-full bg-slate-300 animate-pulse"></p>
          </div>
          <div className="h-12 w-full bg-slate-300 rounded-md animate-pulse"></div>
        </li>
      ))}
    </>
  );
};
