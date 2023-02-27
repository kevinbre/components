interface IButton {
  children: React.ReactNode;
  btnColor?: "primary" | "secondary";
  btnSize?: "sm" | "md" | "xl" | "base";
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<IButton> = ({
  children,
  btnColor = "primary",
  btnSize = "base",
  disabled = false,
  onClick = () => {},
}) => {
  const buttonColor = {
    primary: {
      color: "bg-blue-500 rounded-md text-white font-bold hover:bg-blue-800",
    },
    secondary: {
      color: "bg-pink-300 rounded-md text-white font-bold hover:bg-pink-400",
    },
  };

  const buttonSize = {
    sm: {
      size: "px-4 py-2 text-sm",
    },
    md: {
      size: "px-6 py-3 text-md",
    },
    xl: {
      size: "px-8 py-4 text-xl",
    },
    base: {
      size: "px-6 py-3 font-bold",
    },
  };

  const disabledClass = `disabled:opacity-50 disabled:cursor-not-allowed`;
  const activeClass = `enabled:active:scale-95`;

  return (
    <button
      disabled={disabled}
      className={`rounded-md ${buttonSize[btnSize].size} ${buttonColor[btnColor].color} ${disabledClass} ${activeClass}`}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};
