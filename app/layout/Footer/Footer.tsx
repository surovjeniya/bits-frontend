import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.scss";
import cn from "classnames";

export const Footer = ({ className, ...props }: FooterProps) => {
  return <footer className={cn(className, styles.footer)}>Footer</footer>;
};
