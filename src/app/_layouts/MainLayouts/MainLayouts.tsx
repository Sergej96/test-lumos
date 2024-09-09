import { Header } from "@/widgets/Header";
import { FC, PropsWithChildren } from "react";
import styles from "./MainLayouts.module.css";

interface MainLayoutsProps {}

export const MainLayouts: FC<PropsWithChildren<MainLayoutsProps>> = ({
  children,
}) => {
  return (
    <>
      <Header />
      <main className={styles.container}>{children}</main>
    </>
  );
};
