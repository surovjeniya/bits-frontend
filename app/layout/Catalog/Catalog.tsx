import { Sidebar } from "../Sidebar/Sidebar";
import styles from "./Catalog.module.scss";
import { CatalogProps } from "./Catalog.props";
import cn from "classnames";

export const Catalog = ({ className, ...props }: CatalogProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={cn(className, styles.catalog)}>
        <Sidebar className={styles.sidebar} />
        <div>Content</div>
      </div>
    </div>
  );
};
