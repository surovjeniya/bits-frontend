import { SidebarProps } from "./Sidebar.props";
import cn from "classnames";
import styles from "./Sidebar.module.scss";

export const Sidebar = ({ className, ...props }: SidebarProps) => {
  return <aside className={cn(className, styles.sidebar)}>Sidebar</aside>;
};
