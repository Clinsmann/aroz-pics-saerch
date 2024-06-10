import { SyntheticEvent, FC, ReactNode } from "react";

type ButtonProps = {
  disabled?: boolean;
  children: ReactNode;
  onClick: (event: SyntheticEvent) => void;
};

export const Button: FC<ButtonProps> = ({ onClick, disabled, children }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="bg-gray-500 text-white p-2 rounded-lg shadow-lg disabled:opacity-50"
  >
    {children}
  </button>
);
