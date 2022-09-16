import cn from "classnames";
import { HeaderProps } from "./Header.props";
import styles from "./Header.module.scss";

export const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <header {...props} className={cn(className, styles.header)}>
      Header
    </header>
  );
};
