import { ReactNode } from "react";

interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export const Button = ({ children, onClick, ...props }: ButtonProps) => {
  return (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  );
};
