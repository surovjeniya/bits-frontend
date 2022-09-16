import cn from "classnames";
import { HeaderProps } from "./Header.props";
import styles from "./Header.module.scss";
import { Catalog } from "../Catalog/Catalog";
import { Button } from "@/components/Button/Button";
import { useState } from "react";
import Link from "next/link";

export const Header = ({ className, ...props }: HeaderProps) => {
  const [showCatalog, setShowCatalog] = useState<boolean>(false);
  const showCatalogMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    setShowCatalog(!showCatalog);
  };

  return (
    <header {...props} className={cn(className, styles.header)}>
      <div>
        <Link href="/">
          <Button>Логотип</Button>
        </Link>
      </div>
      <div>
        <Button onClick={showCatalogMenu}>Каталог</Button>
      </div>
      <div>
        <input type="text" placeholder="Искать в каталоге" />
        <button>Найти</button>
      </div>
      <div>
        <Link href="/cart">
          <Button>Корзина</Button>
        </Link>
      </div>
      <div>
        <Link href="/favorites">
          <Button>Избранное</Button>
        </Link>
      </div>
      <div>QR</div>
      <div>
        <Link href="/personal">
          <Button>Личный кабинет</Button>
        </Link>
      </div>
      {showCatalog ? (
        <div className={styles.catalogContainer}>
          <Catalog className={cn(styles.catalog)} />
        </div>
      ) : (
        ""
      )}
    </header>
  );
};
