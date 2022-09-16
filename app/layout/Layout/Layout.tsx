import { FunctionComponent, ReactNode } from "react";
import { Catalog } from "../Catalog/Catalog";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import styles from "./Layout.module.scss";
import cn from "classnames";

interface LayoutProps extends React.ComponentPropsWithRef<"div"> {
  children: ReactNode;
}
export const Layout = ({ children, ...props }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.wrapper} {...props}>
      <Header className={cn(styles.header, styles.container)} />
      <Catalog className={cn(styles.catalog, styles.container)} />
      <main className={cn(styles.main, styles.container)}>{children}</main>
      <Footer className={cn(styles.footer, styles.container)} />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
